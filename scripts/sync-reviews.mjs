import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const SOURCE = 'https://www.agautoplan.com/review';
const MAX_PAGES = 40;
const TARGET_IMPORT_REVIEWS = 20;
const MAX_DETAIL_SCANS = 300;
const OUTPUT = path.resolve('data/reviews.json');

const IMPORT_BRANDS = [
  ['메르세데스-벤츠', ['메르세데스', '벤츠', 'mercedes', 'e200', 'e220', 'e300', 'e450', 's450', 's500', 's580', 'gle', 'glc', 'gls', 'cla', 'cle', 'amg']],
  ['BMW', ['bmw', '비엠더블유']],
  ['아우디', ['아우디', 'audi']],
  ['볼보', ['볼보', 'volvo', 'xc40', 'xc60', 'xc90', 's60', 's90']],
  ['폭스바겐', ['폭스바겐', 'volkswagen', 'id.4', 'id4', '티구안', '아테온']],
  ['포르쉐', ['포르쉐', 'porsche', '카이엔', '마칸', '타이칸']],
  ['랜드로버', ['랜드로버', '레인지로버', 'land rover', 'range rover', '디펜더', '디스커버리']],
  ['렉서스', ['렉서스', 'lexus']],
  ['토요타', ['토요타', '도요타', 'toyota']],
  ['MINI', ['mini', '미니']],
  ['테슬라', ['테슬라', 'tesla', 'model y', 'model 3', 'model s', 'model x', '모델 y', '모델y', '모델3']],
  ['폴스타', ['폴스타', 'polestar']],
  ['지프', ['지프', 'jeep']],
  ['포드', ['포드', 'ford', '익스플로러', '브롱코', '머스탱']],
  ['링컨', ['링컨', 'lincoln']],
  ['캐딜락', ['캐딜락', 'cadillac']],
  ['푸조', ['푸조', 'peugeot']],
  ['마세라티', ['마세라티', 'maserati']],
  ['람보르기니', ['람보르기니', 'lamborghini']],
  ['페라리', ['페라리', 'ferrari']],
  ['벤틀리', ['벤틀리', 'bentley']],
  ['롤스로이스', ['롤스로이스', 'rolls-royce', 'rolls royce']]
];

