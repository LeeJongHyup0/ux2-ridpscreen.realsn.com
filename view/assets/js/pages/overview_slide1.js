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
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
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
    animateTargetNumber(dataWatcher.data);
    observerClassIsStart.addCallback(() => animateTargetNumber(dataWatcher.data));
    observerClassIsComplete.removeCallback(() => ($number.innerHTML = 0));
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
  const animate = (_data) => {
    checkSign(_data) === "negative" ? $number.classList.add("is-negative") : $number.classList.remove("is-negative");
    $number.innerText = _data.replace(/-/g, "");
    $arrow.style.transform = `rotate(${percentToDegrees(_data)}deg)`;
  };

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    if ($article.classList.contains("is-complete")) animate(dataWatcher.data);
    else {
      observerClassIsStart.addCallback(() => animate(dataWatcher.data));
      observerClassIsComplete.removeCallback(() => {
        $arrow.style.transform = "";
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
  const $bullets = $article.querySelectorAll(".c-bullet");
  const $tit = $article.querySelector(".tit");
  const $bars = $article.querySelectorAll(".c-chart-bar__bar");
  const $cnts = $article.querySelectorAll(".cnt");
  const dataWatcher = new window.DataWatcher();

  // 애니메이션 효과를 적용
  const animate = (_$bar, _idx, _data) => {
    _$bar.style.width = `${_data}%`;
    _$bar.style.transitionDelay = `${_idx * 0.15}s`;
    $cnts[_idx].innerText = _data;
  };

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    const datas = dataWatcher.data.sort((_a, _b) => _b.value - _a.value);

    datas.forEach((_data, _idx) => {
      _idx === 0 && ($tit.innerText = _data.name);
      $bullets[_idx].innerHTML = `<i class="icon-svg-channel-${_data.icon}"></i>`;
      $bullets[_idx].style.backgroundColor = _data.color;
      $bars[_idx].style.backgroundColor = _data.color;
      $cnts[_idx].innerText = _data.value;
      $bars[_idx].style.transitionDelay = `${_idx * 0.15}s`;

      const ObserverClassIsStart = new window.ObserverClass($article, "is-start");
      ObserverClassIsStart.addCallback(() => {
        $bars[_idx].style.width = `${_data.value}%`;
      });

      const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
      observerClassIsComplete.removeCallback(() => {
        $bars[_idx].style.width = "";
      });
    });
  });

  // 초기값
  dataWatcher.data = [
    { name: "인스타그램", value: 45, icon: "instagram", color: "#B05BCE" },
    { name: "유튜브", value: 90, icon: "youtube", color: "#C24343" },
    { name: "기업/단체", value: 5, icon: "kin", color: "#6BB3DC" },
    { name: "트튀터", value: 33.54, icon: "twitter", color: "#5754E7" },
    { name: "정부/공공", value: 74.2, icon: "government", color: "#348E94" },
  ];
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판 > 첫 번째 슬라이드
   *  block : TOP 100 연관어
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(".swiper-slide-overview1 [data-article=Top100연관어]");
  const $chart = $article.querySelector(".js-chart");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
  const dataWatcher = new window.DataWatcher();

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
        animationDuration: 700,
      })
    );

    // Configure labels
    series.labels.template.setAll({
      templateField: "labelSettings",
    });

    // Data from
    dataWatcher.callback(() => {
      series.data.setAll(dataWatcher.data);

      observerClassIsStart.addCallback(() => series.data.setAll(dataWatcher.data));
      observerClassIsComplete.removeCallback(() => series.data.setAll([]));
    });
  });

  dataWatcher.data = [
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
  ];
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판 > 첫 번째 슬라이드
   *  block : 성별
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(".swiper-slide-overview1 [data-article=인포그래픽모음]");
  const $chart = $article.querySelector("[data-article=성별] .js-chart");
  const didpPictogramChart = new rsnCharts.DidpPictogramChart($chart);
  didpPictogramChart.reDataBinding([{ man: { percents: "36.6%" } }, { woman: { percents: "63.4%" } }]);

  /* ----------------------------------------------------------------------------------------------- */

  const $cnts = $article.querySelectorAll(`[data-article="성별"] .cnt`);
  const $persons = $article.querySelectorAll(`[data-article="성별"] .person`);
  const dataWatcher = new window.DataWatcher();

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    let maxPercent = Math.max(...dataWatcher.data);
    let maxIndex = dataWatcher.data.indexOf(maxPercent);

    dataWatcher.data.forEach((_data, _idx) => {
      $cnts[_idx].innerText = _data;

      const observerAddClass = new window.ObserverClass($article, "is-start");
      observerAddClass.addCallback(() => {
        $cnts[maxIndex].style.color = "#ffffff";
        $persons[maxIndex].style.color = "#ffffff";
      });
    });

    const observerRemoveClass = new window.ObserverClass($article, "is-complete");
    dataWatcher.data.forEach((_data, _idx) => {
      observerRemoveClass.removeCallback(() => {
        $cnts[maxIndex].style.color = "#666666";
        $persons[maxIndex].style.color = "#666666";
      });
    });
  });

  // 초기값
  dataWatcher.data = [36.6, 63.4];
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(`[data-article="인포그래픽모음"]`);
  const $ages = $article.querySelectorAll(`[data-article="연령별"] .age`);
  const $bars = $article.querySelectorAll(`[data-article="연령별"] .c-chart-bar__bar`);
  const $cnts = $article.querySelectorAll(`[data-article="연령별"] .cnt`);
  const dataWatcher = new window.DataWatcher();

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    let maxIndex = dataWatcher.data.reduce((maxIdx, currentValue, currentIndex, array) => {
      return currentValue.value > array[maxIdx].value ? currentIndex : maxIdx;
    }, 0);

    dataWatcher.data.forEach((_data, _idx) => {
      $cnts[_idx].innerText = _data.value;
      $ages[_idx].innerText = _data.name;

      const reset = (() => {})();

      function init() {
        $article.hasClass("a");
        $bars[maxIndex].closest(".col").classList.add("col-is-active");
        $bars[_idx].style.height = `${_data.value}%`;
        $bars[_idx].style.transitionDelay = `${_idx * 0.15}s`;
      }
      if ($article.hasClass("is-complete")) init();

      const observerClassIsStart = new window.ObserverClass($article, "is-start");
      observerClassIsStart.addCallback(() => init());

      const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
      observerClassIsComplete.removeCallback(() => {
        $bars[_idx].style.height = "";
        $bars[maxIndex].closest(".col").classList.remove("col-is-active");
      });
    });
  });

  // 초기값;
  dataWatcher.data = [
    { name: "10대", value: 22 },
    { name: "20대", value: 40 },
    { name: "30대", value: 44.1 },
    { name: "40대", value: 10.2 },
    { name: "50대", value: 100 },
  ];

  setTimeout(() => {
    // dataWatcher.data = [
    //   { name: "10대", value: 999 },
    //   { name: "20대", value: 40 },
    //   { name: "30대", value: 44.1 },
    //   { name: "40대", value: 10.2 },
    //   { name: "50대", value: 100 },
    // ];
  }, 2000);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(`[data-article="Top5 토픽"]`);
  const $bar = $article.querySelector(`.js-chart`);
  const customCandleChart = new rsnCharts.CustomCandleChart($bar);
  const dataWatcher = new window.DataWatcher();

  dataWatcher.callback(() => {
    customCandleChart.dataBind(dataWatcher.data);
  });

  dataWatcher.data = [
    { name: "산업", value: 2402 },
    { name: "IT/과학", value: 1600 },
    { name: "경제", value: 857 },
    { name: "환경", value: 243 },
    { name: "기타", value: 57 },
  ];
}
