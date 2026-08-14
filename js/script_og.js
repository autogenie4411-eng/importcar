(() => {
  "use strict";

  const currentMonth = new Date().getMonth() + 1;

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
    "name": "BMW",
    "short": "BMW",
    "market": "import",
    "ownBackground": false,
    "cars": [
      
      {
        "name": "1시리즈",
        "detailModels": [
          {
            "name": "120",
            "trims": [
              "Base",
              "M Sport"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0182",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/1시리즈-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0183",
            "name": "스카이스크래퍼 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/1시리즈-스카이스크래퍼 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0184",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/1시리즈-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0185",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/1시리즈-케이프 요크 그린 메탈릭.webp"
          }
        ]
      },
      {
        "name": "2시리즈",
        "detailModels": [
          {
            "name": "220",
            "trims": [
              "M Sport Design",
              "M Sport"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0186",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#B8B9BD",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/2시리즈-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0187",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/2시리즈-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0188",
            "name": "스카이스크래퍼 그레이 메탈릭",
            "hex": "#62635E",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/2시리즈-스카이스크래퍼 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0189",
            "name": "썬더나이트 메탈릭",
            "hex": "#624F71",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/2시리즈-썬더나이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0190",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/2시리즈-알파인 화이트.webp"
          }
        ]
      },
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
        "name": "4시리즈",
        "detailModels": [
          {
            "name": "420i",
            "trims": [
              "M Sport Pro Package"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0191",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/4시리즈-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0192",
            "name": "M 포티마오 브루 메탈릭",
            "hex": "#253A88",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/4시리즈-M 포티마오 브루 메탈릭.webp"
          },
          {
            "id": "paint-add-0193",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/4시리즈-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0194",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/4시리즈-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0195",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/4시리즈-케이프 요크 그린 메탈릭.webp"
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
              "M Sport"
            ]
          },
          {
            "name": "530i",
            "trims": [
              "A/T",
              "M Sport"
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
            "hex": "#565754",
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
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-옥사이드 그레이 메탈릭.webp"
          },
          {
            "id": "paint-11",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/5시리즈-케이프 요크 그린 메탈릭.webp"
          }
        ]
      },
      {
        "name": "7시리즈",
        "detailModels": [
          {
            "name": "740d",
            "trims": [
              "M Sport Black",
              "M Sport"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0196",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/7시리즈-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0197",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/7시리즈-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0198",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/7시리즈-블랙 사파이어 메탈릭.webp"
          }
          ,
          {
            "id": "paint-bmw-7-oxide-gray",
            "name": "옥사이드 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/7시리즈-옥사이드 그레이 메탈릭.webp"
          }
        ]
      },
      {
        "name": "8시리즈",
        "detailModels": [
          {
            "name": "M850i xDrive",
            "trims": [
              "M Performance"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0199",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/8시리즈-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0200",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/8시리즈-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0201",
            "name": "산레모 그린 메탈릭",
            "hex": "#0D330B",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/8시리즈-산레모 그린 메탈릭.webp"
          },
          {
            "id": "paint-add-0202",
            "name": "스카이스크래퍼 그레이 메탈릭",
            "hex": "#797C76",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/8시리즈-스카이스크래퍼 그레이 메탈릭.webp"
          }
        ]
      },
      {
        "name": "i4",
        "detailModels": [
          {
            "name": "M60 xDrive",
            "trims": [
              "A/T",
              "Pro"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0203",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i4-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0204",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i4-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0205",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i4-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0206",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i4-케이프 요크 그린 메탈릭.webp"
          },
          {
            "id": "paint-add-0207",
            "name": "포티마오 블루 메탈릭",
            "hex": "#172D77",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i4-포티마오 블루 메탈릭.webp"
          }
        ]
      },
      {
        "name": "i5",
        "detailModels": [
          {
            "name": "eDrive40",
            "trims": [
              "A/T",
              "M Sport"
            ]
          },
          {
            "name": "xDrive40",
            "trims": [
              "M Sport Package"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0208",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i5-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0209",
            "name": "소피스토 그레이 메탈릭",
            "hex": "#4A4B49",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i5-소피스토 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0210",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i5-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0211",
            "name": "옥사이드 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i5-옥사이드 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0212",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i5-케이프 요크 그린 메탈릭.webp"
          }
        ]
      },
      {
        "name": "i7",
        "detailModels": [
          {
            "name": "M70 xDrive",
            "trims": [
              "M performance"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0213",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i7-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0214",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i7-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0215",
            "name": "소피스토 그레이 브릴리언트 이펙트",
            "hex": "#2D2D2D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i7-소피스토 그레이 브릴리언트 이펙트.webp"
          },
          {
            "id": "paint-add-0216",
            "name": "옥사이드 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/i7-옥사이드 그레이 메탈릭.webp"
          }
        ]
      },
      {
        "name": "iX1",
        "detailModels": [
          {
            "name": "eDrive20",
            "trims": [
              "xLine"
            ]
          },
          {
            "name": "xDrive30",
            "trims": [
              "xLine",
              "M Sport"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0217",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX1-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0218",
            "name": "스페이스 실버 메탈릭",
            "hex": "#757777",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX1-스페이스 실버 메탈릭.webp"
          },
          {
            "id": "paint-add-0219",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX1-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0220",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX1-케이프 요크 그린 메탈릭.webp"
          }
        ]
      },
      {
        "name": "iX2",
        "detailModels": [
          {
            "name": "eDrive20",
            "trims": [
              "M Sport"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0221",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX2-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0222",
            "name": "M 포티마오 블루 메탈릭",
            "hex": "#1E305A",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX2-M 포티마오 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0223",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX2-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0224",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX2-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0225",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX2-케이프 요크 그린 메탈릭.webp"
          }
        ]
      },
      {
        "name": "iX3",
        "detailModels": [
          {
            "name": "50 xDrive",
            "trims": [
              "SE",
              "M Sport"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0226",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX3-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0227",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX3-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0228",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX3-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0229",
            "name": "오션 웨이브 블루 메탈릭",
            "hex": "#414F6A",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX3-오션 웨이브 블루 메탈릭.webp"
          }
        ]
      },
      {
        "name": "IX",
        "detailModels": [
          {
            "name": "xDrive45",
            "trims": [
              "M Sport Package"
            ]
          },
          {
            "name": "xDrive60",
            "trims": [
              "M Sport Pro Package"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0230",
            "name": "M 카본 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX-M 카본 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0231",
            "name": "듄 그레이 메탈릭",
            "hex": "#C4C1B9",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX-듄 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0232",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0233",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0234",
            "name": "아틱 레이스 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX-아틱 레이스 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0235",
            "name": "어벤츄린 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/iX-어벤츄린 레드 메탈릭.webp"
          }
        ]
      },
      {
        "name": "X1",
        "detailModels": [
          {
            "name": "sDrive18d",
            "trims": [
              "xLine",
              "M Sport"
            ]
          },
          {
            "name": "xDrive20i",
            "trims": [
              "xLine",
              "M Sport"
            ]
          },
          {
            "name": "M35i xDrive",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0236",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X1-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0237",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X1-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0238",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X1-케이프 요크 그린 메탈릭.webp"
          }
        ]
      },
      {
        "name": "X2",
        "detailModels": [
          {
            "name": "xDrive20i",
            "trims": [
              "M Sport Package"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0239",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X2-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0240",
            "name": "M 포티마오 블루 메탈릭",
            "hex": "#1E305D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X2-M 포티마오 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0241",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X2-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0242",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X2-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0243",
            "name": "파이어 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X2-파이어 레드 메탈릭.webp"
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
          },
          {
            "name": "20d xDrive",
            "trims": [
              "A/T",
              "M Sport"
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
        "name": "X4",
        "detailModels": [
          {
            "name": "xDrive20i",
            "trims": [
              "xLine",
              "M Sport",
              "M Sport Pro"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0244",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X4-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0245",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X4-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0246",
            "name": "소피스토 그레이 브릴리언트 이펙트",
            "hex": "#433F3B",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X4-소피스토 그레이 브릴리언트 이펙트.webp"
          },
          {
            "id": "paint-add-0247",
            "name": "알파인 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X4-알파인 화이트.webp"
          },
          {
            "id": "paint-add-0248",
            "name": "파이토닉 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X4-파이토닉 블루 메탈릭.webp"
          }
        ]
      },
            {
        "name": "X5",
        "detailModels": [
          {
            "name": "xDrive30d",
            "trims": [
              "xLine (7인승)"
            ]
          },
          {
            "name": "xDrive40i",
            "trims": [
              "xLine (7인승)"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-16",
            "name": "맨해튼 메탈릭",
            "hex": "#626159",
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
      },
      {
        "name": "X6",
        "detailModels": [
          {
            "name": "xDrive30d",
            "trims": [
              "M Sport"
            ]
          },
          {
            "name": "xDrive40i",
            "trims": [
              "M Sport"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0249",
            "name": "M 브루클린 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X6-M 브루클린 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0250",
            "name": "맨해탄 메탈릭",
            "hex": "#626159",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X6-맨해탄 메탈릭.webp"
          },
          {
            "id": "paint-add-0251",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X6-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0252",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X6-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0253",
            "name": "스카이스크래퍼 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X6-스카이스크래퍼 그레이 메탈릭.webp"
          }
        ]
      },
      {
        "name": "X7",
        "detailModels": [
          {
            "name": "xDrive40d",
            "trims": [
              "M Sport (7인승)"
            ]
          },
          {
            "name": "xDrive40i",
            "trims": [
              "M Sport (7인승)"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0254",
            "name": "맨해탄 메탈릭",
            "hex": "#626159",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X7-맨해탄 메탈릭.webp"
          },
          {
            "id": "paint-add-0255",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X7-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0256",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X7-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0257",
            "name": "스카이스크래퍼 그레이 메탈릭",
            "hex": "#4D534C",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/X7-스카이스크래퍼 그레이 메탈릭.webp"
          }
        ]
      },
      {
        "name": "XM",
        "detailModels": [
          {
            "name": "XM Label",
            "trims": [
              "A/T",
              "상위형"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0258",
            "name": "BMW 인디비주얼 드라빗 그레이 메탈릭",
            "hex": "#444744",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/XM-BMW 인디비주얼 드라빗 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0259",
            "name": "미네랄 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/XM-미네랄 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0260",
            "name": "블랙 사파이어 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/XM-블랙 사파이어 메탈릭.webp"
          },
          {
            "id": "paint-add-0261",
            "name": "케이프 요크 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/BMW/XM-케이프 요크 그린 메탈릭.webp"
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
        "name": "A클래스 해치백",
        "detailModels": [
          {
            "name": "A 220",
            "trims": [
              "DCT"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0001",
            "name": "MANUFAKTUR 마운틴 그레이 마그노",
            "hex": "#494C4B",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/A클래스 해치백-MANUFAKTUR 마운틴 그레이 마그노.webp"
          },
          {
            "id": "paint-add-0002",
            "name": "마운틴 그레이 메탈릭",
            "hex": "#535655",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/A클래스 해치백-마운틴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0003",
            "name": "제트 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/A클래스 해치백-제트 블랙.webp"
          },
          {
            "id": "paint-add-0004",
            "name": "코스모스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/A클래스 해치백-코스모스 블랙.webp"
          },
          {
            "id": "paint-add-0005",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/A클래스 해치백-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0006",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/A클래스 해치백-하이 테크 실버.webp"
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
            "id": "paint-benz-cclass-avantgarde-graphite-grey",
            "name": "그라파이트 그레이",
            "hex": "#646464",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-그라파이트 그레이.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-black",
            "name": "블랙",
            "hex": "#111214",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-블랙.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-selenite-grey",
            "name": "셀레나이트 그레이",
            "hex": "#666a6a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-sodalite-blue",
            "name": "소다라이트 블루",
            "hex": "#5a5e6a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-소다라이트 블루.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-spectral-blue",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-스펙트럴 블루.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-obsidian-black",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-옵시디안 블랙.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-polar-white",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-폴라 화이트.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-high-tech-silver",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-하이 테크 실버.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-manufaktur-graphite-grey-magno",
            "name": "MANUFAKTUR 그라파이트 그레이 마그노",
            "hex": "#484848",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-benz-cclass-avantgarde-manufaktur-alpine-grey-solid",
            "name": "MANUFAKTUR 알파인 그레이 솔리드",
            "hex": "#949494",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/C클래스 아방가르드-MANUFAKTUR 알파인 그레이 솔리드.webp"
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
      "id": "paint-benz-e-avantgarde-graphite-grey",
      "name": "그라파이트 그레이",
      "hex": "#5f656b",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-그라파이트 그레이.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-nautic-blue",
      "name": "노틱 블루",
      "hex": "#315d88",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-노틱 블루.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-verde-silver",
      "name": "베르데 실버",
      "hex": "#495956",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-베르데 실버.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-velvet-brown",
      "name": "벨벳 브라운",
      "hex": "#755548",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-벨벳 브라운.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-obsidian-black",
      "name": "옵시디안 블랙",
      "hex": "#17191c",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-옵시디안 블랙.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-polar-white",
      "name": "폴라 화이트",
      "hex": "#f3f2ed",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-폴라 화이트.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-high-tech-silver",
      "name": "하이 테크 실버",
      "hex": "#b9bec5",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-하이 테크 실버.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-manufaktur-alpine-grey",
      "name": "MANUFAKTUR 알파인 그레이",
      "hex": "#929393",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-MANUFAKTUR 알파인 그레이.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-manufaktur-opalite-white-bright",
      "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
      "hex": "#ececea",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
    },
    {
      "id": "paint-benz-e-avantgarde-manufaktur-patagonia-red-bright",
      "name": "MANUFAKTUR 파타고니아 레드 브라이트",
      "hex": "#a92b31",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 아방가르드-MANUFAKTUR 파타고니아 레드 브라이트.webp"
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
      "id": "paint-benz-e-exclusive-graphite-grey",
      "name": "그라파이트 그레이",
      "hex": "#5f656b",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-그라파이트 그레이.webp"
    },
    {
      "id": "paint-benz-e-exclusive-nautic-blue",
      "name": "노틱 블루",
      "hex": "#315d88",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-노틱 블루.webp"
    },
    {
      "id": "paint-benz-e-exclusive-verde-silver",
      "name": "베르데 실버",
      "hex": "#495956",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-베르데 실버.webp"
    },
    {
      "id": "paint-benz-e-exclusive-velvet-brown",
      "name": "벨벳 브라운",
      "hex": "#755548",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-벨벳 브라운.webp"
    },
    {
      "id": "paint-benz-e-exclusive-obsidian-black",
      "name": "옵시디안 블랙",
      "hex": "#17191c",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-옵시디안 블랙.webp"
    },
    {
      "id": "paint-benz-e-exclusive-polar-white",
      "name": "폴라 화이트",
      "hex": "#f3f2ed",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-폴라 화이트.webp"
    },
    {
      "id": "paint-benz-e-exclusive-high-tech-silver",
      "name": "하이 테크 실버",
      "hex": "#b9bec5",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-하이 테크 실버.webp"
    },
    {
      "id": "paint-benz-e-exclusive-manufaktur-alpine-grey",
      "name": "MANUFAKTUR 알파인 그레이",
      "hex": "#929393",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-MANUFAKTUR 알파인 그레이.webp"
    },
    {
      "id": "paint-benz-e-exclusive-manufaktur-opalite-white-bright",
      "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
      "hex": "#ececea",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
    },
    {
      "id": "paint-benz-e-exclusive-manufaktur-patagonia-red-bright",
      "name": "MANUFAKTUR 파타고니아 레드 브라이트",
      "hex": "#a92b31",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/E클래스 익스클루시브-MANUFAKTUR 파타고니아 레드 브라이트.webp"
    }
  ]
},
      {
        "name": "G클래스",
        "detailModels": [
          {
            "name": "G 450d 4MATIC",
            "trims": [
              "A/T",
              "Manufaktur"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-benz-gclass-magnetite-black",
            "name": "마그네타이트 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-마그네타이트 블랙.webp"
          },
          {
            "id": "paint-benz-gclass-mojave-silver",
            "name": "모하비 실버",
            "hex": "#b1aaa0",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-모하비 실버.webp"
          },
          {
            "id": "paint-benz-gclass-brilliant-blue",
            "name": "브릴리안트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-브릴리안트 블루.webp"
          },
          {
            "id": "paint-benz-gclass-black",
            "name": "블랙",
            "hex": "#111214",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-블랙.webp"
          },
          {
            "id": "paint-benz-gclass-selenite-grey",
            "name": "셀레나이트 그레이",
            "hex": "#666a6a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-benz-gclass-sodalite-blue",
            "name": "소달라이트 블루",
            "hex": "#465b73",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-소달라이트 블루.webp"
          },
          {
            "id": "paint-benz-gclass-emerald-green",
            "name": "에메랄드 그린",
            "hex": "#314f43",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-에메랄드 그린.webp"
          },
          {
            "id": "paint-benz-gclass-obsidian-black",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-옵시디안 블랙.webp"
          },
          {
            "id": "paint-benz-gclass-iridium-silver",
            "name": "이리디움 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-이리디움 실버.webp"
          },
          {
            "id": "paint-benz-gclass-polar-white",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-폴라 화이트.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-night-black-magno",
            "name": "G manufaktur 나이트 블랙 마그노",
            "hex": "#242526",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-G manufaktur 나이트 블랙 마그노.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-graphite-metallic",
            "name": "MANUFAKTUR 그라파이트 메탈릭",
            "hex": "#5f656b",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 그라파이트 메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-dark-blue-non-metallic",
            "name": "MANUFAKTUR 다크 블루 논-메탈릭",
            "hex": "#26384d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 다크 블루 논-메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-desert-sand-non-metallic",
            "name": "MANUFAKTUR 데저트 샌드 논-메탈릭",
            "hex": "#c1a77d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 데저트 샌드 논-메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-deep-green-non-metallic",
            "name": "MANUFAKTUR 딥 그린 논-메탈릭",
            "hex": "#304438",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 딥 그린 논-메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-rubellite-red-metallic",
            "name": "MANUFAKTUR 루벨라이트 레드 메탈릭",
            "hex": "#7f3439",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 루벨라이트 레드 메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-vintage-blue-non-metallic",
            "name": "MANUFAKTUR 빈티지 블루 논-메탈릭",
            "hex": "#53697a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 빈티지 블루 논-메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-south-sea-blue-metallic",
            "name": "MANUFAKTUR 사우스 씨 블루 메탈릭",
            "hex": "#276c85",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 사우스 씨 블루 메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-sun-yellow-non-metallic",
            "name": "MANUFAKTUR 썬 옐로우 논-메탈릭",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 썬 옐로우 논-메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-ocean-blue-metallic",
            "name": "MANUFAKTUR 오션 블루 메탈릭",
            "hex": "#2e526f",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 오션 블루 메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-opalite-white-magno",
            "name": "MANUFAKTUR 오팔라이트 화이트 마그노",
            "hex": "#dddcd7",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 오팔라이트 화이트 마그노.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-opalite-white-bright",
            "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
            "hex": "#ececea",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-olive-metallic",
            "name": "MANUFAKTUR 올리브 메탈릭",
            "hex": "#686c53",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 올리브 메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-indium-grey-metallic",
            "name": "MANUFAKTUR 인디움 그레이 메탈릭",
            "hex": "#797d7e",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 인디움 그레이 메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-classic-grey-non-metallic",
            "name": "MANUFAKTUR 클래식 그레이 논-메탈릭",
            "hex": "#858786",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 클래식 그레이 논-메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-travertine-beige-metallic",
            "name": "MANUFAKTUR 트레벌타인 베이지 메탈릭",
            "hex": "#a9987d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 트레벌타인 베이지 메탈릭.webp"
          },
          {
            "id": "paint-benz-gclass-manufaktur-hyacinth-red-metallic",
            "name": "MANUFAKTUR 하이신스 레드 메탈릭",
            "hex": "#9a2f34",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/G클래스-MANUFAKTUR 하이신스 레드 메탈릭.webp"
          }
        ]
      },
      {
        "name": "AMG SL 로드스터",
        "detailModels": [
          {
            "name": "SL 43 AMG",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0042",
            "name": "AMG 몬자 그레이 마그노",
            "hex": "#373230",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-AMG 몬자 그레이 마그노.webp"
          },
          {
            "id": "paint-add-0043",
            "name": "MANUFAKTUR 그라파이트 그레이 마그노",
            "hex": "#363938",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-add-0044",
            "name": "MANUFAKTUR 나이트 블랙 마그노",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 나이트 블랙 마그노.webp"
          },
          {
            "id": "paint-add-0045",
            "name": "MANUFAKTUR 루벨라이트 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 루벨라이트 레드.webp"
          },
          {
            "id": "paint-add-0046",
            "name": "MANUFAKTUR 빈티지 블루 솔리드",
            "hex": "#6E8DA0",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 빈티지 블루 솔리드.webp"
          },
          {
            "id": "paint-add-0047",
            "name": "MANUFAKTUR 스펙트럴 블루 마그노",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 스펙트럴 블루 마그노.webp"
          },
          {
            "id": "paint-add-0048",
            "name": "MANUFAKTUR 실리콘 그레이 솔리드",
            "hex": "#4F5455",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 실리콘 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0049",
            "name": "MANUFAKTUR 알파인 그레이 솔리드",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 알파인 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0050",
            "name": "MANUFAKTUR 오팔라이트 화이트 마그노",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 오팔라이트 화이트 마그노.webp"
          },
          {
            "id": "paint-add-0051",
            "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
          },
          {
            "id": "paint-add-0052",
            "name": "MANUFAKTUR 익스클루시브 코트 다 쥐르 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 익스클루시브 코트 다 쥐르 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0053",
            "name": "MANUFAKTUR 파타고니아 레드 브라이트",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 파타고니아 레드 브라이트.webp"
          },
          {
            "id": "paint-add-0054",
            "name": "MANUFAKTUR 하이테크 실버 마그노",
            "hex": "#97A1A9",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-MANUFAKTUR 하이테크 실버 마그노.webp"
          },
          {
            "id": "paint-add-0055",
            "name": "셀레나이트 그레이",
            "hex": "#555A5B",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-add-0056",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-스펙트럴 블루.webp"
          },
          {
            "id": "paint-add-0057",
            "name": "썬 옐로우",
            "hex": "#c7a83f",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-썬 옐로우.webp"
          },
          {
            "id": "paint-add-0058",
            "name": "아일랜드 미드 그린 마그노",
            "hex": "#476353",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-아일랜드 미드 그린 마그노.webp"
          },
          {
            "id": "paint-add-0059",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0060",
            "name": "하이테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-하이테크 실버.webp"
          },
          {
            "id": "paint-add-0061",
            "name": "하이퍼 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG SL 로드스터-하이퍼 블루.webp"
          }
        ]
      },
      {
        "name": "EQA",
        "detailModels": [
          {
            "name": "EQA 250",
            "trims": [
              "Progressive"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0062",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQA-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-add-0063",
            "name": "나이트 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQA-나이트 블랙.webp"
          },
          {
            "id": "paint-add-0064",
            "name": "마운틴 그레이",
            "hex": "#4B4D50",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQA-마운틴 그레이.webp"
          },
          {
            "id": "paint-add-0065",
            "name": "코스모스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQA-코스모스 블랙.webp"
          },
          {
            "id": "paint-add-0066",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQA-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0067",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQA-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "EQB",
        "detailModels": [
          {
            "name": "EQB 300 4MATIC",
            "trims": [
              "Progressive"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0068",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQB-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-add-0069",
            "name": "나이트 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQB-나이트 블랙.webp"
          },
          {
            "id": "paint-add-0070",
            "name": "마운틴 그레이",
            "hex": "#4B4D50",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQB-마운틴 그레이.webp"
          },
          {
            "id": "paint-add-0071",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQB-스펙트럴 블루.webp"
          },
          {
            "id": "paint-add-0072",
            "name": "코스모스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQB-코스모스 블랙.webp"
          },
          {
            "id": "paint-add-0073",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQB-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0074",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQB-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "EQE",
        "detailModels": [
          {
            "name": "EQE 350+",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0075",
            "name": "그라파이트 그레이",
            "hex": "#3A3D45",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQE-그라파이트 그레이.webp"
          },
          {
            "id": "paint-add-0076",
            "name": "블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQE-블랙.webp"
          },
          {
            "id": "paint-add-0077",
            "name": "셀레나이트 그레이",
            "hex": "#404546",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQE-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-add-0078",
            "name": "소다라이트 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQE-소다라이트 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0079",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQE-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0080",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQE-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0081",
            "name": "하이 테크 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQE-하이 테크 실버 메탈릭.webp"
          }
        ]
      },
      {
        "name": "EQS",
        "detailModels": [
          {
            "name": "EQS 350",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0082",
            "name": "그라파이트 그레이",
            "hex": "#454850",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-그라파이트 그레이.webp"
          },
          {
            "id": "paint-add-0083",
            "name": "노틱 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-노틱 블루.webp"
          },
          {
            "id": "paint-add-0084",
            "name": "블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-블랙.webp"
          },
          {
            "id": "paint-add-0085",
            "name": "소다라이트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-소다라이트 블루.webp"
          },
          {
            "id": "paint-add-0086",
            "name": "오닉스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-오닉스 블랙.webp"
          },
          {
            "id": "paint-add-0087",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0088",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0089",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/EQS-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "AMG GT 43 쿠페",
        "detailModels": [
          {
            "name": "AMG GT",
            "trims": [
              "43"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-benz-amggt43-rubellite-red",
            "name": "루벨라이트 레드",
            "hex": "#2A1E1F",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-루벨라이트 레드.webp"
          },
          {
            "id": "paint-benz-amggt43-selenite-grey",
            "name": "셀레나이트 그레이",
            "hex": "#666a6a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-benz-amggt43-spectral-blue",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-스펙트럴 블루.webp"
          },
          {
            "id": "paint-benz-amggt43-sun-yellow",
            "name": "썬 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-썬 옐로우.webp"
          },
          {
            "id": "paint-benz-amggt43-obsidian-black",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-옵시디안 블랙.webp"
          },
          {
            "id": "paint-benz-amggt43-high-tech-silver",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-하이 테크 실버.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-green-hell-magno",
            "name": "MANUFAKTUR 그린 헬 마그노",
            "hex": "#4f5b46",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 그린 헬 마그노.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-night-black-magno",
            "name": "MANUFAKTUR 나이트 블랙 마그노",
            "hex": "#242526",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 나이트 블랙 마그노.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-desert-sand",
            "name": "MANUFAKTUR 데저트 샌드",
            "hex": "#c1a77d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 데저트 샌드.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-vintage-blue",
            "name": "MANUFAKTUR 빈티지 블루",
            "hex": "#53697a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 빈티지 블루.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-spectral-blue-magno",
            "name": "MANUFAKTUR 스펙트럴 블루 마그노",
            "hex": "#2e5377",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 스펙트럴 블루 마그노.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-silicon-grey-solid",
            "name": "MANUFAKTUR 실리콘 그레이 솔리드",
            "hex": "#8a8c8d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 실리콘 그레이 솔리드.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-alpine-grey-solid",
            "name": "MANUFAKTUR 알파인 그레이 솔리드",
            "hex": "#929393",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 알파인 그레이 솔리드.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-orange-flame",
            "name": "MANUFAKTUR 오렌지 플레임",
            "hex": "#c65f28",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 오렌지 플레임.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-opalite-white-metallic",
            "name": "MANUFAKTUR 오팔라이트 화이트 메탈릭",
            "hex": "#ececea",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 오팔라이트 화이트 메탈릭.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-copper-orange-magno",
            "name": "MANUFAKTUR 코퍼 오렌지 마그노",
            "hex": "#8d5a32",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 코퍼 오렌지 마그노.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-patagonia-red",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-hightech-silver-magno",
            "name": "MANUFAKTUR 하이테크 실버 마그노",
            "hex": "#9ea4ab",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 하이테크 실버 마그노.webp"
          },
          {
            "id": "paint-benz-amggt43-manufaktur-hyper-blue-magno",
            "name": "MANUFAKTUR 하이퍼 블루 마그노",
            "hex": "#2f5fa8",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 43-MANUFAKTUR 하이퍼 블루 마그노.webp"
          }
        ]
      },
      {
        "name": "AMG GT 55 쿠페",
        "detailModels": [
          {
            "name": "AMG GT",
            "trims": [
              "55"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-benz-amggt55-rubellite-red",
            "name": "루벨라이트 레드",
            "hex": "#2A1E1F",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-루벨라이트 레드.webp"
          },
          {
            "id": "paint-benz-amggt55-selenite-grey",
            "name": "셀레나이트 그레이",
            "hex": "#666a6a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-benz-amggt55-spectral-blue",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-스펙트럴 블루.webp"
          },
          {
            "id": "paint-benz-amggt55-sun-yellow",
            "name": "썬 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-썬 옐로우.webp"
          },
          {
            "id": "paint-benz-amggt55-elbaite-green-metallic",
            "name": "엘바이트 그린 메탈릭",
            "hex": "#566c58",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-엘바이트 그린 메탈릭.webp"
          },
          {
            "id": "paint-benz-amggt55-obsidian-black",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-옵시디안 블랙.webp"
          },
          {
            "id": "paint-benz-amggt55-high-tech-silver",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-하이 테크 실버.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-green-hell-magno",
            "name": "MANUFAKTUR 그린 헬 마그노",
            "hex": "#4f5b46",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 그린 헬 마그노.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-night-black-magno",
            "name": "MANUFAKTUR 나이트 블랙 마그노",
            "hex": "#242526",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 나이트 블랙 마그노.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-desert-sand",
            "name": "MANUFAKTUR 데저트 샌드",
            "hex": "#c1a77d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 데저트 샌드.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-vintage-blue",
            "name": "MANUFAKTUR 빈티지 블루",
            "hex": "#53697a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 빈티지 블루.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-spectral-blue-magno",
            "name": "MANUFAKTUR 스펙트럴 블루 마그노",
            "hex": "#2e5377",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 스펙트럴 블루 마그노.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-silicon-grey-solid",
            "name": "MANUFAKTUR 실리콘 그레이 솔리드",
            "hex": "#8a8c8d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 실리콘 그레이 솔리드.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-alpine-grey-solid",
            "name": "MANUFAKTUR 알파인 그레이 솔리드",
            "hex": "#929393",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 알파인 그레이 솔리드.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-orange-flame",
            "name": "MANUFAKTUR 오렌지 플레임",
            "hex": "#c65f28",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 오렌지 플레임.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-opalite-white-metallic",
            "name": "MANUFAKTUR 오팔라이트 화이트 메탈릭",
            "hex": "#ececea",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 오팔라이트 화이트 메탈릭.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-copper-orange-magno",
            "name": "MANUFAKTUR 코퍼 오렌지 마그노",
            "hex": "#8d5a32",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 코퍼 오렌지 마그노.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-patagonia-red",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-hightech-silver-magno",
            "name": "MANUFAKTUR 하이테크 실버 마그노",
            "hex": "#9ea4ab",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 하이테크 실버 마그노.webp"
          },
          {
            "id": "paint-benz-amggt55-manufaktur-hyper-blue-magno",
            "name": "MANUFAKTUR 하이퍼 블루 마그노",
            "hex": "#2f5fa8",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 55-MANUFAKTUR 하이퍼 블루 마그노.webp"
          }
        ]
      },
      {
        "name": "AMG GT 63 S E 쿠페",
        "detailModels": [
          {
            "name": "AMG GT",
            "trims": [
              "63 S E Performance"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-benz-amggt63se-rubellite-red",
            "name": "루벨라이트 레드",
            "hex": "#2A1E1F",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-루벨라이트 레드.webp"
          },
          {
            "id": "paint-benz-amggt63se-selenite-grey",
            "name": "셀레나이트 그레이",
            "hex": "#666a6a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-benz-amggt63se-spectral-blue",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-스펙트럴 블루.webp"
          },
          {
            "id": "paint-benz-amggt63se-sun-yellow",
            "name": "썬 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-썬 옐로우.webp"
          },
          {
            "id": "paint-benz-amggt63se-obsidian-black",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-옵시디안 블랙.webp"
          },
          {
            "id": "paint-benz-amggt63se-high-tech-silver",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-하이 테크 실버.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-green-hell-magno",
            "name": "MANUFAKTUR 그린 헬 마그노",
            "hex": "#4f5b46",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 그린 헬 마그노.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-night-black-magno",
            "name": "MANUFAKTUR 나이트 블랙 마그노",
            "hex": "#242526",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 나이트 블랙 마그노.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-desert-sand",
            "name": "MANUFAKTUR 데저트 샌드",
            "hex": "#c1a77d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 데저트 샌드.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-vintage-blue",
            "name": "MANUFAKTUR 빈티지 블루",
            "hex": "#53697a",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 빈티지 블루.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-spectral-blue-magno",
            "name": "MANUFAKTUR 스펙트럴 블루 마그노",
            "hex": "#2e5377",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 스펙트럴 블루 마그노.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-silicon-grey-solid",
            "name": "MANUFAKTUR 실리콘 그레이 솔리드",
            "hex": "#8a8c8d",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 실리콘 그레이 솔리드.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-alpine-grey-solid",
            "name": "MANUFAKTUR 알파인 그레이 솔리드",
            "hex": "#929393",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 알파인 그레이 솔리드.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-orange-flame",
            "name": "MANUFAKTUR 오렌지 플레임",
            "hex": "#c65f28",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 오렌지 플레임.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-opalite-white-magno",
            "name": "MANUFAKTUR 오팔라이트 화이트 마그노",
            "hex": "#dddcd7",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 오팔라이트 화이트 마그노.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-opalite-white-metallic",
            "name": "MANUFAKTUR 오팔라이트 화이트 메탈릭",
            "hex": "#ececea",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 오팔라이트 화이트 메탈릭.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-copper-orange-magno",
            "name": "MANUFAKTUR 코퍼 오렌지 마그노",
            "hex": "#8d5a32",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 코퍼 오렌지 마그노.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-patagonia-red",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-hightech-silver-magno",
            "name": "MANUFAKTUR 하이테크 실버 마그노",
            "hex": "#9ea4ab",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 하이테크 실버 마그노.webp"
          },
          {
            "id": "paint-benz-amggt63se-manufaktur-hyper-blue-magno",
            "name": "MANUFAKTUR 하이퍼 블루 마그노",
            "hex": "#2f5fa8",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/AMG GT 63 S E Performance-MANUFAKTUR 하이퍼 블루 마그노.webp"
          }
        ]
      },
      {
        "name": "CLA",
        "detailModels": [
          {
            "name": "CLA 250 4MATIC",
            "trims": [
              "AMG Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0110",
            "name": "코스모스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/CLA AMG GT 쿠페-코스모스 블랙.webp"
          }
        ]
      },
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
      "id": "paint-benz-cle-amg-cabriolet-graphite-grey",
      "name": "그라파이트 그레이",
      "hex": "#5f656b",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-그라파이트 그레이.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-spectral-blue",
      "name": "스펙트럴 블루",
      "hex": "#315d88",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-스펙트럴 블루.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-high-tech-silver",
      "name": "하이 테크 실버",
      "hex": "#b9bec5",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-하이 테크 실버.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-manufaktur-graphite-grey-magno",
      "name": "MANUFAKTUR 그라파이트 그레이 마그노",
      "hex": "#4f5254",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-MANUFAKTUR 그라파이트 그레이 마그노.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-manufaktur-alpine-grey",
      "name": "MANUFAKTUR 알파인 그레이",
      "hex": "#929393",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-MANUFAKTUR 알파인 그레이.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-manufaktur-patagonia-red-bright",
      "name": "MANUFAKTUR 파타고니아 레드 브라이트",
      "hex": "#a92b31",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-MANUFAKTUR 파타고니아 레드 브라이트.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-manufaktur-opalite-white",
      "name": "MANUFAKTUR 오팔라이트 화이트",
      "hex": "#ececea",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-MANUFAKTUR 오팔라이트 화이트.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-sun-yellow",
      "name": "썬 옐로우",
      "hex": "#d5aa39",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-썬 옐로우.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-polar-white",
      "name": "폴라 화이트",
      "hex": "#f3f2ed",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-폴라 화이트.webp"
    },
    {
      "id": "paint-benz-cle-amg-cabriolet-obsidian-black",
      "name": "옵시디안 블랙",
      "hex": "#17191c",
      "border": "#cfd5dc",
      "image": "images/vehicles/벤츠/CLE AMG 카브리올레-옵시디안 블랙.webp"
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
            "image": "images/vehicles/벤츠/CLE AMG 쿠페-MANUFAKTUR 그라파이트 그레이 마그노.webp"
          },
          {
            "id": "paint-207",
            "name": "MANUFAKTUR 파타고니아 레드 브라이트",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/CLE AMG 쿠페-MANUFAKTUR 파타고니아 레드 브라이트.webp"
          },
          {
            "id": "paint-208",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/CLE AMG 쿠페-스펙트럴 블루.webp"
          },
          {
            "id": "paint-209",
            "name": "썬 옐로우",
            "hex": "#d5aa39",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/CLE AMG 쿠페-썬 옐로우.webp"
          },
          {
            "id": "paint-210",
            "name": "옵시디안 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/CLE AMG 쿠페-옵시디안 블랙.webp"
          },
          {
            "id": "paint-211",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/CLE AMG 쿠페-폴라 화이트.webp"
          },
          {
            "id": "paint-212",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/CLE AMG 쿠페-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "GLA클래스",
        "detailModels": [
          {
            "name": "GLA 250 4MATIC",
            "trims": [
              "DCT"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0111",
            "name": "마운틴 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLA-마운틴 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0112",
            "name": "제트 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLA-제트 블랙.webp"
          },
          {
            "id": "paint-add-0113",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLA-폴라 화이트.webp"
          }
        ]
      },
      {
        "name": "GLB클래스",
        "detailModels": [
          {
            "name": "GLB 250 4MATIC",
            "trims": [
              "DCT"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0114",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLB-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-add-0115",
            "name": "나이트 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLB-나이트 블랙.webp"
          },
          {
            "id": "paint-add-0116",
            "name": "마운틴 그레이",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLB-마운틴 그레이.webp"
          },
          {
            "id": "paint-add-0117",
            "name": "스펙트럴 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLB-스펙트럴 블루.webp"
          },
          {
            "id": "paint-add-0118",
            "name": "코스모스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLB-코스모스 블랙.webp"
          },
          {
            "id": "paint-add-0119",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLB-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0120",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLB-하이 테크 실버.webp"
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
            "hex": "#3C5150",
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
        "name": "GLE클래스",
        "detailModels": [
          {
            "name": "GLE300d 4MATIC",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "GLE350d 4MATIC",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "GLE450d 4MATIC",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0121",
            "name": "MANUFAKTUR 실리콘 그레이 솔리드",
            "hex": "#585C5D",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-MANUFAKTUR 실리콘 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0122",
            "name": "MANUFAKTUR 아일랜드 그린",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-MANUFAKTUR 아일랜드 그린.webp"
          },
          {
            "id": "paint-add-0123",
            "name": "MANUFAKTUR 알파인 그레이 솔리드",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-MANUFAKTUR 알파인 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0124",
            "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
          },
          {
            "id": "paint-add-0125",
            "name": "MANUFAKTUR 코트다쥐르 라이트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-MANUFAKTUR 코트다쥐르 라이트 블루.webp"
          },
          {
            "id": "paint-add-0126",
            "name": "셀라나이트 그레이",
            "hex": "#5C5E5D",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-셀라나이트 그레이.webp"
          },
          {
            "id": "paint-add-0127",
            "name": "소달라이트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-소달라이트 블루.webp"
          },
          {
            "id": "paint-add-0128",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0129",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0130",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLE-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "GLS클래스",
        "detailModels": [
          {
            "name": "GLS 450 4MATIC",
            "trims": [
              "AMG Line Premium"
            ]
          },
          {
            "name": "GLS 450d 4MATIC",
            "trims": [
              "AMG Line Premium"
            ]
          },
          {
            "name": "GLS 4580 4MATIC",
            "trims": [
              "AMG Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0131",
            "name": "셀레나이트 그레이",
            "hex": "#4F5354",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLS-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-add-0132",
            "name": "소다라이트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLS-소다라이트 블루.webp"
          },
          {
            "id": "paint-add-0133",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLS-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0134",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLS-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0135",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/GLS-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "마이바흐 S클래스",
        "detailModels": [
          {
            "name": "S 580 4MATIC",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "S 680 4MATIC",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0136",
            "name": "MANUFAKTUR 그라파이트 그레이",
            "hex": "#535959",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 그라파이트 그레이.webp"
          },
          {
            "id": "paint-add-0137",
            "name": "MANUFAKTUR 나이트 블랙 마그노",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 나이트 블랙 마그노.webp"
          },
          {
            "id": "paint-add-0138",
            "name": "MANUFAKTUR 미스틱 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 미스틱 블루.webp"
          },
          {
            "id": "paint-add-0139",
            "name": "MANUFAKTUR 베르데 실버 마그노",
            "hex": "#415356",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 베르데 실버 마그노.webp"
          },
          {
            "id": "paint-add-0140",
            "name": "MANUFAKTUR 빈티지 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 빈티지 블루.webp"
          },
          {
            "id": "paint-add-0141",
            "name": "MANUFAKTUR 실리콘 그레이 솔리드",
            "hex": "#535A5A",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 실리콘 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0142",
            "name": "MANUFAKTUR 오팔라이트 화이트 마그노",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 오팔라이트 화이트 마그노.webp"
          },
          {
            "id": "paint-add-0143",
            "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
          },
          {
            "id": "paint-add-0144",
            "name": "MANUFAKTUR 올리브 메탈릭",
            "hex": "#4A573B",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 올리브 메탈릭.webp"
          },
          {
            "id": "paint-add-0145",
            "name": "MANUFAKTUR 칼라하리 골드 마그노",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 칼라하리 골드 마그노.webp"
          },
          {
            "id": "paint-add-0146",
            "name": "MANUFAKTUR 칼라하리 골드",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 칼라하리 골드.webp"
          },
          {
            "id": "paint-add-0147",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-add-0148",
            "name": "그라파이트 그레이",
            "hex": "#262A29",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-그라파이트 그레이.webp"
          },
          {
            "id": "paint-add-0149",
            "name": "노틱 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-노틱 블루.webp"
          },
          {
            "id": "paint-add-0150",
            "name": "베르데 실버",
            "hex": "#405658",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-베르데 실버.webp"
          },
          {
            "id": "paint-add-0151",
            "name": "벨벳 브라운",
            "hex": "#745646",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-벨벳 브라운.webp"
          },
          {
            "id": "paint-add-0152",
            "name": "블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-블랙.webp"
          },
          {
            "id": "paint-add-0153",
            "name": "에메랄드 그린",
            "hex": "#1D2929",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-에메랄드 그린.webp"
          },
          {
            "id": "paint-add-0154",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0155",
            "name": "웜 그레이",
            "hex": "#4A4846",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-웜 그레이.webp"
          },
          {
            "id": "paint-add-0156",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 S클래스-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "마이바흐 GLS클래스",
        "detailModels": [
          {
            "name": "GLS 600 4MATIC",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0157",
            "name": "MANUFAKTUR 실리콘 그레이 솔리드",
            "hex": "#616665",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-MANUFAKTUR 실리콘 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0158",
            "name": "MANUFAKTUR 알파인 그레이 솔리드",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-MANUFAKTUR 알파인 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0159",
            "name": "MANUFAKTUR 오팔라이트 화이트 브라이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-MANUFAKTUR 오팔라이트 화이트 브라이트.webp"
          },
          {
            "id": "paint-add-0160",
            "name": "MANUFAKTUR 코트다쥐르 라이트 블루",
            "hex": "#7C8A97",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-MANUFAKTUR 코트다쥐르 라이트 블루.webp"
          },
          {
            "id": "paint-add-0161",
            "name": "셀레나이트 그레이",
            "hex": "#737778",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-add-0162",
            "name": "소다라이트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-소다라이트 블루.webp"
          },
          {
            "id": "paint-add-0163",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0164",
            "name": "하이 테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 GLS-하이 테크 실버.webp"
          }
        ]
      },
      {
        "name": "마이바흐 SL 모노그램 시리즈",
        "detailModels": [
          {
            "name": "SL 680 Monogram Series",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0165",
            "name": "MANUFAKTUR 가넷 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 SL 모노그램-MANUFAKTUR 가넷 레드 메탈릭.webp"
          }
        ]
      },
      {
        "name": "마이바흐 EQS",
        "detailModels": [
          {
            "name": "EQS 680",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0166",
            "name": "MANUFAKTUR 알파일 그레이 솔리드",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-MANUFAKTUR 알파일 그레이 솔리드.webp"
          },
          {
            "id": "paint-add-0167",
            "name": "MANUFAKTUR 오팔라이트 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-MANUFAKTUR 오팔라이트 화이트.webp"
          },
          {
            "id": "paint-add-0168",
            "name": "MANUFAKTUR 파타고니아 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-MANUFAKTUR 파타고니아 레드.webp"
          },
          {
            "id": "paint-add-0169",
            "name": "마이바흐 투톤 페인트, 벨벳 브라운&오닉스 블랙",
            "hex": "#745646",
            "hex2": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-마이바흐 투톤 페인트, 벨벳 브라운&오닉스 블랙.webp"
          },
          {
            "id": "paint-add-0170",
            "name": "마이바흐 투톤 페인트, 옵시디안 블랙&MANUFAKTUR 칼라하리 골드",
            "hex": "#17191c",
            "hex2": "#9b8560",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-마이바흐 투톤 페인트, 옵시디안 블랙&MANUFAKTUR 칼라하리 골드.webp"
          },
          {
            "id": "paint-add-0171",
            "name": "마이바흐 투톤 페인트, 옵시디안 블랙&모하비 실버",
            "hex": "#17191c",
            "hex2": "#a9a7a6",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-마이바흐 투톤 페인트, 옵시디안 블랙&모하비 실버.webp"
          },
          {
            "id": "paint-add-0172",
            "name": "마이바흐 투톤 페인트, 옵시디안 블랙&설레나이트 그레이",
            "hex": "#17191c",
            "hex2": "#52585b",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-마이바흐 투톤 페인트, 옵시디안 블랙&설레나이트 그레이.webp"
          },
          {
            "id": "paint-add-0173",
            "name": "마이바흐 투톤 페인트, 하이테크 실버&노틱 블루",
            "hex": "#b9bec5",
            "hex2": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-마이바흐 투톤 페인트, 하이테크 실버&노틱 블루.webp"
          },
          {
            "id": "paint-add-0174",
            "name": "마이바흐 투톤 페인트, 하이테크 실버&옵시디안 블랙",
            "hex": "#b9bec5",
            "hex2": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-마이바흐 투톤 페인트, 하이테크 실버&옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0175",
            "name": "벨벳 브라운",
            "hex": "#745646",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-벨벳 브라운.webp"
          },
          {
            "id": "paint-add-0176",
            "name": "블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-블랙.webp"
          },
          {
            "id": "paint-add-0177",
            "name": "셀레나이트 그레이",
            "hex": "#52585B",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-셀레나이트 그레이.webp"
          },
          {
            "id": "paint-add-0178",
            "name": "소다라이트 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-소다라이트 블루.webp"
          },
          {
            "id": "paint-add-0179",
            "name": "옵시디안 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-옵시디안 블랙.webp"
          },
          {
            "id": "paint-add-0180",
            "name": "폴라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-폴라 화이트.webp"
          },
          {
            "id": "paint-add-0181",
            "name": "하이테크 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/벤츠/마이바흐 EQS-하이테크 실버.webp"
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
        "name": "A3",
        "detailModels": [
          {
            "name": "40 TFSI Quattro",
            "trims": [
              "Premium S Tronic"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0262",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0263",
            "name": "나바라 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-나바라 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0264",
            "name": "디스트릭트 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-디스트릭트 그린 메탈릭.webp"
          },
          {
            "id": "paint-add-0265",
            "name": "맨하탄 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-맨하탄 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0266",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0267",
            "name": "브릴리언트 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-브릴리언트 블랙.webp"
          },
          {
            "id": "paint-add-0268",
            "name": "아르코나 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-아르코나 화이트.webp"
          },
          {
            "id": "paint-add-0269",
            "name": "애로우 그레이 펄 이펙트",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-애로우 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-add-0270",
            "name": "프로그레시브 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/A3-프로그레시브 레드 메탈릭.webp"
          }
        ]
      },
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
        "name": "Q3",
        "detailModels": [
          {
            "name": "2.0 TFSI Quattro",
            "trims": [
              "S-Line"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0271",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0272",
            "name": "나바라 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-나바라 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0273",
            "name": "말펠로 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-말펠로 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0274",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0275",
            "name": "세이지 그린 메탈릭",
            "hex": "#6F898D",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-세이지 그린 메탈릭.webp"
          },
          {
            "id": "paint-add-0276",
            "name": "아르코나 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-아르코나 화이트.webp"
          },
          {
            "id": "paint-add-0277",
            "name": "애로우 그레이 펄 이펙트",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-애로우 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-add-0278",
            "name": "탐보라 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-탐보라 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0279",
            "name": "프로그레시브 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q3-프로그레시브 레드 메탈릭.webp"
          }
        ]
      },
      {
        "name": "Q4 e-tron",
        "detailModels": [
          {
            "name": "45",
            "trims": [
              "A/T",
              "Premium"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0280",
            "name": "가이저 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-가이저 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0281",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0282",
            "name": "나바라 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-나바라 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0283",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0284",
            "name": "오로라 바이올렛 메탈릭",
            "hex": "#6f6085",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-오로라 바이올렛 메탈릭.webp"
          },
          {
            "id": "paint-add-0285",
            "name": "타이푼 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-타이푼 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0286",
            "name": "페블 그레이",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-페블 그레이.webp"
          },
          {
            "id": "paint-add-0287",
            "name": "플로렛 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q4 e-tron-플로렛 실버 메탈릭.webp"
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
      },
      {
        "name": "Q6 e-tron",
        "detailModels": [
          {
            "name": "EV 100kWh Quattro",
            "trims": [
              "Premium"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0288",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q6 e-tron-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0289",
            "name": "데이토나 그레이 펄 이펙트",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q6 e-tron-데이토나 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-add-0290",
            "name": "마그넷 그레이",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q6 e-tron-마그넷 그레이.webp"
          },
          {
            "id": "paint-add-0291",
            "name": "맨하탄 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q6 e-tron-맨하탄 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0292",
            "name": "아스카리 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q6 e-tron-아스카리 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0293",
            "name": "플라즈마 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q6 e-tron-플라즈마 블루 메탈릭.webp"
          }
        ]
      },
      {
        "name": "Q7",
        "detailModels": [
          {
            "name": "50 TDI Quattro",
            "trims": [
              "A/T",
              "Premium"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0294",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0295",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0296",
            "name": "비쿠냐 베이지 메탈릭",
            "hex": "#b9aa8e",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-비쿠냐 베이지 메탈릭.webp"
          },
          {
            "id": "paint-add-0297",
            "name": "사무라이 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-사무라이 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0298",
            "name": "사키르 골드 메탈릭",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-사키르 골드 메탈릭.webp"
          },
          {
            "id": "paint-add-0299",
            "name": "새틀라이트 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-새틀라이트 실버 메탈릭.webp"
          },
          {
            "id": "paint-add-0300",
            "name": "웨이토모 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-웨이토모 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0301",
            "name": "카라라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-카라라 화이트.webp"
          },
          {
            "id": "paint-add-0302",
            "name": "타마린드 브라운 메탈릭",
            "hex": "#745646",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q7-타마린드 브라운 메탈릭.webp"
          }
        ]
      },
      {
        "name": "SQ7",
        "detailModels": [
          {
            "name": "4.0 TFSI Quattro",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0303",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0304",
            "name": "데이토나 그레이 펄 이펙트",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-데이토나 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-add-0305",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0306",
            "name": "사키르 골드 메탈릭",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-사키르 골드 메탈릭.webp"
          },
          {
            "id": "paint-add-0307",
            "name": "새틀라이트 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-새틀라이트 실버 메탈릭.webp"
          },
          {
            "id": "paint-add-0308",
            "name": "아스카리 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-아스카리 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0309",
            "name": "웨이토모 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-웨이토모 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0310",
            "name": "칠리 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-칠리 레드 메탈릭.webp"
          },
          {
            "id": "paint-add-0311",
            "name": "카라라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/SQ7-카라라 화이트.webp"
          }
        ]
      },
      {
        "name": "Q8",
        "detailModels": [
          {
            "name": "50 TDI Quattro",
            "trims": [
              "A/T",
              "Premium"
            ]
          },
          {
            "name": "55 TFSI Quattro",
            "trims": [
              "A/T",
              "Premium"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0312",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0313",
            "name": "데이토나 그레이 펄 이펙트",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-데이토나 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-add-0314",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0315",
            "name": "사키르 골드 메탈릭",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-사키르 골드 메탈릭.webp"
          },
          {
            "id": "paint-add-0316",
            "name": "새틀라이트 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-새틀라이트 실버 메탈릭.webp"
          },
          {
            "id": "paint-add-0317",
            "name": "아스카리 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-아스카리 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0318",
            "name": "웨이토모 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-웨이토모 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0319",
            "name": "칠리 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-칠리 레드 메탈릭.webp"
          },
          {
            "id": "paint-add-0320",
            "name": "카라라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/Q8-카라라 화이트.webp"
          }
        ]
      },
      {
        "name": "RS Q8",
        "detailModels": [
          {
            "name": "4.0 TFSI Quattro",
            "trims": [
              "Performance"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0321",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-add-0322",
            "name": "데이토나 그레이 펄 이펙트",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-데이토나 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-add-0323",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0324",
            "name": "사키르 골드 메탈릭",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-사키르 골드 메탈릭.webp"
          },
          {
            "id": "paint-add-0325",
            "name": "새틀라이트 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-새틀라이트 실버 메탈릭.webp"
          },
          {
            "id": "paint-add-0326",
            "name": "아스카리 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-아스카리 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0327",
            "name": "웨이토모 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-웨이토모 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0328",
            "name": "칠리 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-칠리 레드 메탈릭.webp"
          },
          {
            "id": "paint-add-0329",
            "name": "카라라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/RS Q8 performance-카라라 화이트.webp"
          }
        ]
      },
      {
        "name": "e-tron",
        "detailModels": [
          {
            "name": "50 Quattro",
            "trims": [
              "A/T"
            ]
          },
          {
            "name": "55 Quattro",
            "trims": [
              "A/T"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0330",
            "name": "데이토나 그레이 펄 이펙트",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/S e-tron GT-데이토나 그레이 펄 이펙트.webp"
          },
          {
            "id": "paint-add-0331",
            "name": "미토스 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/S e-tron GT-미토스 블랙 메탈릭.webp"
          },
          {
            "id": "paint-add-0332",
            "name": "아스카리 블루 메탈릭",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/S e-tron GT-아스카리 블루 메탈릭.webp"
          },
          {
            "id": "paint-add-0333",
            "name": "카라라 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/S e-tron GT-카라라 화이트.webp"
          },
          {
            "id": "paint-add-0334",
            "name": "케모라 그레이 메탈릭",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/S e-tron GT-케모라 그레이 메탈릭.webp"
          },
          {
            "id": "paint-add-0335",
            "name": "프로그레시브 레드 메탈릭",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/S e-tron GT-프로그레시브 레드 메탈릭.webp"
          },
          {
            "id": "paint-add-0336",
            "name": "플로렛 실버 메탈릭",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/아우디/S e-tron GT-플로렛 실버 메탈릭.webp"
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
        "name": "XC40 하이브리드",
        "detailModels": [
          {
            "name": "B4 AWD",
            "trims": [
              "Plus Bright",
              "Ultra Bright",
              "Ultra Dark"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0355",
            "name": "데님 블루",
            "hex": "#6A7176",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC40-데님 블루.webp"
          },
          {
            "id": "paint-add-0357",
            "name": "오닉스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC40-오닉스 블랙.webp"
          },
          {
            "id": "paint-add-0358",
            "name": "오로라 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC40-오로라 실버.webp"
          },
          {
            "id": "paint-add-0359",
            "name": "크리스탈 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC40-크리스탈 화이트.webp"
          },
          {
            "id": "paint-add-0360",
            "name": "클라우드 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC40-클라우드 블루.webp"
          }
        ]
      },
      {
        "name": "XC60 하이브리드",
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
            "hex": "#6A7176",
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
            "hex": "#666F6F",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/XC60-포레스트 레이크.webp"
          }
        ]
      },
      {
        "name": "XC90 하이브리드",
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
            "hex": "#D3D1D0",
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
      },
      {
        "name": "S90",
        "detailModels": [
          {
            "name": "B5",
            "trims": [
              "Plus Bright",
              "Ultra Bright",
              "Ultra Dark"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0337",
            "name": "데님 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/S90-데님 블루.webp"
          },
          {
            "id": "paint-add-0338",
            "name": "멀베리 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/S90-멀베리 레드.webp"
          },
          {
            "id": "paint-add-0339",
            "name": "베이퍼 그레이",
            "hex": "#A9A7A6",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/S90-베이퍼 그레이.webp"
          },
          {
            "id": "paint-add-0340",
            "name": "브라이트 더스크",
            "hex": "#D3D1D0",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/S90-브라이트 더스크.webp"
          },
          {
            "id": "paint-add-0341",
            "name": "오닉스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/S90-오닉스 블랙.webp"
          },
          {
            "id": "paint-add-0342",
            "name": "크리스탈 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/S90-크리스탈 화이트.webp"
          }
        ]
      },
      {
        "name": "EX30",
        "detailModels": [
          {
            "name": "Single Motor Extended Range",
            "trims": [
              "Core",
              "Ultra"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0343",
            "name": "베이퍼 그레이",
            "hex": "#929697",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX30-베이퍼 그레이.webp"
          },
          {
            "id": "paint-add-0344",
            "name": "오닉스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX30-오닉스 블랙.webp"
          },
          {
            "id": "paint-add-0345",
            "name": "크리스탈 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX30-크리스탈 화이트.webp"
          },
          {
            "id": "paint-add-0346",
            "name": "클라우드 블루",
            "hex": "#C9CFD6",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX30-클라우드 블루.webp"
          }
        ]
      },
      {
        "name": "EX90",
        "detailModels": [
          {
            "name": "Twin Motor",
            "trims": [
              "Plus (7-Seat)",
              "Ultra (6-Seat)",
              "Ultra (7-Seat)"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-add-0347",
            "name": "데님 블루",
            "hex": "#747A7F",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-데님 블루.webp"
          },
          {
            "id": "paint-add-0348",
            "name": "멀베리 레드",
            "hex": "#9b3038",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-멀베리 레드.webp"
          },
          {
            "id": "paint-add-0349",
            "name": "베이퍼 그레이",
            "hex": "#929697",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-베이퍼 그레이.webp"
          },
          {
            "id": "paint-add-0350",
            "name": "샌드 듄",
            "hex": "#ACA59B",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-샌드 듄.webp"
          },
          {
            "id": "paint-add-0351",
            "name": "오닉스 블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-오닉스 블랙.webp"
          },
          {
            "id": "paint-add-0352",
            "name": "오로라 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-오로라 실버.webp"
          },
          {
            "id": "paint-add-0353",
            "name": "크리스탈 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-크리스탈 화이트.webp"
          },
          {
            "id": "paint-add-0354",
            "name": "포레스트 레이크",
            "hex": "#949B9B",
            "border": "#cfd5dc",
            "image": "images/vehicles/볼보/EX90-포레스트 레이크.webp"
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
            "hex": "#5B5A5F",
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
            "hex": "#494954",
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
            "hex": "#494954",
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
  },
  {
    "name": "랜드로버",
    "short": "LAND ROVER",
    "market": "import",
    "ownBackground": false,
    "cars": [
      {
        "name": "더 뉴 레인지로버",
        "detailModels": [
          {
            "name": "P530",
            "trims": [
              "Autobiography"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-lr-01-01",
            "name": "UNV 콘스텔레이션 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-UNV 콘스텔레이션 블루.webp"
          },
          {
            "id": "paint-lr-01-02",
            "name": "UNV 플럭스 실버",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-UNV 플럭스 실버.webp"
          },
          {
            "id": "paint-lr-01-03",
            "name": "바레신 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-바레신 블루.webp"
          },
          {
            "id": "paint-lr-01-04",
            "name": "바투미 골드",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-바투미 골드.webp"
          },
          {
            "id": "paint-lr-01-05",
            "name": "벨그라비아 그린",
            "hex": "#42634f",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-벨그라비아 그린.webp"
          },
          {
            "id": "paint-lr-01-06",
            "name": "벨로시티 블루 글로스 피니시",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-벨로시티 블루 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-07",
            "name": "벨로시티 블루 새틴 피니시",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-벨로시티 블루 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-08",
            "name": "브리티시 레이싱 그린 새틴 피니시",
            "hex": "#42634f",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-브리티시 레이싱 그린 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-09",
            "name": "브리티시 레이싱 그린",
            "hex": "#42634f",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-브리티시 레이싱 그린.webp"
          },
          {
            "id": "paint-lr-01-10",
            "name": "산토리니 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-산토리니 블랙.webp"
          },
          {
            "id": "paint-lr-01-11",
            "name": "샤랑트 그레이",
            "hex": "#403E3D",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-샤랑트 그레이.webp"
          },
          {
            "id": "paint-lr-01-12",
            "name": "선셋 골드 글로스 피니시",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-선셋 골드 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-13",
            "name": "선셋 골드 새틴 피니시",
            "hex": "#a98650",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-선셋 골드 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-14",
            "name": "아이거 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-아이거 그레이.webp"
          },
          {
            "id": "paint-lr-01-15",
            "name": "아이시 화이트 글로스 피니시",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-아이시 화이트 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-16",
            "name": "아이시 화이트 새틴 피니시",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-아이시 화이트 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-17",
            "name": "애미시스트 그레이 퍼플 글로스 피니시",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-애미시스트 그레이 퍼플 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-18",
            "name": "에테리얼 프로스트 실버 글로스 피니시",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-에테리얼 프로스트 실버 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-19",
            "name": "에테리얼 프로스트 실버 새틴 피니시",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-에테리얼 프로스트 실버 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-20",
            "name": "오스투니 펄 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-오스투니 펄 화이트.webp"
          },
          {
            "id": "paint-lr-01-21",
            "name": "옵시디언 블랙 글로스 피니시",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-옵시디언 블랙 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-22",
            "name": "옵시디언 블랙 새틴 피니시",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-옵시디언 블랙 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-23",
            "name": "이오니안 실버 글로스 피니시",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-이오니안 실버 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-24",
            "name": "이오니안 실버 새틴 피니시",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-이오니안 실버 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-25",
            "name": "카르파티안 그레이",
            "hex": "#3D3D3D",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-카르파티안 그레이.webp"
          },
          {
            "id": "paint-lr-01-26",
            "name": "토르말린 브라운 글로스 피니시",
            "hex": "#725246",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-토르말린 브라운 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-27",
            "name": "토르말린 브라운 새틴 피니시",
            "hex": "#725246",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-토르말린 브라운 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-28",
            "name": "페트롤릭스 블루 글로스 피니시",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-페트롤릭스 블루 글로스 피니시.webp"
          },
          {
            "id": "paint-lr-01-29",
            "name": "플럭스 실버 새틴 피니시",
            "hex": "#b9bec5",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-플럭스 실버 새틴 피니시.webp"
          },
          {
            "id": "paint-lr-01-30",
            "name": "후지 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/더 뉴 레인지로버-후지 화이트.webp"
          }
        ]
      },
      {
        "name": "디펜더 90",
        "detailModels": [
          {
            "name": "D250",
            "trims": [
              "XS Edition"
            ]
          },
          {
            "name": "P400",
            "trims": [
              "X"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-lr-04-01",
            "name": "곤드와나 스톤",
            "hex": "#9a968b",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 90-곤드와나 스톤.webp"
          },
          {
            "id": "paint-lr-04-02",
            "name": "보라스코 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 90-보라스코 그레이.webp"
          },
          {
            "id": "paint-lr-04-03",
            "name": "산토리니 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 90-산토리니 블랙.webp"
          },
          {
            "id": "paint-lr-04-04",
            "name": "울스톤 그린",
            "hex": "#42634f",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 90-울스톤 그린.webp"
          },
          {
            "id": "paint-lr-04-05",
            "name": "태즈먼 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 90-태즈먼 블루.webp"
          },
          {
            "id": "paint-lr-04-06",
            "name": "후지 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 90-후지 화이트.webp"
          }
        ]
      },
      {
        "name": "디펜더 110",
        "detailModels": [
          {
            "name": "D250",
            "trims": [
              "X-Dynamic SE"
            ]
          },
          {
            "name": "D300",
            "trims": [
              "X-Dynamic HSE"
            ]
          },
          {
            "name": "P300",
            "trims": [
              "X-Dynamic SE"
            ]
          },
          {
            "name": "P400",
            "trims": [
              "Trophy Edition",
              "X"
            ]
          },
          {
            "name": "P635",
            "trims": [
              "OCTA",
              "OCTA Black"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-lr-02-01",
            "name": "곤드와나 스톤",
            "hex": "#9a968b",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 110-곤드와나 스톤.webp"
          },
          {
            "id": "paint-lr-02-02",
            "name": "보라스코 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 110-보라스코 그레이.webp"
          },
          {
            "id": "paint-lr-02-03",
            "name": "산토리니 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 110-산토리니 블랙.webp"
          },
          {
            "id": "paint-lr-02-04",
            "name": "울스톤 그린",
            "hex": "#42634f",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 110-울스톤 그린.webp"
          },
          {
            "id": "paint-lr-02-05",
            "name": "태즈먼 블루",
            "hex": "#315d88",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 110-태즈먼 블루.webp"
          },
          {
            "id": "paint-lr-02-06",
            "name": "후지 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 110-후지 화이트.webp"
          }
        ]
      },
      {
        "name": "디펜더 130",
        "detailModels": [
          {
            "name": "P400 MHEV",
            "trims": [
              "Outbound",
              "X-Dynamic HSE",
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-lr-03-01",
            "name": "곤드와나 스톤",
            "hex": "#9a968b",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 130-곤드와나 스톤.webp"
          },
          {
            "id": "paint-lr-03-02",
            "name": "보라스코 그레이",
            "hex": "#7e858d",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 130-보라스코 그레이.webp"
          },
          {
            "id": "paint-lr-03-03",
            "name": "산토리니 블랙",
            "hex": "#17191c",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 130-산토리니 블랙.webp"
          },
          {
            "id": "paint-lr-03-04",
            "name": "세도나 레드",
            "hex": "#a92b31",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 130-세도나 레드.webp"
          },
          {
            "id": "paint-lr-03-05",
            "name": "울스톤 그린",
            "hex": "#42634f",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 130-울스톤 그린.webp"
          },
          {
            "id": "paint-lr-03-06",
            "name": "후지 화이트",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/랜드로버/디펜더 130-후지 화이트.webp"
          }
        ]
      }
      
    ]
  },
  {
    "name": "폭스바겐",
    "short": "VOLKSWAGEN",
    "market": "import",
    "ownBackground": false,
    "cars": [
      {
        "name": "ID.4",
        "detailModels": [
          {
            "name": "EV 82kWh",
            "trims": [
              "Pro Lite",
              "Pro"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-vw-01-01",
            "name": "그레나딜라 블랙 메탈릭&블랙",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.4-그레나딜라 블랙 메탈릭&블랙.webp"
          },
          {
            "id": "paint-vw-01-02",
            "name": "글레이셔 화이트 메탈릭&블랙",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.4-글레이셔 화이트 메탈릭&블랙.webp"
          },
          {
            "id": "paint-vw-01-03",
            "name": "문스톤 그레이&블랙",
            "hex": "#64686D",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.4-문스톤 그레이&블랙.webp"
          },
          {
            "id": "paint-vw-01-04",
            "name": "블루 더스크 메탈릭&블랙",
            "hex": "#25336F",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.4-블루 더스크 메탈릭&블랙.webp"
          }
        ]
      },
      {
        "name": "ID.5",
        "detailModels": [
          {
            "name": "EV 82.8kWh",
            "trims": [
              "Pro Lite",
              "Pro"
            ]
          }
        ],
        "paints": [
          {
            "id": "paint-vw-02-01",
            "name": "그레나딜라 블랙 메탈릭",
            "hex": "#222222",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.5-그레나딜라 블랙 메탈릭.webp"
          },
          {
            "id": "paint-vw-02-02",
            "name": "글레이셔 화이트 메탈릭",
            "hex": "#f3f2ed",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.5-글레이셔 화이트 메탈릭.webp"
          },
          {
            "id": "paint-vw-02-03",
            "name": "문스톤 그레이",
            "hex": "#7D8186",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.5-문스톤 그레이.webp"
          },
          {
            "id": "paint-vw-02-04",
            "name": "블루 더스크 메탈릭",
            "hex": "#1C2B68",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.5-블루 더스크 메탈릭.webp"
          },
          {
            "id": "paint-vw-02-05",
            "name": "킹스 레드 메탈릭",
            "hex": "#9b2327",
            "border": "#cfd5dc",
            "image": "images/vehicles/폭스바겐/ID.5-킹스 레드 메탈릭.webp"
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

  /* =========================================================
    방문 유입 로그 전송
  ========================================================= */

  function getReferrerDomain(referrer) {
    if (!referrer) {
      return "직접 접속";
    }

    try {
      return new URL(referrer).hostname.replace(/^www\./, "");
    } catch (error) {
      return "외부 유입";
    }
  }

  function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();

    const isTablet =
      /ipad|tablet|playbook|silk/.test(userAgent) ||
      (/android/.test(userAgent) && !/mobile/.test(userAgent));

    if (isTablet) {
      return "태블릿";
    }

    if (/android|iphone|ipod|windows phone|mobile/.test(userAgent)) {
      return "모바일";
    }

    return "PC";
  }

  function getBrowserName() {
    const userAgent = navigator.userAgent;

    if (/Whale\//i.test(userAgent)) return "Whale";
    if (/Edg\//i.test(userAgent)) return "Edge";
    if (/SamsungBrowser\//i.test(userAgent)) return "Samsung Internet";
    if (/OPR\//i.test(userAgent)) return "Opera";
    if (/Firefox\//i.test(userAgent)) return "Firefox";
    if (/Chrome\//i.test(userAgent)) return "Chrome";
    if (/Safari\//i.test(userAgent)) return "Safari";

    return "기타";
  }

  async function getPublicIpAddress() {
    const ipServices = [
      {
        url: "https://api.ipify.org?format=json",
        getIp: data => data.ip
      },
      {
        url: "https://api64.ipify.org?format=json",
        getIp: data => data.ip
      },
      {
        url: "https://icanhazip.com/",
        getIp: data => data
      }
    ];

    for (const service of ipServices) {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => {
        controller.abort();
      }, 3500);

      try {
        const response = await fetch(service.url, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        let responseData;

        if (service.url.includes("icanhazip.com")) {
          responseData = await response.text();
        } else {
          responseData = await response.json();
        }

        const ipAddress = String(
          service.getIp(responseData) || ""
        ).trim();

        if (ipAddress) {
          return ipAddress;
        }
      } catch (error) {
        console.warn(
          `IP 조회 실패: ${service.url}`,
          error
        );
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    return "조회 실패";
  }

  async function sendVisitLog() {
    const sessionKey = "autogenie_import_visit_logged";

    try {
      if (sessionStorage.getItem(sessionKey) === "true") {
        return;
      }
    } catch (error) {
      console.warn("방문 로그 저장 여부를 읽지 못했습니다.", error);
    }

    const referrer = document.referrer || "";
    const ipAddress = await getPublicIpAddress();

    const body = new URLSearchParams({
      requestType: "page_visit",
      visitedAt: new Date().toISOString(),
      customerName: "",
      ipAddress: ipAddress,
      referrerDomain: getReferrerDomain(referrer),
      referrerUrl: referrer || "직접 접속",
      visitorId: getAutojiniVisitorId(),
      deviceType: getDeviceType(),
      browserName: getBrowserName()
    });

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: body.toString(),
        keepalive: true
      });

      try {
        sessionStorage.setItem(sessionKey, "true");
      } catch (error) {
        console.warn("방문 로그 저장 여부를 기록하지 못했습니다.", error);
      }
    } catch (error) {
      console.error("방문 로그 전송 실패:", error);
    }
  }

  window.addEventListener("load", sendVisitLog, {
    once: true
  });

  const trims = ["전체 모델", "2.5 가솔린", "3.5 가솔린", "3.5 가솔린 AWD"];
  const rateOptions = ["10%", "20%", "30%", "40%"];
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
      "테슬라": "./images/logo/bk_uniform/tesla.svg",
      "랜드로버": "./images/logo/bk_uniform/landrover.svg",
      "폭스바겐": "./images/logo/bk_uniform/volkswagen.svg"
    
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
      "코나 일렉트릭", "포터2 일렉트릭", "일렉트리파이드 G80", "GV60",
      "일렉트리파이드 GV70", "EV3", "EV4", "EV5",
      "EV6", "EV9", "PV5 카고", "니로 EV",
      "레이 EV", "무쏘 EV", "토레스 EVX", "모델3",
      "모델Y", "모델Y L", "ID.4", "ID.5",
      "EQA", "EQB", "EQE", "EQS",
      "i4", "i5", "i7", "ix1",
      "ix2", "ix3", "IX", "Q4 e-tron",
      "Q6 e-tron", "e-tron", "EX30", "EX90"
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
  return Boolean(paint?.hex2);
}

function paintSwatchStyle(paint) {
  const border = paint?.border || "#cfd5dc";

  if (paint?.hex2) {
    return `background-color:${paint.hex};background-image:linear-gradient(90deg, ${paint.hex} 0%, ${paint.hex} 50%, ${paint.hex2} 50%, ${paint.hex2} 100%) !important;border-color:${border};`;
  }

  return `background:${paint.hex};border-color:${border};`;
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
          <legend><b>1</b> 브랜드 선택</legend>
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
          <legend><b>2</b> 차량 선택</legend>
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
          <legend><b>1</b> 세부모델 선택</legend>

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
            <div class="discount-rate"><dt>${currentMonth}월 할인율</dt><dd>최대 20%</dd></div>
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
              <div class="discount-rate"><dt>${currentMonth}월 할인율</dt><dd>최대 20%</dd></div>
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

        // 2단계에서는 세부모델을 선택해도 다음 항목으로 내려가지 않고
        // 항상 "1. 세부모델" 영역을 화면 상단 기준으로 유지합니다.
        scrollToNextSelection('[data-option-section="engine-model"]', "start");
      });
    });

    content.querySelectorAll("[data-sub-trim]").forEach(button => {
      button.addEventListener("click", () => {
        state.subTrim = button.dataset.subTrim;
        render();

        // 하위 트림 선택 시에도 하단 버튼으로 자동 이동하지 않습니다.
        scrollToNextSelection('[data-option-section="engine-model"]', "start");
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
      contactMethod: state.contactMethod
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

      // 방문로그와 같은 방문자 ID로 고객이름을 연결합니다.
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