const DOMESTIC_TERMS = [
  '현대', '기아', '제네시스', '르노', 'kgm', 'kg모빌리티', '쉐보레',
  '포터', '봉고', '그랜저', '아반떼', '쏘나타', '소나타', '싼타페', '투싼', '팰리세이드', '코나', '캐스퍼', '스타리아', '아이오닉',
  '모닝', '레이', 'k3', 'k5', 'k8', 'k9', '카니발', '쏘렌토', '스포티지', '셀토스', '니로', 'ev3', 'ev4', 'ev5', 'ev6', 'ev9',
  'g70', 'g80', 'g90', 'gv60', 'gv70', 'gv80',
  '토레스', '액티언', '티볼리', '렉스턴', '코란도',
  '아르카나', 'qm6', '그랑 콜레오스', '그랑콜레오스',
  '트랙스', '트레일블레이저', '트래버스'
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const clean = value => String(value || '').replace(/\s+/g, ' ').trim();

function isInvalidTitle(value = '') {
  const title = clean(value);
  if (!title) return true;
  return /접속할\s*수\s*없|페이지를\s*찾을\s*수\s*없|찾을\s*수\s*없|없어요|오류|error|not\s*found/i.test(title);
}

function normalizeReviewTitle(value = '') {
  let title = clean(value);
  title = title.replace(/^(?:\[?공지\]?|공지사항)\s*[:：-]?\s*/i, '').trim();
  return isInvalidTitle(title) ? '' : title;
}

function labelValue(text, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = String(text).match(new RegExp(`${escaped}\\s*[:：]\\s*([^\\n\\r]{1,180})`, 'i'));
  return clean(match?.[1] || '');
}

function detectImportBrand(title = '', model = '') {
  const haystack = clean(`${title} ${model}`).toLowerCase();
  if (!haystack) return '';
  if (DOMESTIC_TERMS.some(term => haystack.includes(term.toLowerCase()))) return '';
  for (const [label, keywords] of IMPORT_BRANDS) {
    if (keywords.some(keyword => haystack.includes(keyword.toLowerCase()))) return label;
  }
  return '';
}

function parseDate(text = '') {
  const patterns = [
    /(20\d{2})\s*[.\/-]\s*(\d{1,2})\s*[.\/-]\s*(\d{1,2})/,
    /(20\d{2})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일/
  ];
  for (const pattern of patterns) {
    const match = String(text).match(pattern);
    if (!match) continue;
    const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    if (!Number.isNaN(date.getTime())) return date;
  }
  return null;
}

function isoDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function normalizeUrl(raw, base = SOURCE) {
  if (!raw) return '';
  let value = String(raw).trim();
  if (!value) return '';
  if (value.includes(',')) value = value.split(',').pop().trim();
  value = value.split(/\s+/)[0];
  try {
    return new URL(value, base).href;
  } catch {
    return value;
  }
}

function isJunkImageUrl(raw = '') {
  const value = String(raw || '').toLowerCase();
  return !value ||
    /logo|icon|profile|avatar|favicon|loading|spinner|blank|transparent|placeholder|og-image|thumbnail-default|screenshot/.test(value) ||
    value.startsWith('data:image/svg') ||
    value.startsWith('data:image/gif');
}

function scoreImageUrl(url = '') {
  let score = 0;
  const value = String(url).toLowerCase();
  if (/cdn\.imweb\.me\/upload|imweb\.me\/upload/.test(value)) score += 3000;
  if (/upload/.test(value)) score += 1200;
  if (/thumbnail/.test(value)) score -= 200;
  if (/\.webp($|\?)/.test(value)) score += 160;
  if (/\.jpe?g($|\?)|\.png($|\?)/.test(value)) score += 140;
  return score;
}

function pickBestImageUrl(candidates = []) {
  const scored = [...new Set(candidates.map(v => normalizeUrl(v)).filter(Boolean))]
    .filter(url => !isJunkImageUrl(url))
    .map(url => ({ url, score: scoreImageUrl(url) }))
    .sort((a, b) => b.score - a.score);
  return scored[0]?.url || '';
}

function extractImwebUrlsFromHtml(html = '', base = SOURCE) {
  const text = String(html || '');
  const urls = new Set();
  const patterns = [
    /https?:\/\/cdn\.imweb\.me\/upload[^"'\s<>)]+/gi,
    /https?:\/\/imweb\.me\/upload[^"'\s<>)]+/gi,
    /\/upload\/[^"'\s<>)]+\.(?:png|jpe?g|webp)(?:\?[^"'\s<>)]+)?/gi,
    /https?:\/\/[^"'\s<>)]+\.(?:png|jpe?g|webp)(?:\?[^"'\s<>)]+)?/gi
  ];

  for (const pattern of patterns) {
    const matches = text.match(pattern) || [];
    for (const match of matches) {
      const url = normalizeUrl(match.replace(/\\//g, '/'), base);
      if (url && !isJunkImageUrl(url)) urls.add(url);
    }
  }
  return [...urls];
}

async function collectCurrentPageEntries(page) {
  return page.evaluate(() => {
    const entries = [];
    const seen = new Set();
    const selectors = [
      'a[href*="bmode=view"][href*="idx="]',
      '[data-url*="bmode=view"][data-url*="idx="]',
      '[onclick*="bmode=view"][onclick*="idx="]',
      'a[href*="idx="]',
      '[data-url*="idx="]',
      '[onclick*="idx="]'
    ];

    const cleanText = value => String(value || '').replace(/\s+/g, ' ').trim();
    const extractDate = value => {
      const text = String(value || '');
      const match = text.match(/20\d{2}\s*[.\/-]\s*\d{1,2}\s*[.\/-]\s*\d{1,2}/) ||
                    text.match(/20\d{2}\s*년\s*\d{1,2}\s*월\s*\d{1,2}\s*일/);
      return match?.[0] || '';
    };
    const abs = raw => {
      if (!raw) return '';
      try { return new URL(raw, location.href).href; } catch { return String(raw); }
    };
    const isJunk = raw => /logo|icon|profile|avatar|placeholder|blank/i.test(String(raw || ''));
    const extractImage = root => {
      if (!root) return '';
      const urls = [];
      for (const img of root.querySelectorAll('img')) {
        const raw = img.currentSrc || img.getAttribute('data-src') || img.getAttribute('data-original') ||
          img.getAttribute('data-lazy-src') || img.getAttribute('src') || '';
        if (raw && !isJunk(raw)) urls.push(abs(raw));
      }
      for (const el of root.querySelectorAll('[style*="background"]')) {
        const bg = getComputedStyle(el).backgroundImage || el.style.backgroundImage || '';
        const m = bg.match(/url\(["']?(.*?)["']?\)/i);
        if (!m?.[1] || isJunk(m[1])) continue;
        urls.push(abs(m[1]));
      }
      return urls[0] || '';
    };

    for (const el of document.querySelectorAll(selectors.join(','))) {
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      if (style.display === 'none' || style.visibility === 'hidden' || rect.width === 0 || rect.height === 0) continue;

      const raw = `${el.getAttribute('href') || ''} ${el.getAttribute('data-url') || ''} ${el.getAttribute('onclick') || ''}`.replace(/&amp;/g, '&');
      const id = raw.match(/[?&]idx=(\d+)/)?.[1] || raw.match(/idx(?:=|%3D)(\d+)/i)?.[1];
      if (!id || seen.has(id)) continue;

      let card = el;
      for (let depth = 0; depth < 7 && card?.parentElement; depth += 1) {
        const parent = card.parentElement;
        const rawText = String(parent.innerText || parent.textContent || '');
        const compact = cleanText(rawText);
        const hasReviewSignal = /출고\s*후기|리스|렌트/.test(rawText);
        const hasDate = Boolean(extractDate(rawText));
        if ((hasReviewSignal || hasDate) && compact.length <= 1800) card = parent;
        else if (compact.length > 1800) break;
        else card = parent;
      }

      const cardRawText = String(card?.innerText || card?.textContent || '');
      const cardText = cleanText(cardRawText);
      const anchorText = cleanText(el.innerText || el.textContent || '');
      const titleCandidates = [anchorText, ...cardRawText.split(/\n+/).map(cleanText)].filter(Boolean);
      const title = titleCandidates.find(text => /출고\s*후기/.test(text)) ||
        titleCandidates.find(text => /리스|렌트|출고/.test(text)) || anchorText || '';
      const date = extractDate(cardRawText);
      const image = extractImage(card);

      seen.add(id);
      entries.push({ id, title, date, image, listText: cardText });
    }
    return entries;
  });
}

async function clickNextListPage(page, currentPageNo) {
  const beforeUrl = page.url();
  const target = currentPageNo + 1;

  const clicked = await page.evaluate(targetPage => {
    const visible = el => {
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const candidates = [...document.querySelectorAll('a,button')].filter(visible);
    const exact = candidates.find(el => (el.textContent || '').trim() === String(targetPage));
    if (exact) { exact.click(); return true; }

    const next = candidates.find(el => {
      const text = (el.textContent || '').trim();
      const meta = `${el.getAttribute('aria-label') || ''} ${el.className || ''} ${el.getAttribute('title') || ''}`;
      return /^(다음|next|›|»|>)$/i.test(text) || /next|다음/i.test(meta);
    });
    if (next) { next.click(); return true; }
    return false;
  }, target);

  if (!clicked) return false;
  await page.waitForTimeout(1400);
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  return page.url() !== beforeUrl || clicked;
}

async function collectBoardOrder(page) {
  const ordered = [];
  const seen = new Set();

  await page.goto(SOURCE, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(2200);

  for (let pageNo = 1; pageNo <= MAX_PAGES; pageNo += 1) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);
    for (let i = 0; i < 3; i += 1) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(400);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);

    const entries = await collectCurrentPageEntries(page);
    console.log(`목록 ${pageNo}페이지: ${entries.length}건`);
    for (const entry of entries) {
      if (seen.has(entry.id)) continue;
      seen.add(entry.id);
      ordered.push(entry);
    }

    if (!entries.length) break;
    const moved = await clickNextListPage(page, pageNo);
    if (!moved) break;
  }

  ordered.sort((a, b) => {
    const ad = parseDate(a?.date || a?.listText || '')?.getTime() || 0;
    const bd = parseDate(b?.date || b?.listText || '')?.getTime() || 0;
    if (ad !== bd) return bd - ad;
    return Number(b?.id || 0) - Number(a?.id || 0);
  });

  return ordered;
}

async function parseDetail(page, entry, sourceOrder) {
  const id = String(entry?.id || '');
  const url = `${SOURCE}/?bmode=view&idx=${id}`;

  let data = { text: '', title: '', image: '', candidates: [] };

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(900);
    for (let i = 0; i < 4; i += 1) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(250);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    data = await page.evaluate(() => {
      const text = document.body?.innerText || '';
      const titleCandidates = [
        document.querySelector('.board_view .title')?.textContent,
        document.querySelector('.board_view [class*="title"]')?.textContent,
        document.querySelector('.board_txt_area h1')?.textContent,
        document.querySelector('.board_txt_area h2')?.textContent,
        document.querySelector('.board_txt_area h3')?.textContent,
        document.querySelector('[class*="board_title"]')?.textContent,
        document.querySelector('h1')?.textContent,
        document.querySelector('h2')?.textContent,
        document.title
      ].filter(Boolean).map(value => String(value).replace(/\s+/g, ' ').trim());

      const title = titleCandidates.find(value => /출고\s*후기/.test(value)) || titleCandidates[0] || '';
      const roots = [
        document.querySelector('.board_txt_area'),
        document.querySelector('.board_view_body'),
        document.querySelector('.board_view'),
        document.querySelector('[class*="board_view"]'),
        document.querySelector('article'),
        document.querySelector('main')
      ].filter(Boolean);
      const root = roots[0] || document.body;

      const abs = raw => {
        if (!raw) return '';
        let value = String(raw).trim();
        if (!value) return '';
        if (value.includes(',')) value = value.split(',').pop().trim();
        value = value.split(/\s+/)[0];
        try { return new URL(value, location.href).href; } catch { return value; }
      };
      const isJunk = raw => {
        const value = String(raw || '').toLowerCase();
        return !value ||
          /logo|icon|profile|avatar|favicon|loading|spinner|blank|transparent|placeholder|og-image|thumbnail-default|screenshot/.test(value) ||
          value.startsWith('data:image/svg') || value.startsWith('data:image/gif');
      };

      const candidates = [];
      const pushCandidate = (raw, bonus = 0) => {
        const candidateUrl = abs(raw);
        if (!candidateUrl || isJunk(candidateUrl)) return;
        let score = bonus;
        if (/cdn\.imweb\.me\/upload|imweb\.me\/upload/i.test(candidateUrl)) score += 3000;
        else if (/imweb|cdn|upload|files|image/i.test(candidateUrl)) score += 500;
        if (/thumbnail/i.test(candidateUrl)) score -= 200;
        candidates.push({ url: candidateUrl, score });
      };

      for (const img of root.querySelectorAll('img')) {
        const attrs = [
          img.currentSrc,
          img.dataset.src,
          img.dataset.original,
          img.dataset.lazySrc,
          img.getAttribute('data-image'),
          img.src,
          img.dataset.srcset,
          img.srcset
        ];

        const rect = img.getBoundingClientRect();
        const width = Math.max(img.naturalWidth || 0, rect.width || 0, Number(img.getAttribute('width')) || 0);
        const height = Math.max(img.naturalHeight || 0, rect.height || 0, Number(img.getAttribute('height')) || 0);
        if (width && height && (width < 220 || height < 140)) continue;

        let bonus = Math.min(width * height, 5_000_000);
        if (width >= 500) bonus += 400_000;
        if (height >= 300) bonus += 300_000;
        if (img.closest('.board_txt_area,.board_view,.board_view_body,[class*="board_view"]')) bonus += 1_000_000;

        for (const attr of attrs) pushCandidate(attr, bonus);
      }

      for (const el of root.querySelectorAll('[style*="background"]')) {
        const bg = getComputedStyle(el).backgroundImage || el.style.backgroundImage || '';
        const match = bg.match(/url\(["']?(.*?)["']?\)/i);
        if (!match?.[1]) continue;
        const rect = el.getBoundingClientRect();
        const bonus = Math.min((rect.width || 0) * (rect.height || 0), 5_000_000) + 600_000;
        pushCandidate(match[1], bonus);
      }

      for (const a of root.querySelectorAll('a[href]')) {
        const href = a.getAttribute('href') || '';
        if (/\.(png|jpe?g|webp)(\?|$)/i.test(href)) pushCandidate(href, 2_000_000);
      }

      candidates.sort((a, b) => b.score - a.score);
      return {
        text,
        title,
        image: candidates[0]?.url || '',
        candidates: candidates.map(item => item.url)
      };
    });

    if (!data.image) {
      const html = await page.content();
      const htmlCandidates = extractImwebUrlsFromHtml(html, url);
      data.image = pickBestImageUrl([...(data.candidates || []), ...htmlCandidates]);
    }
  } catch (error) {
    console.warn(`[상세 보조] #${sourceOrder} ${id} 상세페이지 로드 실패: ${error.message}`);
  }

  const listTitle = normalizeReviewTitle(entry?.title || '');
  const detailTitle = normalizeReviewTitle(data.title || '');
  const listText = String(entry?.listText || '');
  const combinedText = `${data.text || ''}\n${listText}`;
  const fallbackReviewLine = clean((combinedText.split(/\n+/).find(line => /출고\s*후기/.test(line)) || ''));
  const candidateTitle = detailTitle || listTitle || normalizeReviewTitle(fallbackReviewLine);

  // 최신 글은 상세페이지가 간헐적으로 오류 화면을 반환한다.
  // 이 경우에도 목록 카드에 있는 제목/모델명으로 수입차 여부를 먼저 확정한다.
  const listModel = labelValue(listText, '차량 모델명') ||
    clean(listTitle).replace(/\s*출고\s*후기.*$/i, '').trim();

  const model = labelValue(data.text, '차량 모델명') ||
    listModel ||
    clean(candidateTitle).replace(/\s*출고\s*후기.*$/i, '').trim() ||
    clean(entry?.title || '').replace(/\s*출고\s*후기.*$/i, '').trim();

  let title = normalizeReviewTitle(candidateTitle);
  if (!title || isInvalidTitle(title)) {
    title = listTitle || (model ? `${model} 출고 후기입니다.` : '');
  }
  title = normalizeReviewTitle(title);

  const listBrand = detectImportBrand(listTitle, listModel);
  const detailBrand = detectImportBrand(title || detailTitle, model);
  const brand = listBrand || detailBrand;

  if (!brand) {
    return { importCar: false, id, sourceOrder, title, model, reason: 'not-import' };
  }

  const date = parseDate(data.text) || parseDate(entry?.date || entry?.listText || '');
  if (!date) {
    console.log(`[날짜미확인] #${sourceOrder} ${id} ${title || model}`);
    return { importCar: false, id, sourceOrder, title, model, reason: 'date-missing' };
  }

  const image = pickBestImageUrl([data.image, entry?.image]);

  return {
    id: String(id),
    title: title || `${model || brand} 출고 후기입니다.`,
    brand,
    model,
    manager: labelValue(combinedText, '담당자'),
    color: labelValue(combinedText, '색상'),
    method: labelValue(combinedText, '진행 방식'),
    date: isoDate(date),
    image,
    url,
    sourceOrder
  };
}

const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({ locale: 'ko-KR', viewport: { width: 1440, height: 1800 } });
  const listPage = await context.newPage();

  console.log(`오토지니 후기 최신순에서 수입차 후기 ${TARGET_IMPORT_REVIEWS}건 수집 시작`);
  const entries = await collectBoardOrder(listPage);
  console.log(`게시판 최신순 기준 후기 ${entries.length}개 발견`);
  if (!entries.length) throw new Error('후기 게시글을 찾지 못했습니다.');

  const detailPage = await context.newPage();
  const reviews = [];
  const seen = new Set();
  let scanned = 0;

  for (let i = 0; i < entries.length && reviews.length < TARGET_IMPORT_REVIEWS && scanned < MAX_DETAIL_SCANS; i += 1) {
    const entry = entries[i];
    const id = String(entry?.id || '');
    if (!id || seen.has(id)) continue;
    seen.add(id);
    scanned += 1;

    const parsed = await parseDetail(detailPage, entry, i);
    if (parsed?.importCar === false) {
      console.log(`[제외] #${i} 국산/미확인 후기 ${id}`);
    } else if (parsed) {
      reviews.push(parsed);
      console.log(`[수입차 ${reviews.length}/${TARGET_IMPORT_REVIEWS}] #${parsed.sourceOrder} ${parsed.date} ${parsed.brand} ${parsed.title}`);
    }
    await sleep(160);
  }

  if (!reviews.length) throw new Error('수입차 후기를 한 건도 수집하지 못했습니다.');
  if (reviews.length < 8) {
    throw new Error(`수입차 후기가 ${reviews.length}건만 수집되었습니다. 잘못된 소수 후기 반복을 막기 위해 JSON을 갱신하지 않습니다.`);
  }

  const invalidSavedTitles = reviews.filter(review => isInvalidTitle(review.title));
  if (invalidSavedTitles.length) {
    throw new Error(`오류 페이지 제목이 ${invalidSavedTitles.length}건 남아 있어 reviews.json 저장을 중단합니다.`);
  }

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await fs.writeFile(OUTPUT, JSON.stringify({
    source: SOURCE,
    generatedAt: new Date().toISOString(),
    filter: 'latest-import-cars-only',
    targetCount: TARGET_IMPORT_REVIEWS,
    order: 'board-visible-order-newest-first',
    count: reviews.length,
    reviews
  }, null, 2) + '\n', 'utf8');

  console.log(`완료: 후기 게시판 최신순 기준 수입차 후기 ${reviews.length}건 저장`);
} finally {
  await browser.close();
}
