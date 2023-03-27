{
  /**
   *
   *  depth : 상황판 > 두 번째 슬라이드
   *  block : 정보량 추이
   *  event : new AMchart & new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(".swiper-slide-overview2 [data-article=정보량추이]");
  const $chart = $article.querySelector(".js-chart");
  const $categoryLabels = $article.querySelectorAll(".chart-category .cnt");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");

  let data = [
    { category: "1/1", snps: 55, pareto: 10 },
    { category: "1/2", snps: 45, pareto: 10 },
    { category: "1/3", snps: 35, pareto: 30 },
    { category: "1/4", snps: 25, pareto: 40 },
    { category: "1/5", snps: 15, pareto: 20 },
    { category: "1/6", snps: -25, pareto: 40 },
    { category: "1/7", snps: -35, pareto: 60 },
    { category: "1/8", snps: -45, pareto: 10 },
    { category: "1/9", snps: -55, pareto: 15 },
    { category: "1/10", snps: 12, pareto: 7 },
    { category: "1/11", snps: -9, pareto: 12 },
    { category: "1/12", snps: 22, pareto: 12 },
    { category: "1/13", snps: 94, pareto: 42 },
    { category: "1/14", snps: 94, pareto: 62 },
    { category: "1/15", snps: -88, pareto: 52 },
    { category: "1/16", snps: -65, pareto: 2 },
    { category: "1/17", snps: 93, pareto: 12 },
    { category: "1/18", snps: 41, pareto: 22 },
    { category: "1/19", snps: 41, pareto: 12 },
    { category: "1/20", snps: 41, pareto: 12 },
    { category: "1/21", snps: 41, pareto: 14 },
    { category: "1/22", snps: 41, pareto: 12 },
    { category: "1/23", snps: -41, pareto: 12 },
    { category: "1/24", snps: 41, pareto: 22 },
    { category: "1/25", snps: 41, pareto: 42 },
    { category: "1/26", snps: 41, pareto: 12 },
    { category: "1/27", snps: 41, pareto: 12 },
    { category: "1/28", snps: 41, pareto: 12 },
    { category: "1/29", snps: 41, pareto: 12 },
    { category: "1/30", snps: 41, pareto: 12 },
  ];

  const didpLineNcolumnChart = new rsnCharts.DidpLineNcolumnChart($chart);

  didpLineNcolumnChart.reDataBinding(data);
  didpLineNcolumnChart.lineAnimate({
    play: true, // Boolean / 기본값 - Booleantrue
    duration: 150, // Number /  기본값 sec - 600
  });

  (categoryDivision = function (_data) {
    let division = _data.length / Array.from($categoryLabels).length;
    Array.from($categoryLabels).forEach((_$label, _idx) => (_$label.innerText = _data[_idx * division].category));
    Array.from($categoryLabels)[Array.from($categoryLabels).length - 1].innerText = _data[_data.length - 1].category;
  })(data);

  observerClassIsStart.addCallback(() => {
    didpLineNcolumnChart.chart.hide();
    didpLineNcolumnChart.reDataBinding(data);
    didpLineNcolumnChart.lineAnimate({
      beforeStop: true, // 이전 차트 그리기 취소 - 재실행시 꼭!!! 들어가야함
      play: true, // Boolean / 기본값 - Booleantrue
      duration: 150, // Number /  기본값 sec - 600
    });
    let division = data.length / Array.from($categoryLabels).length;
    Array.from($categoryLabels).forEach(function (_$label, _idx) {
      _$label.innerText = data[_idx * division].category;
    });
  });

  //
  observerClassIsComplete.removeCallback(() => {
    didpLineNcolumnChart.chart.hide();
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판 > 두 번째 슬라이드
   *  block : 성별
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(".swiper-slide-overview2 [data-article=성별]");
  const $chart = $article.querySelector(".js-chart");
  const $label = $article.querySelector(".l-article-header__label");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
  const dataWatcher = new window.DataWatcher();

  // transition 초기화
  function resetTransition() {
    $label.innerText = "";
  }

  // transition 설정
  function setTransition(_data, _idx) {
    $label.insertAdjacentHTML("beforeend", `<i class="c-badge ml-11" style="background: ${_data.color}">${_data.name}</i>`);
  }

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

    // 값(변수) 변경될 때마다 콜백 메소드 호출
    dataWatcher.callback(() => {
      // 성별 데이터
      const gender = dataWatcher.data.find((e) => e.category === "성별").itemList;

      // 데이터 필터
      const filterData = dataWatcher.data.find((e) => e.category === "데이터").itemList.sort((_a, _b) => _b.value - _a.value);

      filterData.forEach((_data, _idx) => {
        if (_idx >= 0 && 5 > _idx) {
          _data.labelSettings = { fill: am5.color(0x4c86dd) };
        } else if (_idx >= 5 && 20 > _idx) {
          _data.labelSettings = { fill: am5.color(0xffffff) };
        } else if (_idx >= 20 && 30 > _idx) {
          _data.labelSettings = { fill: am5.color(0x999999) };
        } else {
        }
      });

      // 데이터 응답 속도/재호출에 따른 조건 처리
      if ($article.classList.contains("is-start") || $article.classList.contains("is-complete")) {
        series.data.setAll(filterData);
        observerClassIsStart.addCallback(() => series.data.setAll(filterData));
        observerClassIsComplete.removeCallback(() => series.data.setAll([]));

        resetTransition();

        gender.forEach((_data, _idx) => {
          setTransition(_data, _idx);
        });
      } else {
        observerClassIsStart.addCallback(() => series.data.setAll(filterData));
        observerClassIsComplete.removeCallback(() => series.data.setAll([]));

        resetTransition();

        gender.forEach((_data, _idx) => {
          setTransition(_data, _idx);
        });
      }
    });
  });

  // 초기값;
  fetch(`${SERVER.assets}/json/slide2_wordcloud-gender-data.json${window.cache}`)
    .then((_response) => {
      return _response.json();
    })
    .then((_jsondata) => {
      dataWatcher.data = _jsondata;
    });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판 > 두 번째 슬라이드
   *  block : 연령별
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(".swiper-slide-overview2 [data-article=연령별]");
  const $chart = $article.querySelector(".js-chart");
  const $label = $article.querySelector(".l-article-header__label");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");
  const dataWatcher = new window.DataWatcher();

  // transition 초기화
  function resetTransition() {
    $label.innerText = "";
  }

  // transition 설정
  function setTransition(_data, _idx) {
    $label.insertAdjacentHTML("beforeend", `<i class="c-badge ml-11" style="background: ${_data.color}">${_data.name}</i>`);
  }

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

    function labelInput() {}

    // 값(변수) 변경될 때마다 콜백 메소드 호출
    dataWatcher.callback(() => {
      // 연령별 데이터
      const age = dataWatcher.data.find((e) => e.category === "연령별").itemList;

      // 데이터 필터
      const filterData = dataWatcher.data.find((e) => e.category === "데이터").itemList.sort((_a, _b) => _b.value - _a.value);

      filterData.forEach((_data, _idx) => {
        if (_idx >= 0 && 5 > _idx) {
          _data.labelSettings = { fill: am5.color(0x58cba2) };
        } else if (_idx >= 5 && 20 > _idx) {
          _data.labelSettings = { fill: am5.color(0xffffff) };
        } else {
          _data.labelSettings = { fill: am5.color(0x999999) };
        }
      });

      // 데이터 응답 속도/재호출에 따른 조건 처리
      if ($article.hasClass("is-start") || $article.hasClass("is-complete")) {
        series.data.setAll(filterData);
        observerClassIsStart.addCallback(() => series.data.setAll(filterData));
        observerClassIsComplete.removeCallback(() => series.data.setAll([]));

        resetTransition();

        age.forEach((_data, _idx) => {
          setTransition(_data, _idx);
        });
      } else {
        observerClassIsStart.addCallback(() => series.data.setAll(filterData));
        observerClassIsComplete.removeCallback(() => series.data.setAll([]));

        resetTransition();

        age.forEach((_data, _idx) => {
          setTransition(_data, _idx);
        });
      }
    });
  });

  // 초기값;
  fetch(`${SERVER.assets}/json/slide2_wordcloud-age-data.json${window.cache}`)
    .then((_response) => {
      return _response.json();
    })
    .then((_jsondata) => {
      dataWatcher.data = _jsondata;
    });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   *  depth : 상황판 > 두 번째 슬라이드
   *  block : TPOP
   *  event : new ObserverClass & new DataWatcher
   *
   */

  const $article = document.querySelector(".swiper-slide-overview2 [data-article=TPOP]");
  const $chart = $article.querySelector(".js-chart");
  const $tit = $article.querySelectorAll(".rank-header__tit");
  const $titValue = $article.querySelectorAll(".rank-header__cnt");
  const $rankItem = $article.querySelectorAll(".rank-list");
  const didpTpopChart = new rsnCharts.DidpTpopChart($chart);
  const dataWatcher = new window.DataWatcher();

  function setTransition(_data, _idx) {
    $tit[_idx].innerText = _data.category;
    $titValue[_idx].innerText = `${_data.value}%`;
  }

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    const datas = dataWatcher.data;

    datas.forEach((_data, _idx) => {
      setTransition(_data, _idx);

      const itemList = _data.itemList.sort((_a, _b) => _b.value - _a.value);

      console.log(itemList);

      itemList.forEach((_this, _itemIdx) => {});
    });
  });

  // 초기값;
  dataWatcher.data = [
    {
      category: "Time",
      value: 45.2,
      itemList: [
        {
          name: "지난해",
          value: 45,
        },
        {
          name: "실시간",
          value: 32,
        },
        {
          name: "1월",
          value: 23,
        },
        {
          name: "2월",
          value: 13,
        },
        {
          name: "오후",
          value: 5,
        },
      ],
    },
    {
      category: "Occasion",
      value: 32.6,
      itemList: [
        {
          name: "사업",
          value: 23,
        },
        {
          name: "서비스",
          value: 43,
        },
        {
          name: "응원",
          value: 52,
        },
        {
          name: "투자",
          value: 12,
        },
        {
          name: "합의",
          value: 65,
        },
      ],
    },
    {
      category: "Place",
      value: 5.3,
      itemList: [
        {
          name: "전기차",
          value: 23,
        },
        {
          name: "교통이용장소",
          value: 63,
        },
        {
          name: "교육",
          value: 34,
        },
        {
          name: "학교",
          value: 51,
        },
        {
          name: "병원",
          value: 45,
        },
      ],
    },
    {
      category: "Person",
      value: 16.9,
      itemList: [
        {
          name: "고객",
          value: 23,
        },
        {
          name: "가족",
          value: 62,
        },
        {
          name: "파트너",
          value: 52,
        },
        {
          name: "인재",
          value: 78,
        },
        {
          name: "사람",
          value: 55,
        },
      ],
    },
  ];

  didpTpopChart.reDataBinding(dataWatcher.data);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
