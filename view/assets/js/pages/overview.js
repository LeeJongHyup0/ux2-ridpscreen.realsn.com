{
  /**
   *
   *  depth : 상황판 > 첫 번째 슬라이드
   *  event : new Notys
   *  Note  : 5초 동안 화면 하단 중안에 안내 메세지 노출
   *
   */

  const notys = new window.Notys();
  const timer = setTimeout(
    () =>
      notys.success(`키보드 "F11"를 누르고 전체화면 모드로 사용해주세요`, "center bottom", {
        delay: 5000, //기본값 : 3000 (3초)
        on: {
          start: () => {
            notys.$append.style.display = "inline-block";
            notys.$append.style.width = "auto";
          },
        },
      }),
    3000
  );
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판
   *  event : new Swiper
   *  Note  : 해당 script는 무조건 마지막에 실행되어야 합니다.
   *
   */
  window.addEventListener("load", () => {
    let activeClasses = new Array();
    let beforeClasses = new Array();

    // transition
    const transitionArticle = (_$articles) => {
      _$articles.forEach((_$article, _idx) => {
        const transitionElement = new window.TransitionElement(_$article);

        transitionElement.isStartDelay = _idx * 400; // 각 article의 시간차 transition 활성화
        transitionElement.isEventListenerAdded = true;
        transitionElement.init();
        activeClasses.push(transitionElement);
      });
    };

    // swiper active index 정보를 URL 파라미터 전송
    const updateSwiperParams = (_activeIndex) => {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("slideActiveIndex", _activeIndex);
      const newUrl = window.location.pathname + "?" + urlParams.toString();
      window.history.pushState({ path: newUrl }, "", newUrl);
    };

    // URL 파라미터 체크 후 해당 slide active 상태로 변경
    const updateSwiperSettings = (_swiper, _activeIndex) => {
      const urlParams = new URLSearchParams(window.location.search);
      const autoplay = urlParams.get("autoplay");
      const slideActiveIndex = urlParams.get("slideActiveIndex");

      if (slideActiveIndex !== _activeIndex && slideActiveIndex !== null) {
        _swiper.slideTo(Number(slideActiveIndex), 0, true);
      }

      if (autoplay === "stop" || autoplay === "false") {
        _swiper.autoplay.stop();
      }
    };

    // swiper
    const $swiper = document.querySelector(".swiper");
    const swiper = new Swiper($swiper, {
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      // loop: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["100%", 0, 0],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      speed: 800,
      ease: "cubic-bezier(1,.28,0,1.3)",
      allowTouchMove: HOST.localhost ? true : false, // 마우스 drag 막기
      keyboard: {
        enabled: true, // 키보드 슬라이드 전환 활성화
        onlyInViewport: true, // 뷰포트 내에서만 키보드 동작 활성화
      },
      on: {
        init() {
          // new TransitionElement
          const $articles = this.slides[this.activeIndex].querySelectorAll(".l-article--bg-gradient");
          transitionArticle($articles);
          updateSwiperSettings(this, this.activeIndex);
          updateSwiperParams(this.activeIndex);
        },
        slideChangeTransitionStart: function () {
          // console.log(this.activeIndex);
        },
        slideChangeTransitionEnd: function () {
          // class(= transitionElement) 내부 setTimeout 초기화
          beforeClasses.forEach((_slide) => {
            clearTimeout(_slide.timer1);
            clearTimeout(_slide.timer2);
          });

          // class 백업 및 초기화
          beforeClasses = activeClasses;
          activeClasses = new Array();

          // new TransitionElement
          const $articles = this.slides[this.activeIndex].querySelectorAll(".l-article--bg-gradient");
          transitionArticle($articles);
          updateSwiperParams(this.activeIndex);

          // 숨겨진 slide의 article 요소 classList 초기화
          const beforeIdx = Array.from(this.slides).findIndex((_slide) => !_slide.classList.contains("swiper-slide-active"));
          const $beforeArticles = this.slides[beforeIdx].querySelectorAll(".l-article--bg-gradient");

          $beforeArticles.forEach((_$article) => {
            _$article.classList.remove("is-start");
            _$article.classList.remove("is-complete");
            _$article.classList.add("is-ready");
          });
        },
      },
    });
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
