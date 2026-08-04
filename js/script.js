(() => {
  "use strict";

  function resetPageScroll() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // 초기 진입 시에만 한 번 맨 위에서 시작합니다.
  // load/pageshow 이후에는 사용자가 이미 선택하거나 스크롤했을 수 있으므로
  // 스크롤 위치를 다시 0으로 변경하지 않습니다.
  resetPageScroll();

  // 프로젝트 폴더가 어느 경로로 이동해도 에셋을 script.js 위치 기준으로 찾습니다.
  const scriptElement = document.currentScript;
  const scriptUrl = new URL(scriptElement?.src || "js/script.js", document.baseURI);
  const projectRootUrl = new URL("../", scriptUrl);

  function assetUrl(relativePath) {
    if (!relativePath) return "";

    try {
      return new URL(relativePath, projectRootUrl).href;
    } catch (error) {
      console.warn("에셋 경로를 해석하지 못했습니다.", relativePath, error);
      return relativePath;
    }
  }
  const landingLoader = document.getElementById("landingLoader");
  if (landingLoader) {
    document.body.classList.add("loader-active");

    window.setTimeout(() => {
      landingLoader.setAttribute("aria-hidden", "true");

      // 로더가 사라진 뒤에는 현재 스크롤 위치를 건드리지 않습니다.
      // 사용자가 빠르게 차량 구분을 선택한 경우에도 맨 위로 튀지 않습니다.
      window.setTimeout(() => {
        document.body.classList.remove("loader-active");
        landingLoader.remove();
      }, 400);
    }, 3000);
  }


/* =========================================================
   차량별 세부모델 직접 수정 방법
   각 차량의 detailModels만 수정하면 STEP 02 목록이 달라집니다.

   예시:
   "detailModels": [
     { "name": "2.5 가솔린", "trims": ["프리미엄", "익스클루시브", "캘리그래피"] },
     { "name": "3.5 가솔린", "trims": ["프리미엄", "익스클루시브"] }
   ]

   name  : 큰 세부모델 버튼명
   trims : 해당 세부모델을 눌렀을 때 표시되는 하위 트림 목록
========================================================= */
const vehicleCatalog = [
  {
    "name": "현대",
    "short": "HYUNDAI",
    "market": "domestic",
    "ownBackground": false,
    "cars": [
      {
        "name": "그랜저",
        "detailModels": [
          {
            "name": "2.5 가솔린",
            "trims": [
              "프리미엄",
              "익스클루시브",
              "캘리그래피",
              "캘리그래피 블랙 잉크"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-384",
            "name": "녹턴 그레이 매트(무광 컬러)",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-녹턴 그레이 매트(무광 컬러).webp"
          },
          {
            "id": "paint-385",
            "name": "녹턴 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-녹턴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-386",
            "name": "바이오필릭 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-바이오필릭 블루 펄.webp"
          },
          {
            "id": "paint-387",
            "name": "세레니티 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-세레니티 화이트 펄.webp"
          },
          {
            "id": "paint-388",
            "name": "아티스널 버건디 펄",
            "hex": "#6f3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-아티스널 버건디 펄.webp"
          },
          {
            "id": "paint-389",
            "name": "아티스널 버건디 펄(무광컬러)",
            "hex": "#6f3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-아티스널 버건지 매트(무광 컬러).webp"
          },
          {
            "id": "paint-390",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-391",
            "name": "에어로 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-에어로 실버 메탈릭.webp"
          },
          {
            "id": "paint-392",
            "name": "트랜스미션 블루 매트(무광 컬러)",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-트랜스미션 블루 매트(무광 컬러).webp"
          },
          {
            "id": "paint-393",
            "name": "트랜스미션 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-트랜스미션 블루 펄.webp"
          }
        ]
      },
      {
        "name": "그랜저 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "프리미엄",
              "익스클루시브",
              "캘리그래피",
              "캘리그래피 블랙 잉크"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-515",
            "name": "녹턴 그레이 매트(무광 컬러)",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-녹턴 그레이 매트(무광 컬러).webp"
          },
          {
            "id": "paint-516",
            "name": "녹턴 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-녹턴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-517",
            "name": "바이오필릭 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-바이오필릭 블루 펄.webp"
          },
          {
            "id": "paint-518",
            "name": "세레니티 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-세레니티 화이트 펄.webp"
          },
          {
            "id": "paint-519",
            "name": "아티스널 버건디 펄",
            "hex": "#6f3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-아티스널 버건디 펄.webp"
          },
          {
            "id": "paint-520",
            "name": "아티스널 버건디 펄(무광컬러)",
            "hex": "#6f3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-아티스널 버건지 매트(무광 컬러).webp"
          },
          {
            "id": "paint-521",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-522",
            "name": "에어로 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-에어로 실버 메탈릭.webp"
          },
          {
            "id": "paint-523",
            "name": "트랜스미션 블루 매트(무광 컬러)",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-트랜스미션 블루 매트(무광 컬러).webp"
          },
          {
            "id": "paint-524",
            "name": "트랜스미션 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/그랜저-트랜스미션 블루 펄.webp"
          }
        ]
      },
      {
        "name": "베뉴",
        "detailModels": [
          {
            "name": "1.6 가솔린",
            "trims": [
              "스마트",
              "프리미엄",
              "FLUX"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-394",
            "name": "데님 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/베뉴-데님 블루 펄.webp"
          },
          {
            "id": "paint-395",
            "name": "미라지 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/베뉴-미라지 그린.webp"
          },
          {
            "id": "paint-396",
            "name": "쉬머링 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/베뉴-쉬머링 실버 메탈릭.webp"
          },
          {
            "id": "paint-397",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/베뉴-아틀라스 화이트.webp"
          },
          {
            "id": "paint-398",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/베뉴-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-399",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/베뉴-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-400",
            "name": "퀀텀 실버 펄",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/베뉴-퀀텀 실버 펄.webp"
          }
        ]
      },
      {
        "name": "스타리아",
        "detailModels": [
          {
            "name": "3.5 LPG 투어러",
            "trims": [
              "스마트 (11인승)",
              "모던 (11인승)"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-401",
            "name": "다이나믹 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-다이나믹 옐로우.webp"
          },
          {
            "id": "paint-402",
            "name": "쉬머링 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-쉬머링 실버 메탈릭.webp"
          },
          {
            "id": "paint-403",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-404",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-405",
            "name": "크리미 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-크리미 화이트.webp"
          },
          {
            "id": "paint-406",
            "name": "클래지 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-클래지 블루 펄.webp"
          }
        ]
      },
      {
        "name": "스타리아 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV 투어러",
            "trims": [
              "스마트 (11인승)",
              "모던 (11인승)"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-525",
            "name": "다이나믹 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-다이나믹 옐로우.webp"
          },
          {
            "id": "paint-526",
            "name": "쉬머링 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-쉬머링 실버 메탈릭.webp"
          },
          {
            "id": "paint-527",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-528",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-529",
            "name": "크리미 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-크리미 화이트.webp"
          },
          {
            "id": "paint-530",
            "name": "클래지 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/스타리아-클래지 블루 펄.webp"
          }
        ]
      },
      {
        "name": "싼타페",
        "detailModels": [
          {
            "name": "2.5 가솔린 터보",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "H-Pick",
              "블랙 익스테리어",
              "캘리그래피",
              "블랙 잉크"
            ]
          },
          {
            "name": "2.5 가솔린 터보 AWD",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "H-Pick",
              "블랙 익스테리어",
              "캘리그래피",
              "블랙 잉크"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-407",
            "name": "사이버 세이지 펄",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-사이버 세이지 펄.webp"
          },
          {
            "id": "paint-408",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-409",
            "name": "얼씨 브래스 메탈릭 매트",
            "hex": "#8b7b52",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-얼씨 브래스 메탈릭 매트.webp"
          },
          {
            "id": "paint-410",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-411",
            "name": "크리미 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-크리미 화이트 펄.webp"
          }
        ]
      },
      {
        "name": "싼타페 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "H-Pick",
              "블랙 익스테리어",
              "캘리그래피",
              "블랙 잉크"
            ]
          },
          {
            "name": "1.6 HEV AWD",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "H-Pick",
              "블랙 익스테리어",
              "캘리그래피",
              "블랙 잉크"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-531",
            "name": "사이버 세이지 펄",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-사이버 세이지 펄.webp"
          },
          {
            "id": "paint-532",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-533",
            "name": "얼씨 브래스 메탈릭 매트",
            "hex": "#8b7b52",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-얼씨 브래스 메탈릭 매트.webp"
          },
          {
            "id": "paint-534",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-535",
            "name": "크리미 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/싼타페-크리미 화이트 펄.webp"
          }
        ]
      },
      {
        "name": "쏘나타",
        "detailModels": [
          {
            "name": "1.6 가솔린 터보",
            "trims": [
              "프리미엄",
              "에스",
              "익스클루시브",
              "인스퍼레이션",
              "N Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-412",
            "name": "녹턴 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-녹턴 그레이 매트.webp"
          },
          {
            "id": "paint-413",
            "name": "녹턴 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-녹턴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-414",
            "name": "바이오 필릭 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-바이오 필릭 블루 펄.webp"
          },
          {
            "id": "paint-415",
            "name": "세레니티 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-세레니티 화이트 펄.webp"
          },
          {
            "id": "paint-416",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-417",
            "name": "얼티메이트 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-얼티메이트 레드 메탈릭.webp"
          },
          {
            "id": "paint-418",
            "name": "에어로 실버 매트",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-에어로 실버 매트.webp"
          },
          {
            "id": "paint-419",
            "name": "트랜스 미션 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-트랜스 미션 블루 펄.webp"
          }
        ]
      },
      {
        "name": "쏘나타 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "프리미엄",
              "에스",
              "익스클루시브",
              "인스퍼레이션"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-536",
            "name": "녹턴 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-녹턴 그레이 매트.webp"
          },
          {
            "id": "paint-537",
            "name": "녹턴 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-녹턴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-538",
            "name": "바이오 필릭 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-바이오 필릭 블루 펄.webp"
          },
          {
            "id": "paint-539",
            "name": "세레니티 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-세레니티 화이트 펄.webp"
          },
          {
            "id": "paint-540",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-541",
            "name": "얼티메이트 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-얼티메이트 레드 메탈릭.webp"
          },
          {
            "id": "paint-542",
            "name": "에어로 실버 매트",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-에어로 실버 매트.webp"
          },
          {
            "id": "paint-543",
            "name": "트랜스 미션 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/쏘나타-트랜스 미션 블루 펄.webp"
          }
        ]
      },
      {
        "name": "아반떼",
        "detailModels": [
          {
            "name": "1.6 가솔린",
            "trims": [
              "스마트",
              "모던",
              "인스퍼레이션"
            ]
          },{
            "name": "1.6 가솔린 N라인",
            "trims": [
              "N라인"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-420",
            "name": "메타 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-메타 블루 펄.webp"
          },
          {
            "id": "paint-421",
            "name": "미라지 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-미라지 그린.webp"
          },
          {
            "id": "paint-422",
            "name": "아마존 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-아마존 그레이 메탈릭.webp"
          },
          {
            "id": "paint-423",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-아틀라스 화이트.webp"
          },
          {
            "id": "paint-424",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-425",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-에코트로닉 그레이 펄.webp"
          }
        ]
      },
      {
        "name": "아반떼 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "스마트",
              "모던 라이트",
              "모던",
              "인스퍼레이션"
            ]
          },{
            "name": "1.6 HEV N라인",
            "trims": [
              "N라인"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-544",
            "name": "메타 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-메타 블루 펄.webp"
          },
          {
            "id": "paint-545",
            "name": "미라지 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-미라지 그린.webp"
          },
          {
            "id": "paint-546",
            "name": "아마존 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-아마존 그레이 메탈릭.webp"
          },
          {
            "id": "paint-547",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-아틀라스 화이트.webp"
          },
          {
            "id": "paint-548",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-549",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아반떼-에코트로닉 그레이 펄.webp"
          }
        ]
      },
      {
        "name": "아이오닉5",
        "detailModels": [
          {
            "name": "Standard",
            "trims": [
              "E-Value +"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "E-Lite",
              "Modern",
              "Premium",
              "Inspiration"
            ]
          },
          {
           "name": "Long Range AWD",
            "trims": [
              "E-Lite",
              "Modern",
              "Premium",
              "Inspiration"
            ]
          },
          {
           "name": "Long Range N라인",
            "trims": [
              "E-Lite",
              "Modern",
              "Premium",
              "Inspiration"
            ]
          },
          {
           "name": "Long Range AWD N라인",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-426",
            "name": "그래비티 골드 매트",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-그래비티 골드 매트.webp"
          },
          {
            "id": "paint-427",
            "name": "디지털 틸 그린 펄",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-디지털 틸 그린 펄.webp"
          },
          {
            "id": "paint-428",
            "name": "루시드 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-루시드 블루 펄.webp"
          },
          {
            "id": "paint-429",
            "name": "사이버 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-사이버 그레이 메탈릭.webp"
          },
          {
            "id": "paint-430",
            "name": "셀라돈 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-셀라돈 그레이 매트.webp"
          },
          {
            "id": "paint-431",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-아틀라스 화이트.webp"
          },
          {
            "id": "paint-432",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-433",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-434",
            "name": "프로스티드 브라운 매트",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉5-프로스티드 브라운 매트.webp"
          }
        ]
      },
      {
        "name": "아이오닉6",
        "detailModels": [
          {
            "name": "Standard",
            "trims": [
              "E-Value +",
              "Exclusive",
              "Prestige"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "E-Lite",
              "Exclusive",
              "Prestige"
            ]
          },
          {
           "name": "Long Range AWD",
            "trims": [
              "E-Lite",
              "Exclusive",
              "Prestige"
            ]
          },
          {
            "name": "Long Range N라인",
            "trims": [
              "Exclusive",
              "Prestige"
            ]
          },
          {
            "name": "Long Range AWD N라인",
            "trims": [
              "Exclusive",
              "Prestige"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-435",
            "name": "그래비티 골드 매트",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉6-그래비티 골드 매트.webp"
          },
          {
            "id": "paint-436",
            "name": "녹턴 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉6-녹턴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-437",
            "name": "바이오 필릭 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉6-바이오 필릭 블루 펄.webp"
          },
          {
            "id": "paint-438",
            "name": "세레니티 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉6-세레니티 화이트 펄.webp"
          },
          {
            "id": "paint-439",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉6-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-440",
            "name": "트랜스미션 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉6-트랜스미션 블루 펄.webp"
          }
        ]
      },
      {
        "name": "아이오닉9",
        "detailModels": [
          {
            "name": "EV 항속형",
            "trims": [
              "익스클루시브 (7인승)",
              "프레스티지 (7인승)",
              "캘리그래피 (7인승)"
            ]
          },
          {
            "name": "EV 항속형 AWD",
            "trims": [
              "익스클루시브 (7인승)",
              "프레스티지 (7인승)",
              "캘리그래피 (7인승)"
            ]
          },
          {
            "name": "EV 성능형 AWD",
            "trims": [
              "익스클루시브 (7인승)",
              "프레스티지 (7인승)",
              "캘리그래피 (7인승)"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-441",
            "name": "녹턴 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉9-녹턴 그레이 매트.webp"
          },
          {
            "id": "paint-442",
            "name": "녹턴 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉9-녹턴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-443",
            "name": "세레니티 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉9-세레니티 화이트 펄.webp"
          },
          {
            "id": "paint-444",
            "name": "셀라돈 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉9-셀라돈 그레이 매트.webp"
          },
          {
            "id": "paint-445",
            "name": "셀라돈 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉9-셀라돈 그레이 메탈릭.webp"
          },
          {
            "id": "paint-446",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉9-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-447",
            "name": "이오노스피어 그린 펄",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/아이오닉9-이오노스피어 그린 펄.webp"
          }
        ]
      },
      {
        "name": "캐스퍼",
        "detailModels": [
          {
            "name": "1.0 가솔린",
            "trims": [
              "스마트",
              "디 에센셜",
              "인스퍼레이션"
            ]
          },
          {
            "name": "1.0 가솔린 터보",
            "trims": [
              "스마트",
              "디 에센셜",
              "인스퍼레이션"
            ]
          },
          {
            "name": "1.0 가솔린 밴",
            "trims": [
              "스마트",
              "스마트 초이스"
            ]
          },
          {
            "name": "1.0 가솔린 터보 밴",
            "trims": [
              "스마트",
              "스마트 초이스"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-448",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-아틀라스 화이트.webp"
          },
          {
            "id": "paint-449",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-450",
            "name": "언블리치드 아이보리",
            "hex": "#d8d0bf",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-언블리치드 아이보리.webp"
          },
          {
            "id": "paint-451",
            "name": "톰보이 카키",
            "hex": "#5e6452",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-톰보이 카키.webp"
          }
        ]
      },
      {
        "name": "캐스퍼 일렉트릭",
        "detailModels": [
          {
            "name": "EV 49.0kWh",
            "trims": [
              "프리미엄",
              "인스퍼레이션",
              "크로스",
              "라운지"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-550",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-아틀라스 화이트.webp"
          },
          {
            "id": "paint-551",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-552",
            "name": "언블리치드 아이보리",
            "hex": "#d8d0bf",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-언블리치드 아이보리.webp"
          },
          {
            "id": "paint-553",
            "name": "톰보이 카키",
            "hex": "#5e6452",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/캐스퍼-톰보이 카키.webp"
          }
        ]
      },
      {
        "name": "코나",
        "detailModels": [
          {
            "name": "1.6 가솔린 터보",
            "trims": [
              "Modern",
              "H-Pick",
              "Premium",
              "Inspiration",
              "Black Exterior"
            ]
          },
          {
            "name": "1.6 가솔린 터보 N라인",
            "trims": [
              "N Line"
            ]
          },
          {
            "name": "1.6 가솔린 터보 4WD",
            "trims": [
              "Premium",
              "Inspiration",
              "Black Exterior"
            ]
          },
          {
            "name": "1.6 가솔린 터보 4WD N라인",
            "trims": [
              "N Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-452",
            "name": "네오테릭 옐로우",
            "hex": "#b9cb58",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-네오테릭 옐로우.webp"
          },
          {
            "id": "paint-453",
            "name": "미라지 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-미라지 그린.webp"
          },
          {
            "id": "paint-454",
            "name": "사이버 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-사이버 그레이 메탈릭.webp"
          },
          {
            "id": "paint-455",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-아틀라스 화이트.webp"
          },
          {
            "id": "paint-456",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-457",
            "name": "얼티메이트 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-얼티메이트 레드 메탈릭.webp"
          },
          {
            "id": "paint-458",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-에코트로닉 그레이 펄.webp"
          }
        ]
      },
      {
        "name": "코나 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "Modern",
              "H-Pick",
              "Premium",
              "Inspiration",
              "Black Exterior"
            ]
          },
          {
            "name": "1.6 HEV N라인",
            "trims": [
              "N Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-554",
            "name": "네오테릭 옐로우",
            "hex": "#b9cb58",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-네오테릭 옐로우.webp"
          },
          {
            "id": "paint-555",
            "name": "미라지 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-미라지 그린.webp"
          },
          {
            "id": "paint-556",
            "name": "사이버 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-사이버 그레이 메탈릭.webp"
          },
          {
            "id": "paint-557",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-아틀라스 화이트.webp"
          },
          {
            "id": "paint-558",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-559",
            "name": "얼티메이트 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-얼티메이트 레드 메탈릭.webp"
          },
          {
            "id": "paint-560",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-에코트로닉 그레이 펄.webp"
          }
        ]
      },
      {
        "name": "코나 일렉트릭",
        "detailModels": [
          {
            "name": "Standard",
            "trims": [
              "E-Value +",
              "Premium"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "Premium",
              "Modern Plus",
              "Inspiration"
            ]
          },
          {
            "name": "Long Range N라인",
            "trims": [
              "Inspiration"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-561",
            "name": "네오테릭 옐로우",
            "hex": "#b9cb58",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-네오테릭 옐로우.webp"
          },
          {
            "id": "paint-562",
            "name": "미라지 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-미라지 그린.webp"
          },
          {
            "id": "paint-563",
            "name": "사이버 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-사이버 그레이 메탈릭.webp"
          },
          {
            "id": "paint-564",
            "name": "아틀라스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-아틀라스 화이트.webp"
          },
          {
            "id": "paint-565",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-566",
            "name": "얼티메이트 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-얼티메이트 레드 메탈릭.webp"
          },
          {
            "id": "paint-567",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/코나-에코트로닉 그레이 펄.webp"
          }
        ]
      },
      {
        "name": "투싼",
        "detailModels": [
          {
            "name": "1.6 가솔린 터보",
            "trims": [
              "모던",
              "프리미엄",
              "H-Pick",
              "인스퍼레이션",
              "블랙 익스테리어"
            ]
          },
          {
            "name": "1.6 가솔린 터보 AWD",
            "trims": [
              "모던",
              "프리미엄",
              "H-Pick",
              "인스퍼레이션",
              "블랙 익스테리어"
            ]
          },
          {
            "name": "1.6 가솔린 터보 N라인",
            "trims": [
              "N Line"
            ]
          },
          {
            "name": "1.6 가솔린 터보 AWD N라인",
            "trims": [
              "N Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-459",
            "name": "쉬머링 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-쉬머링 실버 메탈릭.webp"
          },
          {
            "id": "paint-460",
            "name": "아마존 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-아마존 그레이 메탈릭.webp"
          },
          {
            "id": "paint-461",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-462",
            "name": "크리미 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-크리미 화이트 펄.webp"
          },
          {
            "id": "paint-463",
            "name": "팬텀 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-팬텀 블랙 펄.webp"
          }
        ]
      },
      {
        "name": "투싼 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "모던",
              "프리미엄",
              "H-Pick",
              "인스퍼레이션",
              "블랙 익스테리어"
            ]
          },
          {
            "name": "1.6 HEV AWD",
            "trims": [
              "모던",
              "프리미엄",
              "H-Pick",
              "인스퍼레이션",
              "블랙 익스테리어"
            ]
          },
          {
            "name": "1.6 HEV N라인",
            "trims": [
              "N Line"
            ]
          },
          {
            "name": "1.6 HEV AWD N라인",
            "trims": [
              "N Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-568",
            "name": "쉬머링 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-쉬머링 실버 메탈릭.webp"
          },
          {
            "id": "paint-569",
            "name": "아마존 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-아마존 그레이 메탈릭.webp"
          },
          {
            "id": "paint-570",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-571",
            "name": "크리미 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-크리미 화이트 펄.webp"
          },
          {
            "id": "paint-572",
            "name": "팬텀 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/투싼-팬텀 블랙 펄.webp"
          }
        ]
      },
      {
        "name": "팰리세이드",
        "detailModels": [
          {
            "name": "2.5 가솔린 터보 9인승",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "캘리그래피"
            ]
          },
          {
            "name": "2.5 가솔린 터보 9인승 AWD",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "캘리그래피"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-464",
            "name": "갤럭시 마룬 펄",
            "hex": "#63323a",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-갤럭시 마룬 펄.webp"
          },
          {
            "id": "paint-465",
            "name": "로버스트 에메랄드 펄",
            "hex": "#355c4b",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-로버스트 에메랄드 펄.webp"
          },
          {
            "id": "paint-466",
            "name": "쉬머링 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-쉬머링 실버 메탈릭.webp"
          },
          {
            "id": "paint-467",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-468",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-469",
            "name": "캐스트 아이언 브라운 펄",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-캐스트 아이언 브라운 펄.webp"
          },
          {
            "id": "paint-470",
            "name": "크리미 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-크리미 화이트 펄.webp"
          },
          {
            "id": "paint-471",
            "name": "클래지 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-클래지 블루 펄.webp"
          }
        ]
      },
      {
        "name": "팰리세이드 하이브리드",
        "detailModels": [
          {
            "name": "2.5 HEV 9인승",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "캘리그래피"
            ]
          },
          {
            "name": "2.5 HEV 9인승 AWD",
            "trims": [
              "익스클루시브",
              "프레스티지",
              "캘리그래피"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-573",
            "name": "갤럭시 마룬 펄",
            "hex": "#63323a",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-갤럭시 마룬 펄.webp"
          },
          {
            "id": "paint-574",
            "name": "로버스트 에메랄드 펄",
            "hex": "#355c4b",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-로버스트 에메랄드 펄.webp"
          },
          {
            "id": "paint-575",
            "name": "쉬머링 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-쉬머링 실버 메탈릭.webp"
          },
          {
            "id": "paint-576",
            "name": "어비스 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-어비스 블랙 펄.webp"
          },
          {
            "id": "paint-577",
            "name": "에코트로닉 그레이 펄",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-에코트로닉 그레이 펄.webp"
          },
          {
            "id": "paint-578",
            "name": "캐스트 아이언 브라운 펄",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-캐스트 아이언 브라운 펄.webp"
          },
          {
            "id": "paint-579",
            "name": "크리미 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-크리미 화이트 펄.webp"
          },
          {
            "id": "paint-580",
            "name": "클래지 블루 펄",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/팰리세이드-클래지 블루 펄.webp"
          }
        ]
      },
      {
        "name": "포터2",
        "detailModels": [
          {
            "name": "2.5 LPG 슈퍼캡",
            "trims": [
              "초장축 스마트 M/T",
              "초장축 스마트",
              "초장축 모던 M/T",
              "초장축 모던",
              "초장축 프리미엄 M/T",
              "초장축 프리미엄"
            ]
          },
          {
            "name": "2.5 LPG 슈퍼캡 4WD",
            "trims": [
              "장축 스마트",
              "장축 모던",
              "장축 프리미엄"
            ]
          },
          {
            "name": "2.5 LPG 더블캡",
            "trims": [
              "초장축 스마트 M/T",
              "초장축 스마트",
              "초장축 모던 M/T",
              "초장축 모던",
              "초장축 프리미엄 M/T",
              "초장축 프리미엄"
            ]
          },
          {
            "name": "2.5 LPG 더블캡 4WD",
            "trims": [
              "장축 스마트",
              "장축 모던",
              "장축 프리미엄"
            ]
          },
          {
            "name": "2.5 LPG 일반캡",
            "trims": [
              "초장축 스마트 M/T",
              "초장축 스마트",
              "초장축 모던 M/T",
              "초장축 모던",
              "초장축 프리미엄 M/T",
              "초장축 프리미엄"
            ]
          },
          {
            "name": "2.5 LPG 일반캡 4WD",
            "trims": [
              "장축 스마트",
              "장축 모던",
              "장축 프리미엄"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-475",
            "name": "슬레이트 브라운",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/포터2-슬레이트 브라운.webp"
          },
          {
            "id": "paint-476",
            "name": "오닉스 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/포터2-오닉스 블루.webp"
          },
          {
            "id": "paint-477",
            "name": "크리미 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/포터2-크리미 화이트.webp"
          }
        ]
      },
      {
        "name": "포터2 일렉트릭",
        "detailModels": [
          {
            "name": "180Ah 슈퍼캡",
            "trims": [
              "초장축 스마트 스페셜",
              "초장축 프리미엄 스페셜"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-472",
            "name": "슬레이트 브라운",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/포터2 ev-슬레이트 브라운.webp"
          },
          {
            "id": "paint-473",
            "name": "오닉스 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/포터2 ev-오닉스 블루.webp"
          },
          {
            "id": "paint-474",
            "name": "크리미 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/현대/포터2 ev-크리미 화이트.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "제네시스",
    "short": "GENESIS",
    "market": "domestic",
    "ownBackground": false,
    "cars": [
      {
        "name": "G70",
        "detailModels": [
          {
            "name": "2.5 가솔린 터보",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "2.5 가솔린 터보 AWD",
            "trims": [
              "기본모델"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-316",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-317",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-마칼루 그레이.webp"
          },
          {
            "id": "paint-318",
            "name": "바트나 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-바트나 그레이.webp"
          },
          {
            "id": "paint-319",
            "name": "본드 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-본드 실버.webp"
          },
          {
            "id": "paint-320",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-비크 블랙.webp"
          },
          {
            "id": "paint-321",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-세빌 실버.webp"
          },
          {
            "id": "paint-322",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-우유니 화이트.webp"
          },
          {
            "id": "paint-323",
            "name": "카프리 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-카프리 블루.webp"
          },
          {
            "id": "paint-324",
            "name": "태즈먼 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g70-태즈먼 블루.webp"
          }
        ]
      },
      {
        "name": "G80",
        "detailModels": [
           {
            "name": "2.5 가솔린 터보",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "2.5 가솔린 터보 AWD",
            "trims": [
              "기본모델",
              "Black"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-333",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-334",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-마칼루 그레이.webp"
          },
          {
            "id": "paint-335",
            "name": "바트나 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-바트나 그레이.webp"
          },
          {
            "id": "paint-336",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-비크 블랙.webp"
          },
          {
            "id": "paint-337",
            "name": "세레스 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-세레스 블루.webp"
          },
          {
            "id": "paint-338",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-세빌 실버.webp"
          },
          {
            "id": "paint-339",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-우유니 화이트.webp"
          },
          {
            "id": "paint-340",
            "name": "태즈먼 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80-태즈먼 블루.webp"
          }
        ]
      },
      {
        "name": "일렉트리파이드 G80",
        "detailModels": [
          {
            "name": "EV 94.5kWh",
            "trims": [
              "기본모델"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-325",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-326",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-마칼루 그레이.webp"
          },
          {
            "id": "paint-327",
            "name": "마티라 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-마티라 블루.webp"
          },
          {
            "id": "paint-328",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-비크 블랙.webp"
          },
          {
            "id": "paint-329",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-세빌 실버.webp"
          },
          {
            "id": "paint-330",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-우유니 화이트.webp"
          },
          {
            "id": "paint-331",
            "name": "카프리 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-카프리 블루.webp"
          },
          {
            "id": "paint-332",
            "name": "태즈먼 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g80 ev-태즈먼 블루.webp"
          }
        ]
      },
      {
        "name": "G90",
        "detailModels": [
          {
            "name": "3.5 가솔린 터보",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "3.5 가솔린 터보 AWD",
            "trims": [
              "기본모델",
              "Black"
            ]
          },
          {
            "name": "3.5 가솔린 터보 MHEV",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "3.5 가솔린 터보 MHEV AWD",
            "trims": [
              "기본모델",
              "Black"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-341",
            "name": "마우이 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-마우이 블랙.webp"
          },
          {
            "id": "paint-342",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-343",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-마칼루 그레이.webp"
          },
          {
            "id": "paint-344",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-비크 블랙.webp"
          },
          {
            "id": "paint-345",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-세빌 실버.webp"
          },
          {
            "id": "paint-346",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-우유니 화이트.webp"
          },
          {
            "id": "paint-347",
            "name": "카프리 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-카프리 블루.webp"
          },
          {
            "id": "paint-348",
            "name": "태즈먼 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/g90-태즈먼 블루.webp"
          }
        ]
      },
      {
        "name": "GV60",
        "detailModels": [
          {
            "name": "스탠다드",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "스탠다드 AWD",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "퍼포먼스 AWD",
            "trims": [
              "기본모델"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-349",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-350",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-마칼루 그레이.webp"
          },
          {
            "id": "paint-351",
            "name": "마테호른 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-마테호른 화이트.webp"
          },
          {
            "id": "paint-352",
            "name": "세레스 블루 매트",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-세레스 블루 매트.webp"
          },
          {
            "id": "paint-353",
            "name": "세레스 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-세레스 블루.webp"
          },
          {
            "id": "paint-354",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-세빌 실버.webp"
          },
          {
            "id": "paint-355",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-우유니 화이트.webp"
          },
          {
            "id": "paint-356",
            "name": "트롬소 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-트롬소 그린.webp"
          },
          {
            "id": "paint-581",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv60 ev-마칼루 그레이.webp"
          }
        ]
      },
      {
        "name": "GV70",
        "detailModels": [
          {
            "name": "2.5 가솔린 터보",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "2.5 가솔린 터보 AWD",
            "trims": [
              "기본모델"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-366",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-367",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-마칼루 그레이.webp"
          },
          {
            "id": "paint-368",
            "name": "마테호른 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-마테호른 화이트.webp"
          },
          {
            "id": "paint-369",
            "name": "베링 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-베링 블루.webp"
          },
          {
            "id": "paint-370",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-비크 블랙.webp"
          },
          {
            "id": "paint-371",
            "name": "세레스 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-세레스 블루.webp"
          },
          {
            "id": "paint-372",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-세빌 실버.webp"
          },
          {
            "id": "paint-373",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-우유니 화이트.webp"
          },
          {
            "id": "paint-374",
            "name": "트롬소 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70-트롬소 그린.webp"
          }
        ]
      },
      {
        "name": "일렉트리파이드 GV70",
        "detailModels": [
          {
            "name": "EV 84kWh",
            "trims": [
              "기본모델"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-357",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-358",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-마칼루 그레이.webp"
          },
          {
            "id": "paint-359",
            "name": "마테호른 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-마테호른 화이트.webp"
          },
          {
            "id": "paint-360",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-비크 블랙.webp"
          },
          {
            "id": "paint-361",
            "name": "세레스 블루 매트",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-세레스 블루 매트.webp"
          },
          {
            "id": "paint-362",
            "name": "세레스 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-세레스 블루.webp"
          },
          {
            "id": "paint-363",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-세빌 실버.webp"
          },
          {
            "id": "paint-364",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-우유니 화이트.webp"
          },
          {
            "id": "paint-365",
            "name": "트롬소 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv70 ev-트롬소 그린.webp"
          }
        ]
      },
      {
        "name": "GV80",
        "detailModels": [
          {
            "name": "2.5 가솔린 터보",
            "trims": [
              "기본모델"
            ]
          },
          {
            "name": "2.5 가솔린 터보 AWD",
            "trims": [
              "기본모델",
              "Black"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-375",
            "name": "마칼루 그레이 매트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-마칼루 그레이 매트.webp"
          },
          {
            "id": "paint-376",
            "name": "마칼루 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-마칼루 그레이.webp"
          },
          {
            "id": "paint-377",
            "name": "메테호른 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-메테호른 화이트.webp"
          },
          {
            "id": "paint-378",
            "name": "베링 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-베링 블루.webp"
          },
          {
            "id": "paint-379",
            "name": "비크 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-비크 블랙.webp"
          },
          {
            "id": "paint-380",
            "name": "세레스 블루 매트",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-세레스 블루 매트.webp"
          },
          {
            "id": "paint-381",
            "name": "세레스 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-세레스 블루.webp"
          },
          {
            "id": "paint-382",
            "name": "세빌 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-세빌 실버.webp"
          },
          {
            "id": "paint-383",
            "name": "우유니 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/제네시스/gv80-우유니 화이트.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "기아",
    "short": "KIA",
    "market": "domestic",
    "ownBackground": false,
    "cars": [
      {
        "name": "EV3",
        "detailModels": [
          {
            "name": "Standard",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          },
          {
            "name": "Long Range 4WD",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-81",
            "name": "셰일 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev3-셰일 그레이.webp"
          },
          {
            "id": "paint-82",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev3-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-83",
            "name": "아이보리 매트 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev3-아이보리 매트 실버.webp"
          },
          {
            "id": "paint-84",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev3-아이보리 실버.webp"
          },
          {
            "id": "paint-85",
            "name": "어벤쳐린 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev3-어벤쳐린 그린.webp"
          },
          {
            "id": "paint-86",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev3-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-87",
            "name": "프로스트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev3-프로스트 블루.webp"
          }
        ]
      },
      {
        "name": "EV4",
        "detailModels": [
          {
            "name": "Standard",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          },
          {
            "name": "Long Range 4WD",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-88",
            "name": "마그마 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev4-마그마 레드.webp"
          },
          {
            "id": "paint-89",
            "name": "모닝 헤이즈",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev4-모닝 헤이즈.webp"
          },
          {
            "id": "paint-90",
            "name": "셰일 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev4-셰일 그레이.webp"
          },
          {
            "id": "paint-91",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev4-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-92",
            "name": "아이보리 매트 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev4-아이보리 매트 실버.webp"
          },
          {
            "id": "paint-93",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev4-아이보리 실버.webp"
          },
          {
            "id": "paint-94",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev4-오로라 블랙 펄.webp"
          }
        ]
      },
      {
        "name": "EV5",
        "detailModels": [
         {
            "name": "Standard",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          },
          {
            "name": "Long Range 4WD",
            "trims": [
              "에어",
              "어스",
              "GT-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-95",
            "name": "그래비티 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-그래비티 그레이.webp"
          },
          {
            "id": "paint-96",
            "name": "다크 오션 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-다크 오션 블루.webp"
          },
          {
            "id": "paint-97",
            "name": "마그마 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-마그마 레드.webp"
          },
          {
            "id": "paint-98",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-99",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-아이보리 실버.webp"
          },
          {
            "id": "paint-100",
            "name": "아이스버그 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-아이스버그 그린.webp"
          },
          {
            "id": "paint-101",
            "name": "아이스버그 매트 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-아이스버그 매트 그린.webp"
          },
          {
            "id": "paint-102",
            "name": "퓨전 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-퓨전 블랙.webp"
          },
          {
            "id": "paint-103",
            "name": "프로스트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev5-프로스트 블루.webp"
          }
        ]
      },
      {
        "name": "EV6",
        "detailModels": [
          {
            "name": "Standard",
            "trims": [
              "라이트",
              "에어",
              "어스"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "라이트",
              "에어",
              "어스",
              "GT-Line"
            ]
          },
          {
            "name": "Long Range 4WD",
            "trims": [
              "라이트",
              "에어",
              "어스",
              "GT-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-104",
            "name": "글래시어",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-글래시어.webp"
          },
          {
            "id": "paint-105",
            "name": "런웨이 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-런웨이 레드.webp"
          },
          {
            "id": "paint-106",
            "name": "문스케이프 매트 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-문스케이프 매트 그레이.webp"
          },
          {
            "id": "paint-107",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-108",
            "name": "아이보리 매트 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-아이보리 매트 실버.webp"
          },
          {
            "id": "paint-109",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-110",
            "name": "요트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-요트 블루.webp"
          },
          {
            "id": "paint-111",
            "name": "인터스텔라 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev6-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "EV9",
        "detailModels": [
         {
            "name": "Standard",
            "trims": [
              "라이트",
              "에어",
              "어스"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "라이트",
              "에어",
              "어스"
            ]
          },
          {
            "name": "Long Range 4WD",
            "trims": [
              "라이트",
              "에어",
              "어스",
              "GT-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-112",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev9-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-113",
            "name": "아이보리 매트 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev9-아이보리 매트 실버.webp"
          },
          {
            "id": "paint-114",
            "name": "아이스버그 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev9-아이스버그 그린.webp"
          },
          {
            "id": "paint-115",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev9-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-116",
            "name": "오션 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev9-오션 블루.webp"
          },
          {
            "id": "paint-117",
            "name": "판테라 메탈",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev9-판테라 메탈.webp"
          },
          {
            "id": "paint-118",
            "name": "페블 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/ev9-페블 그레이.webp"
          }
        ]
      },
      {
        "name": "K5",
        "detailModels": [
          {
            "name": "2.0 가솔린",
            "trims": [
              "스마트 셀렉션",
              "프레스티지",
              "베스트 셀렉션",
              "노블레스",
              "시그니처"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-119",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-120",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-121",
            "name": "울프 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-울프 그레이.webp"
          },
          {
            "id": "paint-122",
            "name": "인터스텔라 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "K5 하이브리드",
        "detailModels": [
          {
            "name": "2.0 HEV",
            "trims": [
              "프레스티지",
              "베스트 셀렉션",
              "노블레스",
              "시그니처"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-478",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-479",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-480",
            "name": "울프 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-울프 그레이.webp"
          },
          {
            "id": "paint-481",
            "name": "인터스텔라 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k5-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "K8",
        "detailModels": [
          {
            "name": "2.5 가솔린",
            "trims": [
              "노블레스 라이트",
              "베스트 셀렉션",
              "노블레스",
              "시그니처",
              "시그니처 블랙"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-123",
            "name": "문스케이프 매트 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-문스케이프 매트 그레이.webp"
          },
          {
            "id": "paint-124",
            "name": "선셋 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-선셋 베이지.webp"
          },
          {
            "id": "paint-125",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-126",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-아이보리 실버.webp"
          },
          {
            "id": "paint-127",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-482",
            "name": "인터스텔라 그레이",
            "hex": "#6f747b",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "K8 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "노블레스 라이트",
              "베스트 셀렉션",
              "노블레스",
              "시그니처",
              "시그니처 블랙"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-483",
            "name": "문스케이프 매트 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-문스케이프 매트 그레이.webp"
          },
          {
            "id": "paint-484",
            "name": "선셋 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-선셋 베이지.webp"
          },
          {
            "id": "paint-485",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-486",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-아이보리 실버.webp"
          },
          {
            "id": "paint-487",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-488",
            "name": "인터스텔라 그레이",
            "hex": "#6f747b",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k8-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "K9",
        "detailModels": [
          {
            "name": "3.8 가솔린",
            "trims": [
              "플래티넘"
            ]
          },
          {
            "name": "3.8 가솔린 AWD",
            "trims": [
              "플래티넘",
              "마스터즈"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-129",
            "name": "딥 크로마 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k9-딥 크로마 블루.webp"
          },
          {
            "id": "paint-130",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k9-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-131",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k9-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-132",
            "name": "판테라 메탈",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k9-판테라 메탈.webp"
          },
          {
            "id": "paint-133",
            "name": "페블 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/k9-페블 그레이.webp"
          }
        ]
      },
      {
        "name": "PV5 카고",
        "detailModels": [
          {
            "name": "Standard",
            "trims": [
              "Basic"
            ]
          },
          {
            "name": "Long Range",
            "trims": [
              "Basic"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-134",
            "name": "스틸 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/PV5 카고-스틸 그레이.webp"
          },
          {
            "id": "paint-135",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/PV5 카고-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-136",
            "name": "클리어 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/PV5 카고-클리어 화이트.webp"
          }
        ]
      },
      {
        "name": "니로 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "트렌디",
              "프레스티지",
              "시그니처"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-137",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-138",
            "name": "스틸 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-스틸 그레이.webp"
          },
          {
            "id": "paint-139",
            "name": "시티스케이프 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-시티스케이프 그린.webp"
          },
          {
            "id": "paint-140",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-141",
            "name": "인터스텔라 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "니로 EV",
        "detailModels": [
          {
            "name": "EV 64.8kWh",
            "trims": [
              "에어",
              "어스"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-489",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-490",
            "name": "스틸 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-스틸 그레이.webp"
          },
          {
            "id": "paint-491",
            "name": "시티스케이프 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-시티스케이프 그린.webp"
          },
          {
            "id": "paint-492",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-493",
            "name": "인터스텔라 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/니로-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "레이",
        "detailModels": [
          {
            "name": "1.0 가솔린",
            "trims": [
              "트렌디",
              "프레스티지",
              "시그니처",
              "X-Line"
            ]
          },
          {
            "name": "1.0 가솔린 1인승 밴",
            "trims": [
              "트렌디",
              "프레스티지",
              "프레스티지 스페셜"
            ]
          },
          {
            "name": "1.0 가솔린 2인승 밴",
            "trims": [
              "트렌디",
              "프레스티지",
              "프레스티지 스페셜"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-142",
            "name": "밀키 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이-밀키 베이지.webp"
          },
          {
            "id": "paint-143",
            "name": "아스트로 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이-아스트로 그레이.webp"
          },
          {
            "id": "paint-144",
            "name": "아쿠아 민트",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이-아쿠아 민트.webp"
          },
          {
            "id": "paint-145",
            "name": "어드벤쳐러스 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이-어드벤쳐러스 그린.webp"
          },
          {
            "id": "paint-146",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-147",
            "name": "클리어 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이-클리어 화이트.webp"
          }
        ]
      },
      {
        "name": "레이 EV",
        "detailModels": [
          {
            "name": "EV 35.2kWh",
            "trims": [
              "라이트",
              "에어"
            ]
          },
          {
            "name": "EV 35.2kWh 1인승 밴",
            "trims": [
              "라이트",
              "에어"
            ]
          },
          {
            "name": "EV 35.2kWh 2인승 밴",
            "trims": [
              "라이트",
              "에어"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-148",
            "name": "밀키 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이ev-밀키 베이지.webp"
          },
          {
            "id": "paint-149",
            "name": "아스트로 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이ev-아스트로 그레이.webp"
          },
          {
            "id": "paint-150",
            "name": "아쿠아 민트",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이ev-아쿠아 민트.webp"
          },
          {
            "id": "paint-151",
            "name": "어드벤쳐러스 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이ev-어드벤쳐러스 그린.webp"
          },
          {
            "id": "paint-152",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이ev-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-153",
            "name": "클리어 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/레이ev-클리어 화이트.webp"
          }
        ]
      },
      {
        "name": "모닝",
        "detailModels": [
          {
            "name": "1.0 가솔린",
            "trims": [
              "트렌디",
              "프레스티지",
              "시그니처",
              "GT-Line"
            ]
          },
          {
            "name": "1.0 가솔린 밴",
            "trims": [
              "트렌디",
              "프레스티지"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-154",
            "name": "밀키 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/모닝-밀키 베이지.webp"
          },
          {
            "id": "paint-155",
            "name": "스파클링 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/모닝-스파클링 실버.webp"
          },
          {
            "id": "paint-156",
            "name": "시그널 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/모닝-시그널 레드.webp"
          },
          {
            "id": "paint-157",
            "name": "아스트로 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/모닝-아스트로 그레이.webp"
          },
          {
            "id": "paint-158",
            "name": "어드벤쳐러스 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/모닝-어드벤쳐러스 그린.webp"
          },
          {
            "id": "paint-159",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/모닝-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-160",
            "name": "클리어 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/모닝-클리어 화이트.webp"
          }
        ]
      },
      {
        "name": "봉고3",
        "detailModels": [
          {
            "name": "1톤 킹캡 초장축",
            "trims": [
              "L 라이트 M/T",
              "L 라이트",
              "L M/T",
              "L",
              "L 스마트 셀렉션",
              "GL M/T",
              "GL",
              "GLS M/T",
              "GLS"
            ]
          },
          {
            "name": "1톤 킹캡 장축 4WD",
            "trims": [
              "GL 라이트",
              "GL",
              "GLS"
            ]
          },
          {
            "name": "1톤 더블캡 초장축",
            "trims": [
              "L 라이트 M/T",
              "L 라이트",
              "L M/T",
              "L",
              "GL M/T",
              "GL",
              "GLS M/T",
              "GLS"
            ]
          },
          {
           "name": "1톤 더블캡 장축 4WD",
            "trims": [
              "GL 라이트",
              "GL",
              "GLS"
            ]
          },
          {
            "name": "1톤 표준캡 초장축",
            "trims": [
              "L 라이트 M/T",
              "L 라이트",
              "L M/T",
              "L",
              "GL M/T",
              "GL",
              "GLS M/T",
              "GLS"
            ]
          },
          {
           "name": "1톤 표준캡 장축 4WD",
            "trims": [
              "GL 라이트",
              "GL",
              "GLS"
            ]
          },
          {
            "name": "1.2톤 킹캡 초장축",
            "trims": [
              "스마트 셀렉션",
              "GL M/T",
              "GL",
              "GLS M/T",
              "GLS"
            ]
          },
          {
            "name": "1.2톤 표준캡 초장축",
            "trims": [
              "GL M/T",
              "GL",
              "GLS M/T",
              "GLS"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-161",
            "name": "진감청",
            "hex": "#234267",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/봉고3-진감청.webp"
          },
          {
            "id": "paint-162",
            "name": "클리어 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/봉고3-클리어 화이트.webp"
          },
          {
            "id": "paint-163",
            "name": "퓨어 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/봉고3-퓨어 베이지.webp"
          }
        ]
      },
      {
        "name": "셀토스",
        "detailModels": [
          {
            "name": "1.6 가솔린 터보",
            "trims": [
              "트렌디",
              "프레스티지",
              "시그니처",
              "X-Line"
            ]
          },
          {
            "name": "1.6 가솔린 터보 AWD",
            "trims": [
              "트렌디",
              "프레스티지",
              "시그니처",
              "X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-164",
            "name": "그래비티 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-그래비티 그레이.webp"
          },
          {
            "id": "paint-165",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-166",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-아이보리 실버.webp"
          },
          {
            "id": "paint-167",
            "name": "아이스버그 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-아이스버그 그린.webp"
          },
          {
            "id": "paint-168",
            "name": "퓨전 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-퓨전 블랙.webp"
          },
          {
            "id": "paint-169",
            "name": "프로스트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-프로스트 블루.webp"
          }
        ]
      },
      {
        "name": "셀토스 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "트렌디",
              "프레스티지",
              "시그니처",
              "X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-494",
            "name": "그래비티 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-그래비티 그레이.webp"
          },
          {
            "id": "paint-495",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-496",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-아이보리 실버.webp"
          },
          {
            "id": "paint-497",
            "name": "아이스버그 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-아이스버그 그린.webp"
          },
          {
            "id": "paint-498",
            "name": "퓨전 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-퓨전 블랙.webp"
          },
          {
            "id": "paint-499",
            "name": "프로스트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/셀토스-프로스트 블루.webp"
          }
        ]
      },
      {
        "name": "스포티지",
        "detailModels": [
          {
            "name": "1.6 가솔린 터보",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "시그니처 X-Line"
            ]
          },
          {
            "name": "1.6 가솔린 터보 AWD",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "시그니처 X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-170",
            "name": "그래비티 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-그래비티 그레이.webp"
          },
          {
            "id": "paint-171",
            "name": "베스타 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-베스타 블루.webp"
          },
          {
            "id": "paint-172",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-173",
            "name": "울프 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-울프 그레이.webp"
          },
          {
            "id": "paint-174",
            "name": "퓨전 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-퓨전 블랙.webp"
          },
          {
            "id": "paint-175",
            "name": "헤리티지 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-헤리티지 블루.webp"
          }
        ]
      },
      {
        "name": "스포티지 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "시그니처 X-Line"
            ]
          },
          {
            "name": "1.6 HEV AWD",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "시그니처 X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-500",
            "name": "그래비티 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-그래비티 그레이.webp"
          },
          {
            "id": "paint-501",
            "name": "베스타 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-베스타 블루.webp"
          },
          {
            "id": "paint-502",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-503",
            "name": "울프 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-울프 그레이.webp"
          },
          {
            "id": "paint-504",
            "name": "퓨전 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-퓨전 블랙.webp"
          },
          {
            "id": "paint-505",
            "name": "헤리티지 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/스포티지-헤리티지 블루.webp"
          }
        ]
      },
      {
        "name": "쏘렌토",
        "detailModels": [
          {
            "name": "2.5 가솔린 터보",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "X-Line"
            ]
          },
          {
            "name": "2.5 가솔린 터보 AWD",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-176",
            "name": "볼캐닉 샌드 브라운",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-볼캐닉 샌드 브라운.webp"
          },
          {
            "id": "paint-177",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-178",
            "name": "시티스케이프 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-시티스케이프 그린.webp"
          },
          {
            "id": "paint-179",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-180",
            "name": "인터스텔라 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "쏘렌토 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "X-Line"
            ]
          },
          {
            "name": "1.6 HEV AWD",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-506",
            "name": "볼캐닉 샌드 브라운",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-볼캐닉 샌드 브라운.webp"
          },
          {
            "id": "paint-507",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-508",
            "name": "시티스케이프 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-시티스케이프 그린.webp"
          },
          {
            "id": "paint-509",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-510",
            "name": "인터스텔라 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/쏘렌토-인터스텔라 그레이.webp"
          }
        ]
      },
      {
        "name": "카니발",
        "detailModels": [
          {
            "name": "3.5 가솔린 7인승",
            "trims": [
              "노블레스",
              "아웃도어",
              "시그니처",
              "X-Line"
            ]
          },
          {
            "name": "3.5 가솔린 9인승",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-181",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-182",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-아이보리 실버.webp"
          },
          {
            "id": "paint-183",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-184",
            "name": "판테라 메탈",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-판테라 메탈.webp"
          }
        ]
      },
      {
        "name": "카니발 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV 7인승",
            "trims": [
              "노블레스",
              "아웃도어",
              "시그니처",
              "X-Line"
            ]
          },
          {
            "name": "1.6 HEV 9인승",
            "trims": [
              "프레스티지",
              "노블레스",
              "시그니처",
              "X-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-511",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-512",
            "name": "아이보리 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-아이보리 실버.webp"
          },
          {
            "id": "paint-513",
            "name": "오로라 블랙 펄",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-오로라 블랙 펄.webp"
          },
          {
            "id": "paint-514",
            "name": "판테라 메탈",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/기아/카니발-판테라 메탈.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "KGM",
    "short": "KGM",
    "market": "domestic",
    "ownBackground": false,
    "cars": [
      {
        "name": "렉스턴 뉴 아레나",
        "detailModels": [
          {
            "name": "2.2 디젤",
            "trims": [
              "프리미엄",
              "노블레스"
            ]
          },
          {
            "name": "2.2 디젤 4WD",
            "trims": [
              "프리미엄",
              "노블레스",
              "써밋"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-20",
            "name": "그랜드 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/렉스턴 뉴 아레나-그랜드 화이트.webp"
          },
          {
            "id": "paint-21",
            "name": "마블 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/렉스턴 뉴 아레나-마블 그레이.webp"
          },
          {
            "id": "paint-22",
            "name": "스페이스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/렉스턴 뉴 아레나-스페이스 블랙.webp"
          },
          {
            "id": "paint-23",
            "name": "실키 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/렉스턴 뉴 아레나-실키 화이트 펄.webp"
          }
        ]
      },
      {
        "name": "무쏘",
        "detailModels": [
          {
            "name": "2.0 가솔린 터보",
            "trims": [
              "M5",
              "M7",
              "M9"
            ]
          },
          {
            "name": "2.0 가솔린 터보 4WD",
            "trims": [
              "M5",
              "M7",
              "M9"
            ]
          },
          {
            "name": "2.0 가솔린 터보 롱 데크 4WD",
            "trims": [
              "M5",
              "M7",
              "M9"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-24",
            "name": "그랜드 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘-그랜드 화이트.webp"
          },
          {
            "id": "paint-25",
            "name": "마블 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘-마블 그레이.webp"
          },
          {
            "id": "paint-26",
            "name": "샌드스톤 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘-샌드스톤 베이지.webp"
          },
          {
            "id": "paint-27",
            "name": "스모크 토프",
            "hex": "#77695f",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘-스모크 토프.webp"
          },
          {
            "id": "paint-28",
            "name": "스페이스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘-스페이스 블랙.webp"
          },
          {
            "id": "paint-29",
            "name": "아마조니아 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘-아마조니아 그린.webp"
          },
          {
            "id": "paint-30",
            "name": "울트라 마린",
            "hex": "#284b69",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘-울트라 마린.webp"
          }
        ]
      },
      {
        "name": "무쏘 EV",
        "detailModels": [
          {
            "name": "EV 80.6kWh",
            "trims": [
              "MX",
              "블랙 엣지"
            ]
          },
          {
            "name": "EV 80.6kWh AWD",
            "trims": [
              "MX",
              "블랙 엣지"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-31",
            "name": "그랜드 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘ev-그랜드 화이트.webp"
          },
          {
            "id": "paint-32",
            "name": "마블 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘ev-마블 그레이.webp"
          },
          {
            "id": "paint-33",
            "name": "스페이스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘ev-스페이스 블랙.webp"
          },
          {
            "id": "paint-34",
            "name": "아마조니아 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘ev-아마조니아 그린.webp"
          },
          {
            "id": "paint-35",
            "name": "울트라 마린",
            "hex": "#284b69",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/무쏘ev-울트라 마린.webp"
          }
        ]
      },
      {
        "name": "액티언",
        "detailModels": [
          {
            "name": "1.5 가솔린 터보",
            "trims": [
              "S8"
            ]
          },
          {
            "name": "1.5 가솔린 터보 AWD",
            "trims": [
              "S8"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-43",
            "name": "그랜드 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언-그랜드 화이트.webp"
          },
          {
            "id": "paint-44",
            "name": "댄디 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언-댄디 블루.webp"
          },
          {
            "id": "paint-45",
            "name": "라떼 그레이지",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언-라떼 그레이지.webp"
          },
          {
            "id": "paint-46",
            "name": "스칼렛 그로브",
            "hex": "#7f3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언-스칼렛 그로브.webp"
          },
          {
            "id": "paint-47",
            "name": "스페이스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언-스페이스 블랙.webp"
          },
          {
            "id": "paint-48",
            "name": "포레스트 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언-포레스트 그린.webp"
          },
          {
            "id": "paint-49",
            "name": "플라즈마 섀도우",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언-플라즈마 섀도우.webp"
          }
        ]
      },
      {
        "name": "액티언 하이브리드",
        "detailModels": [
          {
            "name": "1.5 HEV",
            "trims": [
              "S8"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-36",
            "name": "그랜드 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언 하이브리드-그랜드 화이트.webp"
          },
          {
            "id": "paint-37",
            "name": "댄디 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언 하이브리드-댄디 블루.webp"
          },
          {
            "id": "paint-38",
            "name": "라떼 그레이지",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언 하이브리드-라떼 그레이지.webp"
          },
          {
            "id": "paint-39",
            "name": "스칼렛 그로브",
            "hex": "#7f3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언 하이브리드-스칼렛 그로브.webp"
          },
          {
            "id": "paint-40",
            "name": "스페이스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언 하이브리드-스페이스 블랙.webp"
          },
          {
            "id": "paint-41",
            "name": "포레스트 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언 하이브리드-포레스트 그린.webp"
          },
          {
            "id": "paint-42",
            "name": "플라즈마 섀도우",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/액티언 하이브리드-플라즈마 섀도우.webp"
          }
        ]
      },
      {
        "name": "토레스",
        "detailModels": [
          {
            "name": "1.5 가솔린 터보",
            "trims": [
              "T5",
              "T7"
            ]
          },
          {
            "name": "1.5 가솔린 터보 4WD",
            "trims": [
              "T5",
              "T7"
            ]
          },
          {
            "name": "1.5 가솔린 터보 밴",
            "trims": [
              "TV5",
              "TV7"
            ]
          },
          {
            "name": "1.5 가솔린 터보 밴 4WD",
            "trims": [
              "TV7"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-60",
            "name": "그랜드 화이트 원톤",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-그랜드 화이트 원톤.webp"
          },
          {
            "id": "paint-61",
            "name": "그랜드 화이트 투톤",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-그랜드 화이트 투톤.webp"
          },
          {
            "id": "paint-62",
            "name": "댄디 블루 원톤",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-댄디 블루 원톤.webp"
          },
          {
            "id": "paint-63",
            "name": "라떼 그레이지 원톤",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-라떼 그레이지 원톤.webp"
          },
          {
            "id": "paint-64",
            "name": "라떼 그레이지 투톤",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-라떼 그레이지 투톤.webp"
          },
          {
            "id": "paint-65",
            "name": "스페이스 블랙 원톤",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-스페이스 블랙 원톤.webp"
          },
          {
            "id": "paint-66",
            "name": "포레스트 그린 원톤",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-포레스트 그린 원톤.webp"
          },
          {
            "id": "paint-67",
            "name": "포레스트 그린 투톤",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-포레스트 그린 투톤.webp"
          },
          {
            "id": "paint-68",
            "name": "플라즈마 섀도우 원톤",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-플라즈마 섀도우 원톤.webp"
          },
          {
            "id": "paint-69",
            "name": "플라즈마 섀도우 투톤",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스-플라즈마 섀도우 투톤.webp"
          }
        ]
      },
      {
        "name": "토레스 하이브리드",
        "detailModels": [
          {
            "name": "1.5 HEV",
            "trims": [
              "T5",
              "T7"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-50",
            "name": "그랜드 화이트 원톤",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-그랜드 화이트 원톤.webp"
          },
          {
            "id": "paint-51",
            "name": "그랜드 화이트 투톤",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-그랜드 화이트 투톤.webp"
          },
          {
            "id": "paint-52",
            "name": "댄디 블루 원톤",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-댄디 블루 원톤.webp"
          },
          {
            "id": "paint-53",
            "name": "라떼 그레이지 원톤",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-라떼 그레이지 원톤.webp"
          },
          {
            "id": "paint-54",
            "name": "라떼 그레이지 투톤",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-라떼 그레이지 투톤.webp"
          },
          {
            "id": "paint-55",
            "name": "스페이스 블랙 원톤",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-스페이스 블랙 원톤.webp"
          },
          {
            "id": "paint-56",
            "name": "포레스트 그린 원톤",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-포레스트 그린 원톤.webp"
          },
          {
            "id": "paint-57",
            "name": "포레스트 그린 투톤",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-포레스트 그린 투톤.webp"
          },
          {
            "id": "paint-58",
            "name": "플라즈마 섀도우 원톤",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-플라즈마 섀도우 원톤.webp"
          },
          {
            "id": "paint-59",
            "name": "플라즈마 섀도우 투톤",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스 하이브리드-플라즈마 섀도우 투톤.webp"
          }
        ]
      },
      {
        "name": "토레스 EVX",
        "detailModels": [
          {
            "name": "EV 80.6kWh",
            "trims": [
              "E5",
              "E7"
            ]
          },
          {
            "name": "EV 80.6kWh 밴",
            "trims": [
              "TV5",
              "TV7"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-70",
            "name": "그랜드 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스ev-그랜드 화이트.webp"
          },
          {
            "id": "paint-71",
            "name": "댄디 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스ev-댄디 블루.webp"
          },
          {
            "id": "paint-72",
            "name": "라떼 그레이지",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스ev-라떼 그레이지.webp"
          },
          {
            "id": "paint-73",
            "name": "스페이스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스ev-스페이스 블랙.webp"
          },
          {
            "id": "paint-74",
            "name": "포레스트 그린",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스ev-포레스트 그린.webp"
          },
          {
            "id": "paint-75",
            "name": "플라즈마 섀도우",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/토레스ev-플라즈마 섀도우.webp"
          }
        ]
      },
      {
        "name": "티볼리",
        "detailModels": [
          {
            "name": "1.5 가솔린 터보",
            "trims": [
              "V5",
              "V7"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-76",
            "name": "그랜드 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/티볼리-그랜드 화이트.webp"
          },
          {
            "id": "paint-77",
            "name": "댄디 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/티볼리-댄디 블루.webp"
          },
          {
            "id": "paint-78",
            "name": "라떼 그레이지",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/티볼리-라떼 그레이지.webp"
          },
          {
            "id": "paint-79",
            "name": "스페이스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/티볼리-스페이스 블랙.webp"
          },
          {
            "id": "paint-80",
            "name": "아이언 메탈",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/KGM/티볼리-아이언 메탈.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "르노",
    "short": "RENAULT",
    "market": "domestic",
    "ownBackground": false,
    "cars": [
      {
        "name": "그랑 콜레오스",
        "detailModels": [
          {
            "name": "2.0 가솔린",
            "trims": [
              "Techno",
              "Iconic",
              "Esprit Alpine",
              "Escapade 파노라마 선루프 버전",
              "Escapade 루프박스 버전"
            ]
          },
          {
            "name": "2.0 가솔린 4WD",
            "trims": [
              "Iconic",
              "Escapade 파노라마 선루프 버전",
              "Escapade 루프박스 버전"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-185",
            "name": "메탈릭 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-메탈릭 블랙.webp"
          },
          {
            "id": "paint-186",
            "name": "미네랄 코퍼",
            "hex": "#9d6550",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-미네랄 코퍼.webp"
          },
          {
            "id": "paint-187",
            "name": "새틴 어반 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-새틴 어반 그레이.webp"
          },
          {
            "id": "paint-188",
            "name": "새틴 유니버스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-새틴 유니버스 화이트.webp"
          },
          {
            "id": "paint-189",
            "name": "어반 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-어반 그레이.webp"
          },
          {
            "id": "paint-190",
            "name": "클라우드 펄",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-클라우드 펄.webp"
          }
        ]
      },
      {
        "name": "그랑 콜레오스 하이브리드 E-Tech",
        "detailModels": [
          {
            "name": "1.5 HEV",
            "trims": [
              "Techno",
              "Iconic",
              "Esprit Alpine",
              "Escapade 파노라마 선루프 버전",
              "Escapade 루프박스 버전"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-582",
            "name": "메탈릭 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-메탈릭 블랙.webp"
          },
          {
            "id": "paint-583",
            "name": "미네랄 코퍼",
            "hex": "#9d6550",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-미네랄 코퍼.webp"
          },
          {
            "id": "paint-584",
            "name": "새틴 어반 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-새틴 어반 그레이.webp"
          },
          {
            "id": "paint-585",
            "name": "새틴 유니버스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-새틴 유니버스 화이트.webp"
          },
          {
            "id": "paint-586",
            "name": "어반 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-어반 그레이.webp"
          },
          {
            "id": "paint-587",
            "name": "클라우드 펄",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/그랑콜레오스-클라우드 펄.webp"
          }
        ]
      },
      {
        "name": "아르카나",
        "detailModels": [
          {
            "name": "1.6 가솔린",
            "trims": [
              "Iconic"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-191",
            "name": "메탈릭 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/아르카나-메탈릭 블랙.webp"
          },
          {
            "id": "paint-192",
            "name": "어반 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/아르카나-어반 그레이.webp"
          },
          {
            "id": "paint-193",
            "name": "클라우드 펄",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/아르카나-클라우드 펄.webp"
          }
        ]
      },
      {
        "name": "아르카나 하이브리드",
        "detailModels": [
          {
            "name": "1.6 HEV",
            "trims": [
              "Iconic"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-588",
            "name": "메탈릭 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/아르카나-메탈릭 블랙.webp"
          },
          {
            "id": "paint-589",
            "name": "어반 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/아르카나-어반 그레이.webp"
          },
          {
            "id": "paint-590",
            "name": "클라우드 펄",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/아르카나-클라우드 펄.webp"
          }
        ]
      },
      {
        "name": "필랑트 하이브리드 E-Tech",
        "detailModels": [
          {
            "name": "1.5 HEV",
            "trims": [
              "Techno",
              "Iconic",
              "Esprit Alpine",
              "Esprit Alpine 1955"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-194",
            "name": "메탈릭 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/필랑트-메탈릭 블랙.webp"
          },
          {
            "id": "paint-195",
            "name": "새틴 유니버스 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/필랑트-새틴 유니버스 화이트.webp"
          },
          {
            "id": "paint-196",
            "name": "새틴 포레스트 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/필랑트-새틴 포레스트 블랙.webp"
          },
          {
            "id": "paint-197",
            "name": "어반 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/필랑트-어반 그레이.webp"
          },
          {
            "id": "paint-198",
            "name": "클라우드 펄",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/르노/필랑트-클라우드 펄.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "쉐보레",
    "short": "CHEVROLET",
    "market": "domestic",
    "ownBackground": false,
    "cars": [
      {
        "name": "트랙스 크로스오버",
        "detailModels": [
          {
            "name": "1.2 가솔린",
            "trims": [
              "LS",
              "Redline",
              "ACTIV",
              "RS"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-263",
            "name": "모던 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트랙스-모던 블랙.webp"
          },
          {
            "id": "paint-264",
            "name": "모카치노 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트랙스-모카치노 베이지.webp"
          },
          {
            "id": "paint-265",
            "name": "스털링 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트랙스-스털링 그레이.webp"
          },
          {
            "id": "paint-266",
            "name": "칠리페퍼 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트랙스-칠리페퍼 레드.webp"
          },
          {
            "id": "paint-267",
            "name": "퓨어 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트랙스-퓨어 화이트.webp"
          }
        ]
      },
      {
        "name": "트레일블레이저",
        "detailModels": [
          {
            "name": "1.35 가솔린",
            "trims": [
              "Premier",
              "RS"
            ]
          },
          {
            "name": "1.35 가솔린 AWD",
            "trims": [
              "RS"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-268",
            "name": "마리나 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트레일블레이저-마리나 블루.webp"
          },
          {
            "id": "paint-269",
            "name": "모던 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트레일블레이저-모던 블랙.webp"
          },
          {
            "id": "paint-270",
            "name": "모카치노 베이지",
            "hex": "#b8a88f",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트레일블레이저-모카치노 베이지.webp"
          },
          {
            "id": "paint-271",
            "name": "스노우 화이트 펄",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트레일블레이저-스노우 화이트 펄.webp"
          },
          {
            "id": "paint-272",
            "name": "스털링 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/쉐보레/트레일블레이저-스털링 그레이.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "BMW",
    "short": "BMW",
    "market": "import",
    "ownBackground": false,
    "cars": [
      {
        "name": "3시리즈",
        "detailModels": [
          {
            "name": "320i",
            "trims": [
              "A/T",
              "M Sport",
              "M Sport Pro Special Edition",
              "M Sport M Performance Parts Edition"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-1",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/3시리즈-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-2",
            "name": "스카이스크래퍼 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/3시리즈-스카이스크래퍼 그레이 메탈릭.webp"
          },
          {
            "id": "paint-3",
            "name": "아크틱 레이스 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/3시리즈-아크틱 레이스 블루 메탈릭.webp"
          },
          {
            "id": "paint-4",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/3시리즈-알파인 화이트.webp"
          }
        ]
      },
      {
        "name": "5시리즈",
        "detailModels": [
          {
            "name": "520i",
            "trims": [
              "A/T",
              "M Sport",
            ]
          },
          {
            "name": "530i",
            "trims": [
              "A/T",
              "M Sport",
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-5",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-6",
            "name": "M 카본 블랙 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-M 카본 블랙 메탈릭.webp"
          },
          {
            "id": "paint-7",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-8",
            "name": "소피스토 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-소피스토 그레이 메탈릭.webp"
          },
          {
            "id": "paint-9",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-알파인 화이트.webp"
          },
          {
            "id": "paint-10",
            "name": "옥사이드 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-옥사이드 그레이 메탈릭.webp"
          },
          {
            "id": "paint-11",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-케이프 요크 그린 메탈릭.webp"
          }
        ]
      },
      {
        "name": "X3",
        "detailModels": [
          {
            "name": "20 xDrive",
            "trims": [
              "A/T",
              "M Sport",
              "M Sport Pro"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-12",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X3-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-13",
            "name": "스카이스크래퍼 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X3-스카이스크래퍼 그레이 메탈릭.webp"
          },
          {
            "id": "paint-14",
            "name": "아틱 레이스 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X3-아틱 레이스 블루 메탈릭.webp"
          },
          {
            "id": "paint-15",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X3-알파인 화이트.webp"
          }
        ]
      },
      {
        "name": "X5",
        "detailModels": [
          {
            "name": "xDrive30d 디젤",
            "trims": [
              "xLine (7인승)"
            ]
          },
          {
            "name": "xDrive40i 가솔린",
            "trims": [
              "xLine (7인승)"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-16",
            "name": "맨해튼 메탈릭",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X5-맨해튼 메탈릭.webp"
          },
          {
            "id": "paint-17",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X5-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-18",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X5-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-19",
            "name": "스카이스크레이퍼 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X5-스카이스크레이퍼 그레이 메탈릭.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "벤츠",
    "short": "MERCEDES-BENZ",
    "market": "import",
    "ownBackground": false,
    "cars": [
      {
        "name": "CLE AMG 카브리올레",
        "detailModels": [
          {
            "name": "CLE 200",
            "trims": [
              "AMG Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-199",
            "name": "MANUFAKTUR 그라파이트 그레이 마그노",
            "hex": "#6d7075",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 카브리올레-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-200",
            "name": "MANUFAKTUR 파타고니아 레드 브라이트",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 카브리올레-MANUFAKTUR 파타고니아 레드 브라이트.webp"
          },
          {
            "id": "paint-201",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 카브리올레-스펙트럴 블루.webp"
          },
          {
            "id": "paint-202",
            "name": "썬 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 카브리올레-썬 옐로우.webp"
          },
          {
            "id": "paint-203",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 카브리올레-옵시디안 블랙.webp"
          },
          {
            "id": "paint-204",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 카브리올레-폴라 화이트.webp"
          },
          {
            "id": "paint-205",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 카브리올레-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "CLE AMG 쿠페",
        "detailModels": [
          {
            "name": "CLE 200",
            "trims": [
              "AMG Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-206",
            "name": "MANUFAKTUR 그라파이트 그레이 마그노",
            "hex": "#6d7075",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 쿠페-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-207",
            "name": "MANUFAKTUR 파타고니아 레드 브라이트",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 쿠페-MANUFAKTUR 파타고니아 레드 브라이트.webp"
          },
          {
            "id": "paint-208",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 쿠페-스펙트럴 블루.webp"
          },
          {
            "id": "paint-209",
            "name": "썬 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 쿠페-썬 옐로우.webp"
          },
          {
            "id": "paint-210",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 쿠페-옵시디안 블랙.webp"
          },
          {
            "id": "paint-211",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 쿠페-폴라 화이트.webp"
          },
          {
            "id": "paint-212",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/cle amg 쿠페-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "C클래스 아방가르드",
        "detailModels": [
          {
            "name": "C 200",
            "trims": [
              "Avantgarde"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-213",
            "name": " 옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/c클래스 아방가르드- 옵시디안 블랙.webp"
          },
          {
            "id": "paint-214",
            "name": "MANUFAKTUR 그라파이트 그레이 마그노",
            "hex": "#6d7075",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/c클래스 아방가르드-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-215",
            "name": "블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/c클래스 아방가르드-블랙.webp"
          },
          {
            "id": "paint-216",
            "name": "소다라이트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/c클래스 아방가르드-소다라이트 블루.webp"
          },
          {
            "id": "paint-217",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/c클래스 아방가르드-스펙트럴 블루.webp"
          },
          {
            "id": "paint-218",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/c클래스 아방가르드-폴라 화이트.webp"
          },
          {
            "id": "paint-219",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/c클래스 아방가르드-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "E클래스 아방가르드",
        "detailModels": [
          {
            "name": "E 200",
            "trims": [
              "Avantgarde"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-220",
            "name": "MANUFAKTUR 파타고니아 레드 브라이트",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 아방가르드-MANUFAKTUR 파타고니아 레드 브라이트.webp"
          },
          {
            "id": "paint-221",
            "name": "그라파이트 그레이",
            "hex": "#5f656b",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 아방가르드-그라파이트 그레이.webp"
          },
          {
            "id": "paint-222",
            "name": "노틱 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 아방가르드-노틱 블루.webp"
          },
          {
            "id": "paint-223",
            "name": "베르데 실버",
            "hex": "#a8b3ad",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 아방가르드-베르데 실버.webp"
          },
          {
            "id": "paint-224",
            "name": "벨벳 브라운",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 아방가르드-벨벳 브라운.webp"
          },
          {
            "id": "paint-225",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 아방가르드-옵시디안 블랙.webp"
          },
          {
            "id": "paint-226",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 아방가르드-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "E클래스 익스클루시브",
        "detailModels": [
          {
            "name": "E 300 4MATIC",
            "trims": [
              "Exclusive"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-227",
            "name": "MANUFAKTUR 파타고니아 레드 브라이트",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 익스클루시브-MANUFAKTUR 파타고니아 레드 브라이트.webp"
          },
          {
            "id": "paint-228",
            "name": "그라파이트 그레이",
            "hex": "#5f656b",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 익스클루시브-그라파이트 그레이.webp"
          },
          {
            "id": "paint-229",
            "name": "노틱 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 익스클루시브-노틱 블루.webp"
          },
          {
            "id": "paint-230",
            "name": "베르데 실버",
            "hex": "#a8b3ad",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 익스클루시브-베르데 실버.webp"
          },
          {
            "id": "paint-231",
            "name": "벨벳 브라운",
            "hex": "#755548",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 익스클루시브-벨벳 브라운.webp"
          },
          {
            "id": "paint-232",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 익스클루시브-옵시디안 블랙.webp"
          },
          {
            "id": "paint-233",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/e클래스 익스클루시브-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "GLC 아방가르드",
        "detailModels": [
          {
            "name": "GLC 300 4MATIC",
            "trims": [
              "Avantgarde"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-234",
            "name": "MANUFAKTUR 그라파이트 그레이 마그노",
            "hex": "#6d7075",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 아방가르드-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-235",
            "name": "MANUFAKTUR 파타고니아 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 아방가르드-MANUFAKTUR 파타고니아 레드 메탈릭.webp"
          },
          {
            "id": "paint-236",
            "name": "베르데 실버",
            "hex": "#a8b3ad",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 아방가르드-베르데 실버.webp"
          },
          {
            "id": "paint-237",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 아방가르드-스펙트럴 블루.webp"
          },
          {
            "id": "paint-238",
            "name": "옵시디안 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 아방가르드-옵시디안 실버.webp"
          },
          {
            "id": "paint-239",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 아방가르드-폴라 화이트.webp"
          },
          {
            "id": "paint-240",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 아방가르드-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "GLC 쿠페 아방가르드",
        "detailModels": [
          {
            "name": "GLC 300 4MATIC",
            "trims": [
              "Avantgarde"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-241",
            "name": "MANUFAKTUR 그라파이트 그레이 마그노",
            "hex": "#6d7075",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 쿠페 아방가르드-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-242",
            "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 쿠페 아방가르드-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
          },
          {
            "id": "paint-243",
            "name": "MANUFAKTUR 파타고니아 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 쿠페 아방가르드-MANUFAKTUR 파타고니아 레드 메탈릭.webp"
          },
          {
            "id": "paint-244",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 쿠페 아방가르드-스펙트럴 블루.webp"
          },
          {
            "id": "paint-245",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 쿠페 아방가르드-옵시디안 블랙.webp"
          },
          {
            "id": "paint-246",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 쿠페 아방가르드-폴라 화이트.webp"
          },
          {
            "id": "paint-247",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/glc 쿠페 아방가르드-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "S클래스",
        "detailModels": [
          {
            "name": "S 350d 4MATIC 디잴",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "S 450 4MATIC 가솔린",
            "trims": [
              "A/T",
              "Night Edition"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-248",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/s클래스-옵시디안 블랙.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "아우디",
    "short": "AUDI",
    "market": "import",
    "ownBackground": true,
    "cars": [
      {
        "name": "A5",
        "detailModels": [
          {
            "name": "40 TFSI Quattro",
            "trims": [
              "Advanced"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-273",
            "name": "그레나딘 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-그레나딘 레드 메탈릭.webp"
          },
          {
            "id": "paint-274",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-275",
            "name": "데이토나 그레이 펄 이펙트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-데이토나 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-276",
            "name": "미토스 블랙 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-277",
            "name": "아르코나 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-아르코나 화이트.webp"
          },
          {
            "id": "paint-278",
            "name": "아스카리 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-아스카리 블루 메탈릭.webp"
          },
          {
            "id": "paint-279",
            "name": "크로노스 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-크로노스 그레이 메탈릭.webp"
          },
          {
            "id": "paint-280",
            "name": "퍼머먼트 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-퍼머먼트 블루 메탈릭.webp"
          },
          {
            "id": "paint-281",
            "name": "플로렛 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-플로렛 실버 메탈릭.webp"
          },
          {
            "id": "paint-282",
            "name": "호라이즌 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A5-호라이즌 블루 메탈릭.webp"
          }
        ]
      },
      {
        "name": "A6",
        "detailModels": [
          {
            "name": "45 TFSI Quattro",
            "trims": [
              "Advanced"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-283",
            "name": "그레나딘 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-그레나딘 레드 메탈릭.webp"
          },
          {
            "id": "paint-284",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-285",
            "name": "미드나이트 그린 메탈릭",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-미드나이트 그린 메탈릭.webp"
          },
          {
            "id": "paint-286",
            "name": "미토스 블랙 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-287",
            "name": "아르코나 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-아르코나 화이트.webp"
          },
          {
            "id": "paint-288",
            "name": "크로노스 그레이 메탈릭",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-크로노스 그레이 메탈릭.webp"
          },
          {
            "id": "paint-289",
            "name": "퍼머먼트 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-퍼머먼트 블루 메탈릭.webp"
          },
          {
            "id": "paint-290",
            "name": "플로렛 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A6-플로렛 실버 메탈릭.webp"
          }
        ]
      },
      {
        "name": "Q5",
        "detailModels": [
          {
            "name": "40 TFSI Quattro",
            "trims": [
              "Advanced"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-291",
            "name": "그레나딘 레드 메탈릭",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-그레나딘 레드 메탈릭.webp"
          },
          {
            "id": "paint-292",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-293",
            "name": "나바라 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-나바라 블루 메탈릭.webp"
          },
          {
            "id": "paint-294",
            "name": "데이토나 그레이 펄 이펙트",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-데이토나 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-295",
            "name": "디스트릭트 그린 메탈릭",
            "hex": "#476454",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-디스트릭트 그린 메탈릭.webp"
          },
          {
            "id": "paint-296",
            "name": "미토스 블랙 메탈릭",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-297",
            "name": "사키르 골드 메탈릭",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-사키르 골드 메탈릭.webp"
          },
          {
            "id": "paint-298",
            "name": "아르코나 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-아르코나 화이트.webp"
          },
          {
            "id": "paint-299",
            "name": "울트라 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-울트라 블루 메탈릭.webp"
          },
          {
            "id": "paint-300",
            "name": "플로렛 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q5-플로렛 실버 메탈릭.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "볼보",
    "short": "VOLVO",
    "market": "import",
    "ownBackground": false,
    "cars": [
      {
        "name": "XC60 플러그인 하이브리드",
        "detailModels": [
          {
            "name": "T8 AWD",
            "trims": [
              "Ultra Bright"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-249",
            "name": "데님 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-데님 블루.webp"
          },
          {
            "id": "paint-250",
            "name": "멀베리 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-멀베리 레드.webp"
          },
          {
            "id": "paint-251",
            "name": "베이퍼 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-베이퍼 그레이.webp"
          },
          {
            "id": "paint-252",
            "name": "오닉스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-오닉스 블랙.webp"
          },
          {
            "id": "paint-253",
            "name": "오로라 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-오로라 실버.webp"
          },
          {
            "id": "paint-254",
            "name": "크리스탈 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-크리스탈 화이트.webp"
          },
          {
            "id": "paint-255",
            "name": "포레스트 레이크",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-포레스트 레이크.webp"
          }
        ]
      },
      {
        "name": "XC90 플러그인 하이브리드",
        "detailModels": [
          {
            "name": "T8 AWD",
            "trims": [
              "Ultra Bright",
              "Black Edition",
              "Ultra Dark"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-256",
            "name": "데님 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC90-데님 블루.webp"
          },
          {
            "id": "paint-257",
            "name": "멀베리 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC90-멀베리 레드.webp"
          },
          {
            "id": "paint-258",
            "name": "베이퍼 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC90-베이퍼 그레이.webp"
          },
          {
            "id": "paint-259",
            "name": "브라이트 더스크",
            "hex": "#9da5ae",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC90-브라이트 더스크.webp"
          },
          {
            "id": "paint-260",
            "name": "오닉스 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC90-오닉스 블랙.webp"
          },
          {
            "id": "paint-261",
            "name": "오로라 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC90-오로라 실버.webp"
          },
          {
            "id": "paint-262",
            "name": "크리스탈 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC90-크리스탈 화이트.webp"
          }
        ]
      }
    ]
  },
  {
    "name": "테슬라",
    "short": "TESLA",
    "market": "import",
    "ownBackground": false,
    "cars": [
      {
        "name": "모델3",
        "detailModels": [
          {
            "name": "standard RWD",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "Premium Long Range RWD",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "Performance AWD",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-301",
            "name": "다이아몬드 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델3-다이아몬드 블랙.webp"
          },
          {
            "id": "paint-302",
            "name": "스텔스 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델3-스텔스 그레이.webp"
          },
          {
            "id": "paint-303",
            "name": "펄 화이트 멀티코트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델3-펄 화이트 멀티코트.webp"
          }
        ]
      },
      {
        "name": "모델Y",
        "detailModels": [
          {
            "name": "Premium RWD",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "Premium Long Range AWD",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-310",
            "name": "글레이셔 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y-글레이셔 블루.webp"
          },
          {
            "id": "paint-311",
            "name": "다이아몬드 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y-다이아몬드 블랙.webp"
          },
          {
            "id": "paint-312",
            "name": "스텔스 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y-스텔스 그레이.webp"
          },
          {
            "id": "paint-313",
            "name": "울트라 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y-울트라 레드.webp"
          },
          {
            "id": "paint-314",
            "name": "퀵실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y-퀵실버.webp"
          },
          {
            "id": "paint-315",
            "name": "펄 화이트 멀티코트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y-펄 화이트 멀티코트.webp"
          }
        ]
      },
      {
        "name": "모델Y L",
        "detailModels": [
          {
            "name": "L AWD",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-304",
            "name": "글레이셔 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y L-글레이셔 블루.webp"
          },
          {
            "id": "paint-305",
            "name": "다이아몬드 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y L-다이아몬드 블랙.webp"
          },
          {
            "id": "paint-306",
            "name": "스텔스 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y L-스텔스 그레이.webp"
          },
          {
            "id": "paint-307",
            "name": "울트라 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y L-울트라 레드.webp"
          },
          {
            "id": "paint-308",
            "name": "코스믹 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y L-코스믹 실버.webp"
          },
          {
            "id": "paint-309",
            "name": "펄 화이트 멀티코트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/테슬라/모델Y L-펄 화이트 멀티코트.webp"
          }
        ]
      }
    ]
  }
];
  const brands = vehicleCatalog.map(brand => ({
    ...brand,
    cars: brand.cars.map(car => car.name)
  }));

  const fallbackImage = "images/g_g90.png";

  /* ==============================
     최초 유입 정보 수집
  ============================== */

  function getTrafficInfo() {
    const storageKey = "autojiniTrafficInfo";
    const params = new URLSearchParams(window.location.search);

    const trackingKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign"
    ];

    const hasTrackingParameters = trackingKeys.some(key => params.has(key));

    const makeTrafficInfo = () => ({
      referrer: document.referrer || "직접 접속",
      utmSource: params.get("utm_source") || "없음",
      utmMedium: params.get("utm_medium") || "없음",
      utmCampaign: params.get("utm_campaign") || "없음"
    });

    if (hasTrackingParameters) {
      const currentTraffic = makeTrafficInfo();

      try {
        sessionStorage.setItem(storageKey, JSON.stringify(currentTraffic));
      } catch (error) {
        console.warn("유입 정보를 저장하지 못했습니다.", error);
      }

      return currentTraffic;
    }

    try {
      const savedTraffic = sessionStorage.getItem(storageKey);

      if (savedTraffic) {
        const parsed = JSON.parse(savedTraffic);

        return {
          referrer: parsed.referrer || "직접 접속",
          utmSource: parsed.utmSource || "없음",
          utmMedium: parsed.utmMedium || "없음",
          utmCampaign: parsed.utmCampaign || "없음"
        };
      }
    } catch (error) {
      console.warn("저장된 유입 정보를 읽지 못했습니다.", error);
    }

    const directTraffic = makeTrafficInfo();

    try {
      sessionStorage.setItem(storageKey, JSON.stringify(directTraffic));
    } catch (error) {
      console.warn("유입 정보를 저장하지 못했습니다.", error);
    }

    return directTraffic;
  }

  const trafficInfo = getTrafficInfo();


  /* ==============================
     방문자 보안 정보 수집
  ============================== */

  const AUTOJINI_VISITOR_ID_KEY = "autojiniVisitorId";
  const AUTOJINI_ENTRY_TIME_KEY = "autojiniEntryTime";

  function getAutojiniVisitorId() {
    let visitorId = "";

    try {
      visitorId = localStorage.getItem(AUTOJINI_VISITOR_ID_KEY) || "";
    } catch (error) {
      console.warn("방문자 ID를 읽지 못했습니다.", error);
    }

    if (!visitorId) {
      visitorId = window.crypto && typeof window.crypto.randomUUID === "function"
        ? window.crypto.randomUUID()
        : `visitor_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 12)}`;

      try {
        localStorage.setItem(AUTOJINI_VISITOR_ID_KEY, visitorId);
      } catch (error) {
        console.warn("방문자 ID를 저장하지 못했습니다.", error);
      }
    }

    return visitorId;
  }

  function initializeAutojiniEntryTime() {
    try {
      if (!sessionStorage.getItem(AUTOJINI_ENTRY_TIME_KEY)) {
        sessionStorage.setItem(AUTOJINI_ENTRY_TIME_KEY, String(Date.now()));
      }
    } catch (error) {
      console.warn("페이지 접속 시간을 저장하지 못했습니다.", error);
    }
  }

  function getAutojiniElapsedSeconds() {
    try {
      const entryTime = Number(sessionStorage.getItem(AUTOJINI_ENTRY_TIME_KEY));

      if (!entryTime || Number.isNaN(entryTime)) return 0;

      return Math.max(0, Math.floor((Date.now() - entryTime) / 1000));
    } catch (error) {
      console.warn("제출 소요시간을 계산하지 못했습니다.", error);
      return 0;
    }
  }

  function getAutojiniSecurityData() {
    const securityData = {
      visitorId: getAutojiniVisitorId(),
      elapsedSeconds: getAutojiniElapsedSeconds()
    };

    console.log("AUTOJINI 견적 보안정보", securityData);
    return securityData;
  }

  initializeAutojiniEntryTime();

  // Google Apps Script를 웹앱으로 배포한 뒤 아래 주소만 교체하세요.
  // 예: https://script.google.com/macros/s/AKfycb.../exec
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHeVUiq4WjdycA0cdfDDspGpb4JDQzCNGZu8pX5f9k9vyaJfs7R9JHqUAG_NTlKK-ifA/exec";

  const trims = ["전체 모델", "2.5 가솔린", "3.5 가솔린", "3.5 가솔린 AWD"];
  const rateOptions = ["10%", "20%", "30%", "40%", "50%"];
  const mileageOptions = ["연 1만km", "연 2만km", "연 3만km", "연 4만km", "무제한", "상담 후 결정"];

  // 사이트에는 제조사 공식 트림명을 그대로 표시하고,
  // 관리자 메일 전송 시에만 한글 보조명을 함께 붙입니다.
  const trimMailNameMap = {
    "Techno": "테크노",
    "Iconic": "아이코닉",
    "Esprit Alpine": "에스프리 알핀",
    "Esprit Alpine 1955": "에스프리 알핀 1955",
    "Escapade 파노라마 선루프 버전": "에스카파드 파노라마 선루프 버전",
    "Escapade 루프박스 버전": "에스카파드 루프박스 버전",
    "Modern": "모던",
    "Modern Plus": "모던 플러스",
    "Premium": "프리미엄",
    "Prestige": "프레스티지",
    "Inspiration": "인스퍼레이션",
    "Exclusive": "익스클루시브",
    "Black Exterior": "블랙 익스테리어",
    "N Line": "엔 라인",
    "GT-Line": "지티 라인",
    "M Sport": "엠 스포츠",
    "M Sport Pro": "엠 스포츠 프로",
    "M Sport Pro Special Edition": "엠 스포츠 프로 스페셜 에디션",
    "M Sport M Performance Parts Edition": "엠 스포츠 엠 퍼포먼스 파츠 에디션",
    "AMG Line": "에이엠지 라인",
    "Avantgarde": "아방가르드",
    "Advanced": "어드밴스드",
    "Night Edition": "나이트 에디션",
    "Ultra Bright": "울트라 브라이트",
    "Ultra Dark": "울트라 다크",
    "Black Edition": "블랙 에디션",
    "Premier": "프리미어",
    "Redline": "레드라인",
    "ACTIV": "액티브",
    "Basic": "베이직",
    "Black": "블랙",
    "FLUX": "플럭스",
    "H-Pick": "에이치 픽",
    "E-Lite": "이 라이트",
    "E-Value +": "이 밸류 플러스",
    "xLine (7인승)": "엑스라인 (7인승)",
    "X-Line": "엑스 라인"
  };

  function getTrimTextForMail(trimName) {
    const koreanName = trimMailNameMap[trimName];

    if (!koreanName || koreanName === trimName) {
      return trimName;
    }

    return `${trimName} (${koreanName})`;
  }
  const subsidyRegions = [
    "서울특별시", "부산광역시", "대구광역시", "인천광역시",
    "광주광역시", "대전광역시", "울산광역시", "세종특별자치시",
    "경기도", "강원특별자치도", "충청북도", "충청남도",
    "전북특별자치도", "전라남도", "경상북도", "경상남도", "제주특별자치도"
  ];

  const state = {
    step: 1,
    maxReachedStep: 1,
    market: "import",
    brandName: "",
    carName: "",
    paintId: "",
    trim: "",
    subTrim: "",
    usage: "",
    initialCost: "",
    rate: "",
    mileage: "",
    subsidyRegion: "",
    customerName: "",
    customerPhone: "",
    contactMethod: "",
    submitted: false
  };

  const content = document.getElementById("wizardContent");
  const indicator = document.getElementById("stepIndicator");
  const actions = document.getElementById("wizardActions");
  const spacer = document.querySelector(".wizard-spacer");
  const backButton = document.getElementById("backButton");
  const consultButton = document.getElementById("consultButton");
  const nextButton = document.getElementById("nextButton");
  const form = document.getElementById("estimateForm");


  function resetSelectionsAfterVehicleChange() {
    // 차량이 달라지면 이전 차량에 종속된 이후 단계의 선택값을 모두 비웁니다.
    state.trim = "";
    state.subTrim = "";
    state.usage = "";
    state.initialCost = "";
    state.rate = "";
    state.mileage = "";
    state.subsidyRegion = "";
    state.customerName = "";
    state.customerPhone = "";
    state.contactMethod = "";
    state.submitted = false;

    // 다시 1단계부터 완료해야 다음 단계 탭을 열 수 있도록 합니다.
    state.maxReachedStep = 1;
  }

  function currentBrands() {
    return brands.filter(brand => brand.market === "import");
  }

  function getBrandLogoPath(brandName) {
    const logoMap = {
      "현대": "./images/logo/bk_uniform/hyundai.svg",
      "제네시스": "./images/logo/bk_uniform/genesis.svg",
      "기아": "./images/logo/bk_uniform/kia.svg",
      "KGM": "./images/logo/bk_uniform/kgm.svg",
      "르노": "./images/logo/bk_uniform/renault.svg",
      "쉐보레": "./images/logo/bk_uniform/chevrolet.svg",
      "BMW": "./images/logo/bk_uniform/bmw.svg",
      "벤츠": "./images/logo/bk_uniform/benz.svg",
      "아우디": "./images/logo/bk_uniform/audi.svg",
      "볼보": "./images/logo/bk_uniform/volvo.svg",
      "테슬라": "./images/logo/bk_uniform/tesla.svg"
    };

    return logoMap[brandName] || "";
  }

  function isLightBrandLogo() {
    return false;
  }

  function currentBrand() {
    return brands.find(brand => brand.name === state.brandName) || null;
  }

  function currentVehicle() {
    const brand = vehicleCatalog.find(item => item.name === state.brandName);
    return brand?.cars.find(car => car.name === state.carName) || null;
  }

  function isElectricVehicle() {
    const carName = state.carName || "";
    const electricNames = [
      "아이오닉5", "아이오닉6", "아이오닉9", "캐스퍼 일렉트릭",
      "코나 일렉트릭", "포터2 일렉트릭", "일렉트리파이드 G80",
      "GV60", "일렉트리파이드 GV70", "EV3", "EV4", "EV5",
      "EV6", "EV9", "PV5 카고", "니로 EV", "레이 EV",
      "무쏘 EV", "토레스 EVX", "모델3", "모델Y", "모델Y L"
    ];

    return electricNames.includes(carName);
  }

  function currentPaints() {
    return currentVehicle()?.paints || [];
  }

  function currentPaint() {
    return currentPaints().find(paint => paint.id === state.paintId) || null;
  }

  function isTwoTonePaint(paint) {
    return /투톤/.test(paint?.name || "");
  }

  function paintSwatchStyle(paint) {
    const swatchBackground = isTwoTonePaint(paint)
      ? `linear-gradient(90deg, ${paint.hex} 0 50%, #17191c 50% 100%)`
      : paint.hex;

    return `background:${swatchBackground};border-color:${paint.border}`;
  }


  function currentCarImage() {
    const paints = currentPaints();
    const selectedPaint = currentPaint();
    const imagePath = selectedPaint?.image || paints[0]?.image || fallbackImage;
    return assetUrl(imagePath);
  }

  function getCarPreviewImage(brandName, carName) {
    const brand = vehicleCatalog.find(item => item.name === brandName);
    const car = brand?.cars.find(item => item.name === carName);
    const imagePath = car?.paints?.[0]?.image || fallbackImage;
    return assetUrl(imagePath);
  }

  function ensureSelection() {
    state.market = "import";

    const list = currentBrands();

    if (state.brandName && !list.some(brand => brand.name === state.brandName)) {
      state.brandName = "";
      state.carName = "";
    }

    const brand = currentBrand();

    if (brand && state.carName && !brand.cars.includes(state.carName)) {
      state.carName = "";
      state.paintId = "";
    }

    if (state.paintId && !currentPaints().some(paint => paint.id === state.paintId)) {
      state.paintId = "";
    }
  }

  function selectedVehicleHtml() {
    const brand = currentBrand();
    const paint = currentPaint();

    if (!brand || !state.carName) return "";

    return `
      <div class="selected-vehicle">
        <img src="${currentCarImage()}" alt="${brand.name} ${state.carName}">
        <div>
          <small>선택 차량</small>
          <strong>${brand.name} ${state.carName}</strong>
          <span class="selected-vehicle-paint">${paint ? paint.name : "상담 후 결정"}</span>
          ${state.trim || state.subTrim ? `<span class="selected-vehicle-trim">${state.trim}${state.subTrim ? ` · ${state.subTrim}` : ""}</span>` : ""}
        </div>
      </div>
    `;
  }

  function renderStepOne() {
    ensureSelection();
    const brand = currentBrand();
    const paint = currentPaint();
    const paints = currentPaints();
    const useOwnBackground = Boolean(brand?.ownBackground && state.carName);

    const carTitleMarkup = `<div class="wizard-car-title ${useOwnBackground ? "wizard-car-title--overlay" : ""}">
        <div>
          <small>${brand ? brand.short : "SELECT VEHICLE"}</small>
          <strong>${state.carName || "차량을 선택해 주세요"}</strong>
        </div>
      </div>`;

    const carImageMarkup = state.carName
      ? useOwnBackground
        ? `${carTitleMarkup}
          <div class="wizard-car-image wizard-car-image--full">
            <img src="${currentCarImage()}" alt="${state.brandName} ${state.carName} ${paint ? paint.name : ""}">
          </div>`
        : `${carTitleMarkup}
          <div class="wizard-car-image wizard-car-image--staged">
            <div class="wizard-car-stage-bg" aria-hidden="true"></div>
            <img src="${currentCarImage()}" alt="${state.brandName} ${state.carName} ${paint ? paint.name : ""}">
          </div>`
      : `${carTitleMarkup}
        <div class="wizard-car-image">
          <div class="vehicle-empty-visual">차량 선택 후 이미지가 표시됩니다.</div>
        </div>`;

    return `
      <div class="wizard-step step-one">
        <div class="step-heading">
          <span>STEP 01</span>
          <h2>원하는 수입차를 선택해 주세요.</h2>
          <p>브랜드와 차량, 외장 색상을 순서대로 선택할 수 있습니다.</p>
        </div>

        <fieldset class="option-block" data-option-section="brand">
          <legend><b>1</b> 브랜드</legend>
          <div class="wizard-brand-grid">
            ${currentBrands().map(item => {
              const brandLogoPath = getBrandLogoPath(item.name);

              return `
              <button class="${item.name === state.brandName ? "active" : ""}" type="button" data-brand="${item.name}">
                ${brandLogoPath ? `
                  <span class="brand-logo-box ${isLightBrandLogo(item.name) ? "is-light-logo" : ""}">
                    <img src="${brandLogoPath}" alt="${item.name} 로고">
                  </span>
                  <span class="brand-label">${item.name}</span>
                ` : `
                  <small>${item.short}</small>
                  <span class="brand-label">${item.name}</span>
                `}
              </button>
            `;
            }).join("")}
          </div>
        </fieldset>

        <fieldset class="option-block ${!state.brandName ? "is-disabled-block" : ""}" data-option-section="car">
          <legend><b>2</b> 차량</legend>
          ${brand ? `
            <div class="vehicle-card-list" id="carCardList">
              ${brand.cars.map(car => `
                <button class="vehicle-card-item ${car === state.carName ? "active" : ""}" type="button" data-car-card="${car}" data-brand="${state.brandName}" aria-pressed="${car === state.carName ? "true" : "false"}">
                  <span class="vehicle-card-item__name">${car}</span>
                  <span class="vehicle-card-item__thumb">
                    <img src="${getCarPreviewImage(state.brandName, car)}" alt="${state.brandName} ${car}">
                  </span>
                </button>
              `).join("")}
            </div>
          ` : `<p class="empty-selection-guide">브랜드를 먼저 선택해 주세요.</p>`}
        </fieldset>

        <div class="wizard-car-card car-adjust ${!state.carName ? "is-empty" : ""} ${brand?.ownBackground ? "has-own-background" : ""} ${state.brandName === "테슬라" ? "is-tesla" : ""} ${state.brandName === "제네시스" ? "is-genesis" : ""} ${state.brandName === "기아" ? "is-kia" : ""} ${state.brandName === "기아" && state.carName === "봉고3" ? "is-kia-bongo3" : ""}" data-brand="${state.brandName || ""}" data-car="${state.carName || ""}">
          ${carImageMarkup}

          <div class="paint-block ${!state.carName ? "is-disabled-block" : ""}" data-option-section="paint">
            <div class="paint-label">
              <span class="paint-label-title"><b>3</b> 외장 색상${state.carName ? `<em>${paints.length}개</em>` : ""}</span>
              ${state.carName ? `<small class="paint-swipe-guide">좌우로 넘겨보세요</small>` : ""}
            </div>
            ${state.carName ? `
              <div class="wizard-paints">
                ${paints.map(item => `
                  <button class="${item.id === state.paintId ? "active" : ""}" type="button"
                    data-paint="${item.id}" aria-label="${item.name}" aria-pressed="${item.id === state.paintId ? "true" : "false"}">
                    <i style="${paintSwatchStyle(item)}"></i>
                  </button>
                `).join("")}
              </div>
              <div class="chosen-paint">
                <strong>${paint ? paint.name : "색상을 선택해 주세요"}</strong>
              </div>
            ` : `<p class="empty-selection-guide">차량을 먼저 선택해 주세요.</p>`}
          </div>
        </div>

        <p class="validation-message" id="validationMessage"></p>
      </div>
    `;
  }

  function renderStepTwo() {
    const vehicle = currentVehicle();
    const modelGroups = Array.isArray(vehicle?.detailModels) ? vehicle.detailModels : [];

    return `
      <div class="wizard-step step-two">
        <div class="step-heading">
          <span>STEP 02</span>
          <h2>세부 모델을 선택해 주세요.</h2>
          <p>원하는 엔진과 트림을 차례대로 선택해 주세요.</p>
        </div>

        <fieldset class="option-block no-gap" data-option-section="engine-model">
          <legend><b>1</b> 세부모델</legend>

          <div class="engine-model-list">
            ${modelGroups.length ? modelGroups.map(group => {
              const isActive = group.name === state.trim;

              return `
                <section class="engine-model-card ${isActive ? "active" : ""}">
                  <button class="engine-model-main" type="button" data-engine-model="${group.name}">
                    <strong>${group.name}</strong>
                    <span class="radio-ui ${isActive ? "checked" : ""}" aria-hidden="true"></span>
                  </button>

                  ${isActive ? `
                    <div class="sub-trim-list" data-option-section="sub-trim">
                      ${group.trims.map(item => `
                        <button class="sub-trim-item ${item === state.subTrim ? "active" : ""}" type="button" data-sub-trim="${item}">
                          <span class="radio-ui ${item === state.subTrim ? "checked" : ""}" aria-hidden="true"></span>
                          <strong>${item}</strong>
                        </button>
                      `).join("")}
                    </div>
                  ` : ""}
                </section>
              `;
            }).join("") : `<p class="empty-selection-guide">이 차량의 세부모델이 아직 등록되지 않았습니다.</p>`}
          </div>
        </fieldset>

        <p class="validation-message" id="validationMessage"></p>
      </div>
    `;
  }

  function renderStepThree() {
    return `
      <div class="wizard-step">
        ${selectedVehicleHtml()}

        <div class="step-heading">
          <span>STEP 03</span>
          <h2>이용조건을 선택해 주세요.</h2>
          <p>원하는 조건이 없거나 모르겠다면 기본값으로 진행해도 됩니다.</p>
        </div>

        <fieldset class="option-block" data-option-section="usage">
          <legend><b>1</b> 이용 방식 선택</legend>
          <div class="segment-control three-column usage-row" data-group="usage">
            ${["장기렌트", "리스", "상담 후 결정"].map(value => `
              <button class="${state.usage === value ? "active" : ""}" type="button" data-value="${value}">${value}</button>
            `).join("")}
          </div>
        </fieldset>

        <fieldset class="option-block" data-option-section="initialCost">
          <legend><b>2</b> 초기비용 선택</legend>
          <div class="segment-control two-column" data-group="initialCost">
            ${["초기비용 0원", "선수금", "보증금", "상담 후 결정"].map(value => `
              <button class="${state.initialCost === value ? "active" : ""}" type="button" data-value="${value}">${value}</button>
            `).join("")}
          </div>
        </fieldset>

        ${state.initialCost && !["초기비용 0원", "상담 후 결정"].includes(state.initialCost) ? `
          <fieldset class="option-block conditional-block" data-option-section="rate">
            <legend>${state.initialCost} 비율</legend>
            <div class="rate-grid" data-group="rate">
              ${rateOptions.map(value => `
                <button class="${state.rate === value ? "active" : ""}" type="button" data-value="${value}">${value}</button>
              `).join("")}
            </div>
          </fieldset>
        ` : ""}

        <fieldset class="option-block" data-option-section="mileage">
          <legend><b>3</b> 연간 주행거리 선택</legend>
          <div class="mileage-grid" data-group="mileage">
            ${mileageOptions.map(value => `
              <button class="${state.mileage === value ? "active" : ""}" type="button" data-value="${value}">${value}</button>
            `).join("")}
          </div>
        </fieldset>

        <p class="validation-message" id="validationMessage"></p>
      </div>
    `;
  }

  function renderStepFour() {
    return `
      <div class="wizard-step">
        <div class="step-heading">
          <span>STEP 04</span>
          <h2>견적 받아볼 정보를 입력해주세요.</h2>
          <p>선택한 조건으로 견적서를 보내드립니다.</p>
        </div>

        <div class="estimate-summary">
          <h3>선택한 견적 조건</h3>
          <dl>
            <div><dt>차량</dt><dd>${state.brandName && state.carName ? `${state.brandName} ${state.carName}` : "상담 후 결정"} · ${currentPaint()?.name || "상담 후 결정"}</dd></div>
            <div><dt>세부모델</dt><dd>${state.trim || "상담 후 결정"}${state.subTrim ? ` · ${state.subTrim}` : ""}</dd></div>
            <div><dt>이용조건</dt><dd>${state.usage || "상담 후 결정"} · ${state.initialCost || "상담 후 결정"}${!["초기비용 0원", "상담 후 결정"].includes(state.initialCost) && state.rate ? ` ${state.rate}` : ""}</dd></div>
            <div><dt>주행거리</dt><dd>${state.mileage || "상담 후 결정"}</dd></div>
            <div><dt>할인율</dt><dd>최대 10%</dd></div>
            ${isElectricVehicle() ? `<div><dt>보조금 지역</dt><dd data-summary-subsidy-region>${state.subsidyRegion || "선택 전"}</dd></div>` : ""}
          </dl>
        </div>

        ${isElectricVehicle() ? `
          <fieldset class="option-block subsidy-region-block" data-option-section="subsidy-region">
            <legend>지역별 보조금</legend>
            <p class="option-helper">전기차 보조금 확인을 위해 차량 등록 예정 지역을 선택해 주세요.</p>
            <small class="subsidy-notice">*실제 보조금은 차종·세부모델·지자체 예산에 따라 달라질 수 있습니다.</small>
            <div class="wizard-select">
              <select id="subsidyRegionSelect" aria-label="전기차 보조금 지역 선택">
                <option value="" selected disabled hidden>등록 지역을 선택해 주세요</option>
                ${subsidyRegions.map(region => `
                  <option value="${region}" ${state.subsidyRegion === region ? "selected" : ""}>${region}</option>
                `).join("")}
              </select>
            </div>
          </fieldset>
        ` : ""}

        <div class="customer-fields">
          <label>
            성함
            <input id="customerName" name="name" placeholder="성함을 입력해 주세요" autocomplete="name"
              minlength="2" maxlength="30" aria-describedby="customerNameError" required>
            <span class="field-error" id="customerNameError" aria-live="polite"></span>
          </label>
          <label>
            연락처
            <input id="customerPhone" name="phone" inputmode="numeric" placeholder="연락처를 입력해 주세요"
              autocomplete="tel" maxlength="13" aria-describedby="customerPhoneError" required>
            <span class="field-error" id="customerPhoneError" aria-live="polite"></span>
          </label>

          <fieldset class="contact-method-field">
            <legend>견적 받아볼 방법</legend>
            <div class="contact-method-options" role="radiogroup" aria-describedby="contactMethodError">
              ${["전화", "문자", "카톡"].map(method => `
                <label class="contact-method-option">
                  <input type="radio" name="contactMethod" value="${method}" ${state.contactMethod === method ? "checked" : ""}>
                  <span>${method}</span>
                </label>
              `).join("")}
            </div>
            <span class="field-error" id="contactMethodError" aria-live="polite"></span>
          </fieldset>
        </div>

        <div class="wizard-privacy-row">
          <label class="wizard-privacy">
            <input id="privacyAgree" type="checkbox" required checked>
            <span>개인정보 수집 및 이용에 동의합니다.</span>
          </label>
          <button type="button" class="privacy-open-button" id="privacyOpenButton" aria-haspopup="dialog" aria-controls="privacyModal">내용보기</button>
        </div>
        <p class="validation-message" id="validationMessage"></p>
      </div>
    `;
  }

  function renderComplete() {
    const paint = currentPaint();
    const pendingText = "상담 후 결정";
    const brandText = state.brandName || pendingText;
    const carText = state.carName || pendingText;
    const colorText = paint?.name || pendingText;
    const modelText = state.trim
      ? `${state.trim}${state.subTrim ? ` · ${state.subTrim}` : ""}`
      : pendingText;
    const usageText = state.usage || pendingText;
    const initialCostText = !state.initialCost
      ? pendingText
      : ["초기비용 0원", pendingText].includes(state.initialCost)
        ? state.initialCost
        : `${state.initialCost}${state.rate ? ` ${state.rate}` : ""}`;
    const mileageText = state.mileage || pendingText;
    const subsidyRegionText = isElectricVehicle()
      ? (state.subsidyRegion || pendingText)
      : "해당 없음";
    const vehicleTitle = state.brandName && state.carName
      ? `${state.brandName} ${state.carName}`
      : pendingText;

    return `
      <div class="wizard-complete">
        <span>✓</span>
        <h2>견적 신청이 완료되었습니다.</h2>
        <p>아래 신청 내용을 확인해 주세요.<br>전담 매니저가 확인 후 연락드릴 예정입니다.</p>

        <section class="completion-summary" aria-label="견적 신청 내역">
          <div class="completion-vehicle">
            <img src="${currentCarImage()}" alt="${vehicleTitle}">
            <div>
              <small>선택 차량</small>
              <strong>${vehicleTitle}</strong>
              <span>${colorText}</span>
            </div>
          </div>

          <div class="completion-section">
            <h3>차량 및 이용조건</h3>
            <dl class="completion-details">
              <div><dt>브랜드</dt><dd>${brandText}</dd></div>
              <div><dt>차량</dt><dd>${carText}</dd></div>
              <div><dt>외장 색상</dt><dd>${colorText}</dd></div>
              <div><dt>세부 모델</dt><dd>${modelText}</dd></div>
              <div><dt>이용 방식</dt><dd>${usageText}</dd></div>
              <div><dt>초기비용</dt><dd>${initialCostText}</dd></div>
              <div><dt>주행거리</dt><dd>${mileageText}</dd></div>
              <div><dt>할인율</dt><dd>최대 10%</dd></div>
              <div><dt>보조금 지역</dt><dd>${subsidyRegionText}</dd></div>
            </dl>
          </div>

          <div class="completion-section">
            <h3>신청자 정보</h3>
            <dl class="completion-details">
              <div><dt>성함</dt><dd>${state.customerName}</dd></div>
              <div><dt>연락처</dt><dd>${state.customerPhone}</dd></div>
              <div><dt>상담 방법</dt><dd>${state.contactMethod}</dd></div>
            </dl>
          </div>
        </section>

        <div class="wizard-spacer wizard-spacer--complete" aria-hidden="true"></div>
        <button type="button" id="restartButton">확인</button>
      </div>
    `;
  }

  function arrowIcon() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"></path></svg>`;
  }

  function checkIcon() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg>`;
  }

  function render(options = {}) {
    const preserveScroll = options.preserveScroll === true;
    const preservedScrollY = preserveScroll ? window.scrollY : 0;
    const preservedContentHeight = preserveScroll ? content.offsetHeight : 0;

    if (preserveScroll) {
      // content.innerHTML 교체 순간 문서 높이가 잠시 줄면서
      // 브라우저가 스크롤을 맨 위로 보정하는 현상을 막습니다.
      content.style.minHeight = `${preservedContentHeight}px`;
    }

    ensureSelection();

    if (state.submitted) {
      indicator.hidden = true;
      actions.hidden = true;
      spacer.hidden = true;
      content.innerHTML = renderComplete();
      bindCompleteEvents();
      return;
    }

    indicator.hidden = false;
    actions.hidden = false;
    spacer.hidden = false;

    const renderers = [renderStepOne, renderStepTwo, renderStepThree, renderStepFour];
    content.innerHTML = renderers[state.step - 1]();

    [...indicator.children].forEach((item, index) => {
      const tabStep = index + 1;
      const button = item.querySelector("[data-step-tab]");

      item.classList.toggle("active", tabStep === state.step);
      item.classList.toggle("done", tabStep < state.step);

      if (button) {
        const canNavigate = tabStep <= state.maxReachedStep;
        button.disabled = !canNavigate;
        button.setAttribute("aria-current", tabStep === state.step ? "step" : "false");
      }
    });
    indicator.className = `step-indicator progress-${state.step}`;

    const shouldShowConsultButton = state.step === 1 || state.step === 2;

    backButton.hidden = state.step === 1;
    consultButton.hidden = !shouldShowConsultButton;
    consultButton.textContent = "바로 견적신청";
    actions.classList.toggle("has-consult-button", shouldShowConsultButton);
    nextButton.innerHTML = state.step === 4
      ? `견적신청 ${arrowIcon()}`
      : `다음 단계 ${arrowIcon()}`;

    bindStepEvents();

    if (preserveScroll) {
      // 새 DOM이 반영된 직후 기존 위치를 즉시 유지합니다.
      // 이후 scrollToNextSelection()이 목표 영역까지 부드럽게 이동합니다.
      window.scrollTo({
        top: preservedScrollY,
        left: 0,
        behavior: "auto"
      });

      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: preservedScrollY,
          left: 0,
          behavior: "auto"
        });
      });
    }
  }

  function scrollToNextSelection(selector, block = "start", viewportTop = null) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 렌더 직후에는 레이아웃 높이가 한두 프레임 동안 변할 수 있으므로
    // 목표 요소를 매번 다시 찾고 실제 좌표로 이동합니다.
    const moveToTarget = () => {
      const target = content.querySelector(selector) || document.querySelector(selector);
      if (!target) return;

      content.style.minHeight = "";

      const header = document.querySelector(".wizard-header") || document.querySelector(".site-header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const rect = target.getBoundingClientRect();
      const targetTop = window.scrollY + rect.top;

      const destination = viewportTop !== null
        ? targetTop - Number(viewportTop)
        : targetTop - headerHeight - 8;

      window.scrollTo({
        top: Math.max(0, destination),
        left: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    };

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(moveToTarget);
    });

    // 모바일 브라우저의 늦은 레이아웃 보정까지 반영합니다.
    window.setTimeout(moveToTarget, 120);
  }

  function enablePaintDragScroll(scroller) {
    if (!scroller || scroller.dataset.dragReady === "true") return;

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    const getPageX = event => {
      if (typeof event.pageX === "number") return event.pageX;
      if (event.touches && event.touches[0]) return event.touches[0].pageX;
      if (event.changedTouches && event.changedTouches[0]) return event.changedTouches[0].pageX;
      return 0;
    };

    const startDrag = event => {
      isDragging = true;
      moved = false;
      startX = getPageX(event);
      startScrollLeft = scroller.scrollLeft;
      scroller.classList.add("is-dragging");
      scroller.dataset.dragMoved = "false";
    };

    const moveDrag = event => {
      if (!isDragging) return;
      const currentX = getPageX(event);
      const diff = currentX - startX;
      if (Math.abs(diff) > 5) {
        moved = true;
        scroller.dataset.dragMoved = "true";
      }
      scroller.scrollLeft = startScrollLeft - diff;
      if (event.cancelable) event.preventDefault();
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      scroller.classList.remove("is-dragging");
      window.setTimeout(() => {
        scroller.dataset.dragMoved = "false";
      }, 40);
    };

    scroller.addEventListener("mousedown", startDrag);
    scroller.addEventListener("mousemove", moveDrag);
    window.addEventListener("mouseup", endDrag);
    scroller.addEventListener("mouseleave", endDrag);

    // 터치 기기에서는 브라우저의 기본 가로 스와이프를 사용합니다.
    // touchmove에서 preventDefault를 호출하면 일부 모바일 브라우저에서
    // overflow-x 스크롤이 막힐 수 있으므로 별도 터치 드래그를 등록하지 않습니다.

    scroller.addEventListener("click", event => {
      if (scroller.dataset.dragMoved === "true") {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);

    scroller.dataset.dragReady = "true";
  }

  function updatePaintOverflow(scroller) {
    if (!scroller) return;

    // 실제 기기에서 색상 버튼이 완전히 다 보이는지 확인합니다.
    // 마지막 색상이 아주 조금이라도 잘리거나 경계에 애매하게 걸리면
    // overflow로 판단해서 안내 문구와 스와이프를 활성화합니다.
    scroller.classList.remove("has-paint-overflow");

    window.requestAnimationFrame(() => {
      const buttons = scroller.querySelectorAll("button");
      const lastButton = buttons[buttons.length - 1];

      const hasScrollOverflow = scroller.scrollWidth > scroller.clientWidth + 1;

      let hasPartialClip = false;

      if (lastButton) {
        const scrollerRect = scroller.getBoundingClientRect();
        const lastButtonRect = lastButton.getBoundingClientRect();

        // 우측 여유 8px까지 확보되지 않으면 "애매하게 걸린 상태"로 판단합니다.
        const safeRightEdge = scrollerRect.right - 8;

        hasPartialClip = lastButtonRect.right > safeRightEdge;
      }

      const isOverflowing = hasScrollOverflow || hasPartialClip;

      scroller.classList.toggle("has-paint-overflow", isOverflowing);

      if (isOverflowing) {
        enablePaintDragScroll(scroller);
      }
    });
  }

  function initScrollablePaints() {
    content.querySelectorAll(".wizard-paints").forEach(updatePaintOverflow);
  }

  let paintResizeTimer = 0;

  window.addEventListener("resize", () => {
    window.clearTimeout(paintResizeTimer);
    paintResizeTimer = window.setTimeout(() => {
      initScrollablePaints();
    }, 100);
  });

  function bindStepEvents() {
    initScrollablePaints();

    content.querySelectorAll("[data-group]").forEach(group => {
      group.addEventListener("click", event => {
        const button = event.target.closest("button[data-value]");
        if (!button) return;

        const key = group.dataset.group;
        const value = button.dataset.value;

        // 재렌더링으로 선택 버튼이 사라지기 전에 포커스를 해제해
        // 브라우저가 이전 버튼 위치로 스크롤을 되돌리지 않게 합니다.
        button.blur();

        if (key === "market") {
          const marketChanged = state.market !== value;
          state.market = value;

          if (marketChanged) {
            state.brandName = "";
            state.carName = "";
            state.paintId = "";
            resetSelectionsAfterVehicleChange();
          }
        } else {
          state[key] = value;
          if (key === "initialCost" && ["초기비용 0원", "상담 후 결정"].includes(value)) {
            state.rate = "없음";
          }
          if (key === "initialCost" && !["초기비용 0원", "상담 후 결정"].includes(value) && state.rate === "없음") {
            state.rate = "10%";
          }
        }
        render({ preserveScroll: key === "market" });

        if (key === "market") {
          scrollToNextSelection('[data-option-section="brand"]', "start");
        } else if (key === "usage") {
          scrollToNextSelection('[data-option-section="initialCost"]');
        } else if (key === "initialCost") {
          scrollToNextSelection(
            ["초기비용 0원", "상담 후 결정"].includes(value)
              ? '[data-option-section="mileage"]'
              : '[data-option-section="rate"]'
          );
        } else if (key === "rate") {
          scrollToNextSelection('[data-option-section="mileage"]');
        }
      });
    });

    content.querySelectorAll(".wizard-brand-grid button[data-brand]").forEach(button => {
      button.addEventListener("click", () => {
        button.blur();
        const nextBrandName = button.dataset.brand;
        const brandChanged = state.brandName !== nextBrandName;
        state.brandName = nextBrandName;

        if (brandChanged) {
          state.carName = "";
          state.paintId = "";
          resetSelectionsAfterVehicleChange();
        }

        render();
        scrollToNextSelection('[data-option-section="car"]', "start");
      });
    });

    content.querySelectorAll("[data-paint]").forEach(button => {
      button.addEventListener("click", () => {
        const nextPaintId = button.dataset.paint;
        const nextPaint = currentPaints().find(item => item.id === nextPaintId);
        if (!nextPaint || state.paintId === nextPaintId) return;

        state.paintId = nextPaintId;

        const paintButtons = content.querySelectorAll("[data-paint]");
        paintButtons.forEach(item => {
          const isActive = item.dataset.paint === nextPaintId;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });

        const chosenPaintName = content.querySelector(".chosen-paint strong");
        if (chosenPaintName) chosenPaintName.textContent = nextPaint.name;

        const vehicleImage = content.querySelector(".wizard-car-image img");
        if (!vehicleImage) return;

        const nextImage = new Image();
        nextImage.decoding = "async";
        nextImage.onload = () => {
          vehicleImage.src = assetUrl(nextPaint.image);
          vehicleImage.alt = `${state.brandName} ${state.carName} ${nextPaint.name}`;
        };
        nextImage.src = assetUrl(nextPaint.image);
      });
    });

    content.querySelectorAll("[data-car-card]").forEach(button => {
      button.addEventListener("click", () => {
        const nextCarName = button.dataset.carCard;
        const carChanged = state.carName !== nextCarName;
        state.carName = nextCarName;

        if (carChanged) {
          state.paintId = "";
          resetSelectionsAfterVehicleChange();
        }

        render();

        if (state.carName) {
          scrollToNextSelection('.wizard-car-card', "start", 76);
        }
      });
    });


    content.querySelectorAll("[data-engine-model]").forEach(button => {
      button.addEventListener("click", () => {
        state.trim = button.dataset.engineModel;
        state.subTrim = "";
        render();
        scrollToNextSelection('[data-option-section="sub-trim"]');
      });
    });

    content.querySelectorAll("[data-sub-trim]").forEach(button => {
      button.addEventListener("click", () => {
        state.subTrim = button.dataset.subTrim;
        render();
        scrollToNextSelection("#wizardActions");
      });
    });

    const subsidyRegionSelect = document.getElementById("subsidyRegionSelect");
    subsidyRegionSelect?.addEventListener("change", () => {
      state.subsidyRegion = subsidyRegionSelect.value;
      const summaryValue = document.querySelector('[data-summary-subsidy-region]');
      if (summaryValue) summaryValue.textContent = state.subsidyRegion;
      showValidation("");
    });

    const nameInput = document.getElementById("customerName");
    const phoneInput = document.getElementById("customerPhone");

    if (nameInput) {
      let isNameComposing = false;

      const clearNameError = () => {
        setFieldError(nameInput, document.getElementById("customerNameError"), "");
        showValidation("");
      };

      const sanitizeCompletedName = input => {
        input.value = input.value
          .replace(/[^가-힣A-Za-z\s]/g, "")
          .replace(/\s{2,}/g, " ")
          .trim();
      };

      // 모바일 한글 키보드는 조합 도중 input/compositionend가 여러 번 발생할 수 있습니다.
      // 입력 중에는 value를 절대 다시 쓰지 않고 오류 표시만 지웁니다.
      nameInput.addEventListener("compositionstart", () => {
        isNameComposing = true;
      });

      nameInput.addEventListener("compositionend", () => {
        isNameComposing = false;
        clearNameError();
      });

      nameInput.addEventListener("input", () => {
        clearNameError();
      });

      // 글자 조합이 모두 끝나고 입력란을 벗어날 때만 값을 정리합니다.
      nameInput.addEventListener("blur", event => {
        if (isNameComposing) return;
        sanitizeCompletedName(event.target);
      });
    }

    if (phoneInput) {
      phoneInput.addEventListener("input", event => {
        formatPhone(event);
        setFieldError(phoneInput, document.getElementById("customerPhoneError"), "");
        showValidation("");
      });
    }

    content.querySelectorAll('input[name="contactMethod"]').forEach(input => {
      input.addEventListener("change", event => {
        state.contactMethod = event.target.value;
        setFieldError(event.target, document.getElementById("contactMethodError"), "");
        showValidation("");
      });
    });

  
  const vehicleSearchModal = document.getElementById("vehicleSearchModal");
  const openVehicleSearchButton = document.getElementById("openVehicleSearch");
  const closeVehicleSearchButton = document.getElementById("closeVehicleSearch");
  const globalVehicleSearch = document.getElementById("globalVehicleSearch");
  const globalVehicleSearchClear = document.getElementById("globalVehicleSearchClear");
  const globalVehicleSearchResult = document.getElementById("globalVehicleSearchResult");
  const globalVehicleSearchList = document.getElementById("globalVehicleSearchList");

  const allVehicleSearchItems = vehicleCatalog
    .filter(brandItem => brandItem.market === "import")
    .flatMap(brandItem =>
      brandItem.cars.map(carItem => ({
        market: "import",
        brandName: brandItem.name,
        brandShort: brandItem.short,
        carName: carItem.name
      }))
    );

  function resetGlobalVehicleSearch() {
    if (!globalVehicleSearch || !globalVehicleSearchClear || !globalVehicleSearchResult || !globalVehicleSearchList) return;
    globalVehicleSearch.value = "";
    globalVehicleSearchClear.hidden = true;
    globalVehicleSearchResult.textContent = "차량명을 입력해 주세요.";
    globalVehicleSearchList.innerHTML = "";
    globalVehicleSearchList.hidden = true;
  }

  function updateGlobalVehicleSearch() {
    if (!globalVehicleSearch || !globalVehicleSearchClear || !globalVehicleSearchResult || !globalVehicleSearchList) return;
    const keyword = globalVehicleSearch.value.trim().toLocaleLowerCase("ko-KR");
    globalVehicleSearchClear.hidden = !globalVehicleSearch.value;

    if (!keyword) {
      globalVehicleSearchResult.textContent = "차량명을 입력해 주세요.";
      globalVehicleSearchList.innerHTML = "";
      globalVehicleSearchList.hidden = true;
      return;
    }

    const results = allVehicleSearchItems.filter(item =>
      `${item.brandName} ${item.brandShort} ${item.carName}`
        .toLocaleLowerCase("ko-KR")
        .includes(keyword)
    );

    globalVehicleSearchResult.textContent = results.length
      ? `${results.length}대의 차량을 찾았습니다.`
      : "일치하는 차량이 없습니다.";

    globalVehicleSearchList.innerHTML = results.map(item => `
      <button type="button" class="vehicle-search-item integrated-vehicle-search__item"
        data-global-market="${item.market}"
        data-global-brand="${item.brandName}"
        data-global-car="${item.carName}">
        <strong>${item.carName}</strong>
        <span>${item.brandName}</span>
      </button>
    `).join("");
    globalVehicleSearchList.hidden = results.length === 0;
  }

  openVehicleSearchButton?.addEventListener("click", () => {
    resetGlobalVehicleSearch();
    vehicleSearchModal?.showModal();
    window.setTimeout(() => globalVehicleSearch?.focus(), 30);
  });

  closeVehicleSearchButton?.addEventListener("click", () => vehicleSearchModal?.close());
  globalVehicleSearch?.addEventListener("input", updateGlobalVehicleSearch);
  globalVehicleSearch?.addEventListener("search", updateGlobalVehicleSearch);
  globalVehicleSearchClear?.addEventListener("click", () => {
    resetGlobalVehicleSearch();
    globalVehicleSearch?.focus();
  });

  globalVehicleSearchList?.addEventListener("click", event => {
    const button = event.target.closest("[data-global-car]");
    if (!button) return;

    const nextMarket = "import";
    const nextBrandName = button.dataset.globalBrand;
    const nextCarName = button.dataset.globalCar;
    const vehicleChanged =
      state.market !== nextMarket ||
      state.brandName !== nextBrandName ||
      state.carName !== nextCarName;

    state.market = nextMarket;
    state.brandName = nextBrandName;
    state.carName = nextCarName;
    state.paintId = "";
    state.step = 1;

    if (vehicleChanged) resetSelectionsAfterVehicleChange();

    vehicleSearchModal?.close();
    render();
    window.requestAnimationFrame(() => {
      scrollToNextSelection('.wizard-car-card', "start", 76);
    });
  });

  vehicleSearchModal?.addEventListener("click", event => {
    if (event.target === vehicleSearchModal) vehicleSearchModal.close();
  });

  const privacyModal = document.getElementById("privacyModal");
    const privacyOpenButton = document.getElementById("privacyOpenButton");

    privacyOpenButton?.addEventListener("click", () => {
      if (privacyModal?.showModal) privacyModal.showModal();
    });
  }

  function resetWizardToStart() {
    // 이전 견적 전송 과정에서 잠긴 버튼 상태까지 완전히 초기화합니다.
    nextButton.disabled = false;
    nextButton.classList.remove("is-submitting");
    nextButton.innerHTML = `다음 단계 ${arrowIcon()}`;
    actions.hidden = false;
    indicator.hidden = false;

    state.step = 1;
    state.maxReachedStep = 1;
    state.market = "import";
    state.brandName = "";
    state.carName = "";
    state.paintId = "";
    state.trim = "";
    state.subTrim = "";
    state.usage = "";
    state.initialCost = "";
    state.rate = "";
    state.mileage = "";
    state.subsidyRegion = "";
    state.customerName = "";
    state.customerPhone = "";
    state.contactMethod = "";
    state.submitted = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindCompleteEvents() {
    const restart = document.getElementById("restartButton");
    restart?.addEventListener("click", resetWizardToStart);
  }

  function formatPhone(event) {
    const digits = event.target.value.replace(/\D/g, "").slice(0, 11);

    // 서울 지역번호(02)는 앞자리가 2자리이고, 그 외 번호는 앞자리가 3자리입니다.
    if (digits.startsWith("02")) {
      if (digits.length <= 2) {
        event.target.value = digits;
      } else if (digits.length <= 5) {
        event.target.value = `${digits.slice(0, 2)}-${digits.slice(2)}`;
      } else if (digits.length <= 9) {
        event.target.value = `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
      } else {
        event.target.value = `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
      }
      return;
    }

    if (digits.length <= 3) {
      event.target.value = digits;
    } else if (digits.length <= 6) {
      event.target.value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else if (digits.length <= 10) {
      event.target.value = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else {
      event.target.value = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
    }
  }

  function showValidation(message) {
    const validation = document.getElementById("validationMessage");
    if (validation) validation.textContent = message;
  }

  function setFieldError(input, errorElement, message) {
    if (!input || !errorElement) return;
    input.classList.toggle("is-invalid", Boolean(message));
    input.setAttribute("aria-invalid", message ? "true" : "false");
    errorElement.textContent = message;
  }

  function clearCustomerErrors() {
    const name = document.getElementById("customerName");
    const phone = document.getElementById("customerPhone");
    setFieldError(name, document.getElementById("customerNameError"), "");
    setFieldError(phone, document.getElementById("customerPhoneError"), "");
    showValidation("");
  }

  function isValidCustomerName(value) {
    const name = value.trim().replace(/\s+/g, " ");
    const normalizedName = name.toLowerCase().replace(/\s/g, "");
    const koreanName = /^[가-힣]{2,10}$/;
    const englishName = /^[A-Za-z]{2,20}(?: [A-Za-z]{2,20}){0,3}$/;

    // 대표적인 테스트·장난 입력과 동일 문자 반복을 차단합니다.
    const blockedNames = [
      "테스트", "홍길동", "아무개", "관리자", "운영자", "담당자",
      "test", "tester", "admin", "administrator", "asdf", "qwer", "abc"
    ];
    const isRepeatedCharacter = /^(.)\1+$/.test(normalizedName);
    const isBlockedName = blockedNames.includes(normalizedName);

    return (koreanName.test(name) || englishName.test(name))
      && !isRepeatedCharacter
      && !isBlockedName;
  }

  function isValidContactPhone(value) {
    const digits = value.replace(/\D/g, "");

    // 휴대전화 010, 인터넷전화 070, 서울 02, 기타 국내 지역번호를 허용합니다.
    const isMobile = /^010\d{8}$/.test(digits);
    const isInternetPhone = /^070\d{8}$/.test(digits);
    const isSeoulLandline = /^02\d{7,8}$/.test(digits);
    const isRegionalLandline = /^0(?:3[1-3]|4[1-4]|5[1-5]|6[1-4])\d{7,8}$/.test(digits);

    if (!(isMobile || isInternetPhone || isSeoulLandline || isRegionalLandline)) {
      return false;
    }

    const prefixLength = digits.startsWith("02") ? 2 : 3;
    const subscriberNumber = digits.slice(prefixLength);
    const lastNumber = subscriberNumber.slice(-4);
    const middleNumber = subscriberNumber.slice(0, -4);

    // 010-1111-3846 또는 010-3846-1111처럼 한쪽 번호만 반복되는 경우는 허용합니다.
    // 010-1111-2222처럼 가운데와 끝 번호가 모두 단일 숫자 반복인 경우만 차단합니다.
    const isRepeatedGroup = number => number.length >= 3 && /^(\d)\1+$/.test(number);
    const hasRepeatedBothGroups = isRepeatedGroup(middleNumber) && isRepeatedGroup(lastNumber);

    // 대표적인 순차형 테스트 번호는 차단합니다.
    const blockedNumbers = [
      "1234567", "7654321", "12341234", "12345678", "87654321"
    ];

    return !hasRepeatedBothGroups && !blockedNumbers.includes(subscriberNumber);
  }

  function moveToConsultStep() {
    // 1·2단계에서 바로 견적 신청을 선택하면 정보입력 단계로 이동합니다.
    // 선택하지 않은 항목은 STEP 04 요약에서 "상담 후 결정"으로 표시합니다.
    state.step = 4;
    state.maxReachedStep = Math.max(state.maxReachedStep, 4);
    render();
    scrollToEstimate();
  }

  function validateCurrentStep() {
    if (state.step === 1) {
      if (!state.brandName) {
        showValidation("브랜드를 선택해 주세요.");
        return false;
      }
      if (!state.carName) {
        showValidation("차량을 선택해 주세요.");
        return false;
      }
      if (!state.paintId) {
        showValidation("외장 색상을 선택해 주세요.");
        return false;
      }
      return true;
    }

    if (state.step === 2) {
      if (!state.trim) {
        showValidation("세부 모델을 선택해 주세요.");
        return false;
      }
      if (!state.subTrim) {
        showValidation("트림을 선택해 주세요.");
        return false;
      }
      return true;
    }

    if (state.step === 3) {
      if (!state.usage) {
        showValidation("이용 방식을 선택해 주세요.");
        return false;
      }
      if (!state.initialCost) {
        showValidation("초기비용 조건을 선택해 주세요.");
        return false;
      }
      if (!["초기비용 0원", "상담 후 결정"].includes(state.initialCost) && !state.rate) {
        showValidation(`${state.initialCost} 비율을 선택해 주세요.`);
        return false;
      }
      if (!state.mileage) {
        showValidation("연간 주행거리를 선택해 주세요.");
        return false;
      }
      return true;
    }

    if (state.step === 4) {
      const name = document.getElementById("customerName");
      const phone = document.getElementById("customerPhone");
      const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
      const privacy = document.getElementById("privacyAgree");
      const nameError = document.getElementById("customerNameError");
      const phoneError = document.getElementById("customerPhoneError");
      const contactMethodError = document.getElementById("contactMethodError");

      clearCustomerErrors();

      if (isElectricVehicle() && !state.subsidyRegion) {
        showValidation("전기차 보조금 확인 지역을 선택해 주세요.");
        document.getElementById("subsidyRegionSelect")?.focus();
        return false;
      }

      if (!isValidCustomerName(name.value)) {
        const message = "올바른 성함을 입력해 주세요.";
        setFieldError(name, nameError, message);
        name.focus();
        return false;
      }

      if (!isValidContactPhone(phone.value)) {
        const message = "올바른 연락처를 입력해 주세요.";
        setFieldError(phone, phoneError, message);
        phone.focus();
        return false;
      }

      if (!contactMethod) {
        const message = "상담 방법을 선택해 주세요.";
        setFieldError(document.querySelector('input[name="contactMethod"]'), contactMethodError, message);
        document.querySelector('input[name="contactMethod"]')?.focus();
        return false;
      }

      if (!privacy.checked) {
        showValidation("개인정보 수집 및 이용 동의가 필요합니다.");
        privacy.focus();
        return false;
      }

      state.customerName = name.value.trim().replace(/\s+/g, " ");
      state.customerPhone = phone.value;
      state.contactMethod = contactMethod.value;
    }

    return true;
  }

  function scrollToEstimate() {
    document.getElementById("estimate").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function buildEstimatePayload() {
    const paint = currentPaint();
    const pendingText = "상담 후 결정";

    // 제출 직전에 화면의 지역 선택값을 한 번 더 읽어
    // state와 실제 select 값이 어긋나는 상황을 방지합니다.
    const subsidyRegionSelect = document.getElementById("subsidyRegionSelect");
    if (subsidyRegionSelect && subsidyRegionSelect.value) {
      state.subsidyRegion = subsidyRegionSelect.value;
    }

    return {
      submittedAt: new Date().toLocaleString("ko-KR"),
      vehicleType: "수입차",
      brand: state.brandName || pendingText,
      vehicle: state.carName || pendingText,
      exteriorColor: paint?.name || pendingText,
      model: state.trim || pendingText,
      trim: getTrimTextForMail(state.subTrim || pendingText),
      usageType: state.usage || pendingText,
      initialCostType: state.initialCost || pendingText,
      initialCostRate: !state.initialCost || ["초기비용 0원", pendingText].includes(state.initialCost)
        ? "해당 없음"
        : (state.rate || pendingText),
      annualMileage: state.mileage || pendingText,

      // Apps Script의 data.subsidyRegion과 동일한 필드명으로 전송합니다.
      subsidyRegion: isElectricVehicle()
        ? (state.subsidyRegion || pendingText)
        : "해당 없음",

      customerName: state.customerName,
      customerPhone: state.customerPhone,
      contactMethod: state.contactMethod,

      // 기본 유입 정보
      referrer: trafficInfo.referrer,
      utmSource: trafficInfo.utmSource,
      utmMedium: trafficInfo.utmMedium,
      utmCampaign: trafficInfo.utmCampaign
    };
  }

  async function submitEstimateToGoogle() {
    if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.includes("여기에_")) {
      throw new Error("Apps Script 웹앱 URL이 설정되지 않았습니다.");
    }

    const payload = buildEstimatePayload();
    const securityData = getAutojiniSecurityData();

    // Apps Script의 e.parameter에서 각 값을 안정적으로 읽을 수 있도록
    // application/x-www-form-urlencoded 형식으로 명시적으로 구성합니다.
    const body = new URLSearchParams({
      submittedAt: payload.submittedAt || "",
      vehicleType: payload.vehicleType || "",
      brand: payload.brand || "",
      vehicle: payload.vehicle || "",
      exteriorColor: payload.exteriorColor || "",
      model: payload.model || "",
      trim: payload.trim || "",
      usageType: payload.usageType || "",
      initialCostType: payload.initialCostType || "",
      initialCostRate: payload.initialCostRate || "",
      annualMileage: payload.annualMileage || "",
      subsidyRegion: payload.subsidyRegion || "",
      customerName: payload.customerName || "",
      customerPhone: payload.customerPhone || "",
      contactMethod: payload.contactMethod || "",

      // 기본 유입 정보
      referrer: payload.referrer || "직접 접속",
      utmSource: payload.utmSource || "없음",
      utmMedium: payload.utmMedium || "없음",
      utmCampaign: payload.utmCampaign || "없음",

      // 방문자 ID 기반 반복 신청 확인 정보
      visitorId: securityData.visitorId || "확인 불가",
      elapsedSeconds: String(securityData.elapsedSeconds || 0)
    });

    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: body.toString()
    });
  }


  const privacyModal = document.getElementById("privacyModal");

  document.querySelectorAll("[data-privacy-close]").forEach(button => {
    button.addEventListener("click", () => privacyModal?.close());
  });

  privacyModal?.addEventListener("click", event => {
    const rect = privacyModal.getBoundingClientRect();
    const clickedOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (clickedOutside) privacyModal.close();
  });


  indicator.addEventListener("click", event => {
    const button = event.target.closest("[data-step-tab]");
    if (!button || button.disabled) return;

    const targetStep = Number(button.dataset.stepTab);
    if (!Number.isInteger(targetStep)) return;
    if (targetStep > state.maxReachedStep) return;

    state.step = targetStep;
    render();
    scrollToEstimate();
  });

  backButton.addEventListener("click", () => {
    if (state.step > 1) {
      state.step -= 1;
      render();
      scrollToEstimate();
    }
  });

  consultButton?.addEventListener("click", () => {
    moveToConsultStep();
  });

  nextButton.addEventListener("click", async () => {
    if (!validateCurrentStep()) return;

    if (state.step < 4) {
      state.step += 1;
      state.maxReachedStep = Math.max(state.maxReachedStep, state.step);
      render();
      scrollToEstimate();
      return;
    }

    const originalText = nextButton.innerHTML;
    nextButton.disabled = true;
    nextButton.classList.add("is-submitting");
    nextButton.textContent = "견적 전송 중...";

    try {
      await submitEstimateToGoogle();
      state.submitted = true;
      render();
      scrollToEstimate();
    } catch (error) {
      console.error(error);
      showValidation("견적 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      nextButton.disabled = false;
      nextButton.classList.remove("is-submitting");
      nextButton.innerHTML = originalText;
    }
  });

  form.addEventListener("submit", event => event.preventDefault());

  const homeLogo = document.querySelector(".brand-mark");
  homeLogo?.addEventListener("click", event => {
    event.preventDefault();
    resetWizardToStart();
  });

  render();
})();
