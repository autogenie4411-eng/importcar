(() => {
  const section = document.getElementById('reviewSection');
  const carousel = document.getElementById('reviewCarousel');
  const track = document.getElementById('reviewTrack');
  if (!section || !carousel || !track) return;

  const SWIPER_DELAY = 2200;
  const SWIPER_SPEED = 1000;
  const MAX_REVIEWS = 20;

  let renderedReviews = [];
  let hiddenAfterBrandSelection = false;
  let reviewSwiper = null;

  const escapeHtml = value => String(value ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

  function parseReviewDate(value) {
    const match = String(value || '').trim().match(/(\d{2,4})[.\/-](\d{1,2})[.\/-](\d{1,2})/);
    if (!match) return null;
    let year = Number(match[1]);
    if (year < 100) year += 2000;
    const date = new Date(year, Number(match[2]) - 1, Number(match[3]));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function formatReviewDate(value) {
    const date = parseReviewDate(value);
    if (!date) return '';
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  }

  function reviewKey(review) {
    if (review?.id) return String(review.id);
    return String(review?.url || `${review?.title || ''}|${review?.date || ''}`);
  }

  // Actions가 저장한 게시판 순서를 그대로 사용한다. 브라우저에서 재크롤링하거나 날짜순으로 다시 섞지 않는다.
  function prepareReviews(items) {
    const seen = new Set();
    const reviews = [];
    for (const review of Array.isArray(items) ? items : []) {
      if (!review?.title || !review?.url) continue;
      const key = reviewKey(review);
      if (seen.has(key)) continue;
      seen.add(key);
      reviews.push(review);
      if (reviews.length >= MAX_REVIEWS) break;
    }
    return reviews;
  }

  function detailLines(review) {
    const lines = [];
    if (review.manager) lines.push(`💕💕 담당자 : ${review.manager} 💕💕`);
    if (review.model) lines.push(`차량 모델명 : ${review.model}`);
    if (review.color) lines.push(`색상 : ${review.color}`);
    if (review.method) lines.push(`진행 방식 : ${review.method}`);
    return lines.slice(0, 4);
  }


  function imageMarkup(review) {
    const primary = String(review.image || '').trim();
    if (!primary) return `<div class="review-card__image review-card__image--empty"><span>후기 이미지 준비 중</span></div>`;
    return `<div class="review-card__image">
      <img src="${escapeHtml(primary)}" alt="${escapeHtml(review.title)}" loading="eager" decoding="async" referrerpolicy="no-referrer">
    </div>`;
  }

  function cardTemplate(review) {
    const lines = detailLines(review);
    const date = formatReviewDate(review.date);
    return `<article class="swiper-slide review-card" data-review-id="${escapeHtml(review.id)}">
      <a class="review-card__link" href="${escapeHtml(review.url)}" target="_blank" rel="noopener noreferrer">
        ${imageMarkup(review)}
        <div class="review-card__body">
          <strong class="review-card__title">${escapeHtml(review.title)}</strong>
          ${date ? `<time class="review-card__date" datetime="${escapeHtml(review.date)}">${escapeHtml(date)}</time>` : ''}
          ${lines.length ? `<div class="review-card__details">${lines.map(line => `<p>${escapeHtml(line)}</p>`).join('')}</div>` : ''}
          <span class="review-card__cta">후기 보기</span>
        </div>
      </a>
    </article>`;
  }

  function destroyReviewSwiper() {
    if (!reviewSwiper) return;
    try { reviewSwiper.destroy(true, true); } catch {}
    reviewSwiper = null;
  }

  function initReviewSwiper() {
    destroyReviewSwiper();
    if (hiddenAfterBrandSelection || renderedReviews.length < 2 || typeof window.Swiper !== 'function') return;

    reviewSwiper = new window.Swiper(carousel, {
      slidesPerView: 'auto',
      spaceBetween: 14,
      slidesOffsetBefore: 26,
      slidesOffsetAfter: 26,
      loop: true,
      rewind: false,
      loopAdditionalSlides: Math.min(8, renderedReviews.length),
      loopPreventsSliding: false,
      speed: SWIPER_SPEED,
      grabCursor: true,
      allowTouchMove: true,
      simulateTouch: true,
      followFinger: true,
      threshold: 3,
      touchRatio: 1,
      resistance: true,
      resistanceRatio: 0.72,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.28,
      longSwipesMs: 220,
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      autoplay: {
        delay: SWIPER_DELAY,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: true,
        stopOnLastSlide: false
      },
      breakpoints: {
        0: { spaceBetween: 10, slidesOffsetBefore: 14, slidesOffsetAfter: 14 },
        561: { spaceBetween: 12, slidesOffsetBefore: 18, slidesOffsetAfter: 18 },
        821: { spaceBetween: 14, slidesOffsetBefore: 26, slidesOffsetAfter: 26 }
      }
    });
  }

  function bindImageFallbacks() {
    track.querySelectorAll('.review-card__image img').forEach(img => {
      img.addEventListener('load', () => img.closest('.review-card__image')?.classList.add('is-loaded'), { once: true });
      img.addEventListener('error', () => {
        const slot = img.closest('.review-card__image');
        if (slot) {
          slot.classList.add('review-card__image--empty');
          slot.innerHTML = '<span>후기 이미지 준비 중</span>';
        }
      }, { once: true });
    });
  }

  function renderReviewList(items) {
    renderedReviews = prepareReviews(items);
    if (!renderedReviews.length) {
      section.hidden = true;
      destroyReviewSwiper();
      return;
    }
    if (hiddenAfterBrandSelection) {
      section.hidden = true;
      destroyReviewSwiper();
      return;
    }
    section.hidden = false;
    track.innerHTML = renderedReviews.map(cardTemplate).join('');
    bindImageFallbacks();
    requestAnimationFrame(() => requestAnimationFrame(initReviewSwiper));
  }

  function restoreReviewSection() {
    hiddenAfterBrandSelection = false;
    if (!renderedReviews.length) return;
    section.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      initReviewSwiper();
      reviewSwiper?.slideToLoop?.(0, 0, false);
      reviewSwiper?.autoplay?.start?.();
    }));
  }

  async function loadReviews() {
    try {
      const response = await fetch(`data/reviews.json?v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      renderReviewList(Array.isArray(payload) ? payload : payload.reviews || []);
    } catch (error) {
      console.warn('수입차 후기 데이터를 불러오지 못했습니다.', error);
      section.hidden = true;
    }
  }

  document.addEventListener('click', event => {
    const brandButton = event.target.closest?.('.wizard-brand-grid button[data-brand]');
    if (!brandButton) return;
    hiddenAfterBrandSelection = true;
    section.hidden = true;
    reviewSwiper?.autoplay?.stop?.();
    destroyReviewSwiper();
  }, true);

  document.addEventListener('autogenie:wizard-reset', restoreReviewSection);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !hiddenAfterBrandSelection) reviewSwiper?.autoplay?.start?.();
  });

  loadReviews();
})();
