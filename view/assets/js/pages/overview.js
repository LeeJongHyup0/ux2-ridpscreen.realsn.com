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
   *  depth : 상황판 > 첫 번째 슬라이드
   *  block : 전체 정보량
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(`[data-article="전체정보량"]`);
  const $number = $article.querySelector(".number");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const dataWatcher = new window.DataWatcher();

  // 애니메이션 효과를 적용
  const animateTargetNumber = (_data) => {
    $($number)
      .stop()
      .animateNumber({
        addComma: true,
        totalPlayTime: 600,
        endNumber: typeof _data === "number" ? _data : _data.replace(/[^0-9]/g, ""),
        endValue: _data,
      });
  };

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    if ($article.classList.contains("is-complete")) animateTargetNumber(dataWatcher.data);
    else observerClassIsStart.addCallback(() => animateTargetNumber(dataWatcher.data));
  });

  // 초기값
  dataWatcher.data = 6023;
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판 > 첫 번째 슬라이드
   *  block : 호감도
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(`[data-article="호감도SNPS"]`);
  const $arrow = $article.querySelector(".c-chart-gauge__arrow");
  const $number = $article.querySelector(".c-chart-gauge__num");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
  const dataWatcher = new window.DataWatcher();

  // 문자열 음수/양수 확인
  const checkSign = (_numberString) => {
    const number = parseInt(_numberString, 10);

    if (number < 0) return "negative";
    else if (number > 0) return "positive";
    else return "zero";
  };

  // -100%에서 100%의 값을 0도에서 180도로 변환
  const percentToDegrees = (_percent) => {
    const minPercent = -100;
    const maxPercent = 100;
    const minDegrees = -90;
    const maxDegrees = 90;
    const degrees = ((_percent - minPercent) / (maxPercent - minPercent)) * (maxDegrees - minDegrees) + minDegrees;
    return degrees;
  };

  // 애니메이션 효과를 적용
  const animateTargetNumber = (_data) => {
    checkSign(_data) === "negative" ? $number.classList.add("is-negative") : $number.classList.remove("is-negative");
    $arrow.style.transition = "";

    $($number)
      .stop()
      .animateNumber({
        addComma: false,
        totalPlayTime: 600,
        endNumber: _data.replace(/[^0-9]/g, ""),
        endValue: _data.replace(/-/g, ""),
        callback: () => {
          $arrow.style.transform = `rotate(${percentToDegrees(_data)}deg)`;
        },
      });
  };

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    if ($article.classList.contains("is-complete")) animateTargetNumber(dataWatcher.data);
    else {
      observerClassIsStart.addCallback(() => animateTargetNumber(dataWatcher.data));
      observerClassIsComplete.removeCallback(() => {
        $arrow.style.transform = "rotate(0deg)";
        $arrow.style.transition = "none";
      });
    }
  });

  // 초기값
  dataWatcher.data = "-30"; //문자열로 -100 ~ 100 사이값
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판 > 첫 번째 슬라이드
   *  block : Top5
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(`[data-article="Top5채널"]`);
  const $bars = $article.querySelectorAll(".c-chart-bar__bar");
  const $cnts = $article.querySelectorAll(".cnt");
  const dataWatcher = new window.DataWatcher();
  const animationDuration = 600;

  // 애니메이션 효과를 적용
  const animateTargetNumber = (_$bar, _idx, _data) => {
    $cnts[_idx].style.transition = "";
    _$bar.style.width = 0;
    _$bar.style.transition = "none";

    $($cnts[_idx])
      .stop()
      .animateNumber({
        addComma: false,
        totalPlayTime: animationDuration,
        endNumber: _data,
        endValue: _data,
        callback: () => {
          _$bar.style.width = `${_data}%`;
          _$bar.style.transition = "";
          _$bar.style.transitionDelay = `${_idx * 0.05}s`;
        },
      });
  };

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    // $bars.forEach((_$bar, _idx) => {
    //   setTimeout(() => {
    //     animateTargetNumber(_$bar, _idx, dataWatcher.data[_idx]);
    //   }, animationDuration + 500); // animationDuration + 500ms 뒤에 애니메이션 실행
    // });

    $bars.forEach((_$bar, _idx) => {
      const ObserverClassIsStart = new window.ObserverClass($article, "is-start");
      ObserverClassIsStart.addCallback(() => animateTargetNumber(_$bar, _idx, dataWatcher.data[_idx]));

      const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
      observerClassIsComplete.removeCallback(() => {
        _$bar.style.width = 0;
        _$bar.style.transform = "none";
        $cnts[_idx].innerText = 0;
      });
    });
  });

  // 초기값
  dataWatcher.data = [90, 65.3, 44, 32.1, 20];
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview1 [data-article=Top100연관어]");
  const $chart = $article.querySelector(".js-chart");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");

  // AMchart
  am5.ready(function () {
    var root = am5.Root.new($chart);

    // Set themes
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Add series
    var series = root.container.children.push(
      am5wc.WordCloud.new(root, {
        categoryField: "name",
        valueField: "value",
        minFontSize: am5.percent(4),
        maxFontSize: am5.percent(15),
      })
    );

    // Configure labels
    series.labels.template.setAll({
      templateField: "labelSettings",
    });

    // Data from
    observerClassIsStart.addCallback(() => {
      series.data.setAll([
        { name: "시스템", labelSettings: { fill: am5.color(0xea704a) }, value: 1100, fluc: 38.7 },
        { name: "현재", labelSettings: { fill: am5.color(0xea704a) }, value: 536, fluc: 38.7 },
        { name: "정보", labelSettings: { fill: am5.color(0xea704a) }, value: 368, fluc: 38 },
        { name: "쉽다", labelSettings: { fill: am5.color(0xea704a) }, value: 363, fluc: 38 },
        { name: "가격", labelSettings: { fill: am5.color(0xea704a) }, value: 358, fluc: 38.7 },
        { name: "어렵다", labelSettings: { fill: am5.color(0xea704a) }, value: 312, fluc: 38.7 },
        { name: "개발", labelSettings: { fill: am5.color(0xea704a) }, value: 271, fluc: 38.7 },
        { name: "사용문의", labelSettings: { fill: am5.color(0xffffff) }, value: 255, fluc: 38.7 },
        { name: "지역", labelSettings: { fill: am5.color(0xffffff) }, value: 235, fluc: -40.1 },
        { name: "평가", labelSettings: { fill: am5.color(0xffffff) }, value: 267, fluc: -40.1 },
        { name: "단품", labelSettings: { fill: am5.color(0xffffff) }, value: 1100, fluc: 38.7 },
        { name: "높다", labelSettings: { fill: am5.color(0xffffff) }, value: 536, fluc: 38.7 },
        { name: "인프라", labelSettings: { fill: am5.color(0x666666) }, value: 333, fluc: 38.7 },
        { name: "스마트하다", labelSettings: { fill: am5.color(0x666666) }, value: 222, fluc: 38.7 },
        { name: "설비", labelSettings: { fill: am5.color(0x666666) }, value: 111, fluc: 38.7 },
        { name: "에너지 절감", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
        { name: "차량", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
        { name: "솔루션", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
        { name: "미국", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
        { name: "효과적인", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
        { name: "통합", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
        { name: "낮다", labelSettings: { fill: am5.color(0xffffff) }, value: 235, fluc: -40.1 },
        { name: "기타", labelSettings: { fill: am5.color(0xea704a) }, value: 267, fluc: -40.1 },
        { name: "연비", labelSettings: { fill: am5.color(0xffffff) }, value: 1100, fluc: 38.7 },
        { name: "태양광", labelSettings: { fill: am5.color(0xffffff) }, value: 536, fluc: 38.7 },
        { name: "운영", labelSettings: { fill: am5.color(0x666666) }, value: 333, fluc: 38.7 },
        { name: "자연친화", labelSettings: { fill: am5.color(0x666666) }, value: 222, fluc: 38.7 },
        { name: "최적화", labelSettings: { fill: am5.color(0xea704a) }, value: 111, fluc: 38.7 },
        { name: "원자력 발전", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
      ]);
    });

    observerClassIsComplete.removeCallback(() => {
      series.data.setAll([]);
    });
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview1 [data-article=성별]");
  const $chart = $article.querySelector(".js-chart");
  const didpPictogramChart = new rsnCharts.DidpPictogramChart($chart);
  didpPictogramChart.reDataBinding([{ man: { percents: "27.1%" } }, { woman: { percents: "72.9%" } }]);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=성별]");
  const $chart = $article.querySelector(".js-chart");

  // 남성일 때 색상 - #4C86DD
  // 여성일 때 색상 - #C64583
  let datas = [
    { name: "시스템", fill: "#4C86DD", value: 1100, fluc: 38.7 },
    { name: "현재", fill: "#4C86DD", value: 536, fluc: 38.7 },
    { name: "정보", fill: "#4C86DD", value: 368, fluc: 38 },
    { name: "쉽다", fill: "#4C86DD", value: 363, fluc: 38 },
    { name: "가격", fill: "#4C86DD", value: 358, fluc: 38.7 },
    { name: "어렵다", fill: "#4C86DD", value: 312, fluc: 38.7 },
    { name: "개발", fill: "#4C86DD", value: 271, fluc: 38.7 },
    { name: "사용문의", fill: "#ffffff", value: 255, fluc: 38.7 },
    { name: "지역", fill: "#ffffff", value: 235, fluc: -40.1 },
    { name: "평가", fill: "#ffffff", value: 267, fluc: -40.1 },
    { name: "단품", fill: "#ffffff", value: 1100, fluc: 38.7 },
    { name: "높다", fill: "#ffffff", value: 536, fluc: 38.7 },
    { name: "인프라", fill: "#666666", value: 333, fluc: 38.7 },
    { name: "스마트하다", fill: "#666666", value: 222, fluc: 38.7 },
    { name: "설비", fill: "#666666", value: 111, fluc: 38.7 },
    { name: "에너지 절감", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "차량", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "솔루션", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "미국", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "효과적인", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "통합", fill: "#666666", value: 100, fluc: 38.7 },
  ];

  const DidpWordcloud = new rsnCharts.DidpWordcloud($chart);
  DidpWordcloud.reDataBinding(datas);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=연령별]");
  const $chart = $article.querySelector(".js-chart");
  let datas = [
    { name: "시스템", fill: "#58CBA2", value: 1100, fluc: 38.7 },
    { name: "현재", fill: "#58CBA2", value: 536, fluc: 38.7 },
    { name: "정보", fill: "#58CBA2", value: 368, fluc: 38 },
    { name: "쉽다", fill: "#58CBA2", value: 363, fluc: 38 },
    { name: "가격", fill: "#58CBA2", value: 358, fluc: 38.7 },
    { name: "어렵다", fill: "#58CBA2", value: 312, fluc: 38.7 },
    { name: "개발", fill: "#58CBA2", value: 271, fluc: 38.7 },
    { name: "사용문의", fill: "#58CBA2", value: 255, fluc: 38.7 },
    { name: "지역", fill: "#58CBA2", value: 235, fluc: -40.1 },
    { name: "평가", fill: "#58CBA2", value: 267, fluc: -40.1 },
    { name: "단품", fill: "#ffffff", value: 1100, fluc: 38.7 },
    { name: "높다", fill: "#ffffff", value: 536, fluc: 38.7 },
    { name: "인프라", fill: "#ffffff", value: 333, fluc: 38.7 },
    { name: "스마트하다", fill: "#ffffff", value: 222, fluc: 38.7 },
    { name: "설비", fill: "#ffffff", value: 111, fluc: 38.7 },
    { name: "에너지 절감", fill: "#ffffff", value: 100, fluc: 38.7 },
    { name: "차량", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "솔루션", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "미국", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "효과적인", fill: "#666666", value: 100, fluc: 38.7 },
    { name: "통합", fill: "#666666", value: 100, fluc: 38.7 },
  ];

  const DidpWordcloud = new rsnCharts.DidpWordcloud($chart);
  DidpWordcloud.reDataBinding(datas);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=TPOP]");
  const $chart = $article.querySelector(".js-chart");
  const didpTpopChart = new rsnCharts.DidpTpopChart($chart);
  let data = [
    { category: "Time", value: 45 },
    { category: "Place", value: 26 },
    { category: "Occasion", value: 32 },
    { category: "Person", value: 91 },
  ];
  let data2 = [
    { category: "Time", value: 55 },
    { category: "Place", value: 66 },
    { category: "Occasion", value: 72 },
    { category: "Person", value: 11 },
  ];
  didpTpopChart.reDataBinding(data);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=TPOP]");
  const $chart = $article.querySelector(".js-chart");
  const didpTpopChart = new rsnCharts.DidpTpopChart($chart);
  let data = [
    { category: "Time", value: 45 },
    { category: "Place", value: 26 },
    { category: "Occasion", value: 32 },
    { category: "Person", value: 91 },
  ];
  let data2 = [
    { category: "Time", value: 55 },
    { category: "Place", value: 66 },
    { category: "Occasion", value: 72 },
    { category: "Person", value: 11 },
  ];
  didpTpopChart.reDataBinding(data);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=정보량추이]");
  const $chart = $article.querySelector(".js-chart");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");

  let data = [
    { category: "1/8", snps: 25, pareto: 0 },
    { category: "1/9", snps: 25, pareto: 5 },
    { category: "1/10", snps: 12, pareto: 7 },
    { category: "1/11", snps: 9, pareto: 12 },
    { category: "1/12", snps: 22, pareto: 12 },
    { category: "1/13", snps: 94, pareto: 42 },
    { category: "1/14", snps: 94, pareto: 62 },
    { category: "1/15", snps: -88, pareto: 52 },
    { category: "1/16", snps: 65, pareto: 2 },
    { category: "1/17", snps: 93, pareto: 12 },
    { category: "1/18", snps: 41, pareto: -22 },
    { category: "1/19", snps: -41, pareto: 12 },
    { category: "1/20", snps: 41, pareto: 12 },
    { category: "1/21", snps: 41, pareto: 14 },
    { category: "1/22", snps: 41, pareto: 12 },
    { category: "1/23", snps: -41, pareto: 12 },
    { category: "1/24", snps: 41, pareto: 22 },
    { category: "1/25", snps: 41, pareto: 42 },
    { category: "1/26", snps: 41, pareto: 12 },
    { category: "1/27", snps: 41, pareto: 12 },
  ];

  const didpLineNcolumnChart = new rsnCharts.DidpLineNcolumnChart($chart);

  didpLineNcolumnChart.options = {
    animate: {
      play: true, // Boolean / 기본값 - Booleantrue
      duration: 600, // Number /  기본값 sec - 600
    },
  };

  observerClassIsStart.addCallback(() => didpLineNcolumnChart.reDataBinding(data));
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

  let activeClasses = new Array();
  let beforeClasses = new Array();

  // transition
  const transitionArticle = (_$articles) => {
    _$articles.forEach((_$article, _idx) => {
      const transitionElement = new window.TransitionElement(_$article);

      transitionElement.isStartDelay = _idx * 300; // 각 article의 시간차 transition 활성화
      transitionElement.isEventListenerAdded = true;
      transitionElement.init();
      activeClasses.push(transitionElement);
    });
  };

  // swiper active index 정보를 URL 파라미터 전송
  const activeParams = (_activeIndex) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("slideActiveIndex", _activeIndex);
    const newUrl = window.location.pathname + "?" + urlParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  // URL 파라미터 체크 후 해당 slide active 상태로 변경
  const checkSwiperParams = (_swiper, _activeIndex) => {
    const urlParams = new URLSearchParams(window.location.search);
    const autoplay = urlParams.get("autoplay");
    const slideActiveIndex = urlParams.get("slideActiveIndex");
    console.log(autoplay, slideActiveIndex);

    if (slideActiveIndex !== _activeIndex && slideActiveIndex !== null) {
      _swiper.slideTo(Number(slideActiveIndex), 0, false);
    }

    if (autoplay === "stop") {
      _swiper.autoplay.stop();
    }
  };

  // swiper
  const $swiper = document.querySelector(".swiper");
  const swiper = new Swiper($swiper, {
    autoplay: {
      delay: 1000,
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
    speed: 600,
    ease: "cubic-bezier(0.5, 0, 0.5, 1)",
    // allowTouchMove: false, // 마우스 drag 막기
    keyboard: {
      enabled: true, // 키보드 슬라이드 전환 활성화
      onlyInViewport: true, // 뷰포트 내에서만 키보드 동작 활성화
    },
    on: {
      init() {
        // new TransitionElement
        const $articles = this.slides[this.activeIndex].querySelectorAll(".l-article--bg-gradient");
        transitionArticle($articles);
        checkSwiperParams(this, this.activeIndex);
        activeParams(this.activeIndex);
      },
      slideChangeTransitionStart: function () {
        // class 백업 및 초기화
        beforeClasses = activeClasses;
        activeClasses = new Array();

        // new TransitionElement
        const $articles = this.slides[this.activeIndex].querySelectorAll(".l-article--bg-gradient");
        transitionArticle($articles);
        activeParams(this.activeIndex);
      },
      slideChangeTransitionEnd: function () {
        // class(= transitionElement) 내부 setTimeout 초기화
        beforeClasses.forEach((_slide) => {
          clearTimeout(_slide.timer1);
          clearTimeout(_slide.timer2);
        });

        // 숨겨진 slide의 article 요소 classList 초기화
        const disableIdx = Array.from(this.slides).findIndex((_slide) => !_slide.classList.contains("swiper-slide-active"));
        const $articles = this.slides[disableIdx].querySelectorAll(".l-article--bg-gradient");

        $articles.forEach((_$article) => {
          _$article.classList.remove("is-start");
          _$article.classList.remove("is-complete");
          _$article.classList.add("is-ready");
        });
      },
    },
  });

  // 오른쪽 마우스 drag 만 적용
  // let startX;
  // let endX;

  // $swiper.addEventListener("mousedown", (e) => {
  //   startX = e.clientX;
  // });

  // $swiper.addEventListener("mouseup", (e) => {
  //   endX = e.clientX;
  //   triggerRightArrow(startX, endX);
  // });

  // function triggerRightArrow(startX, endX) {
  //   const dragThreshold = 50; // Change this value to adjust the required drag distance
  //   if (endX - startX < dragThreshold) {
  //     swiper.slideNext();
  //   }
  // }

  // // MutationObserver 생성
  // const observer = new MutationObserver(() => {
  //   // Swiper를 재실행할 코드 작성
  //   swiper.update(); // Swiper를 업데이트하여 재실행
  //   console.log("swiper update");
  // });

  // // Observer 옵션 설정
  // const observerOptions = {
  //   childList: true, // 하위 요소의 추가/삭제를 감지
  //   subtree: true, // 하위 요소의 모든 변화를 감지
  // };

  // // Observer 시작
  // observer.observe($swiper, observerOptions);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
