{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=성별]");
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
    const datas = [
      { name: "시스템", labelSettings: { fill: am5.color(0x4c86dd) }, value: 1100, fluc: 38.7 },
      { name: "현재", labelSettings: { fill: am5.color(0x4c86dd) }, value: 536, fluc: 38.7 },
      { name: "정보", labelSettings: { fill: am5.color(0x4c86dd) }, value: 368, fluc: 38 },
      { name: "쉽다", labelSettings: { fill: am5.color(0x4c86dd) }, value: 363, fluc: 38 },
      { name: "가격", labelSettings: { fill: am5.color(0x4c86dd) }, value: 358, fluc: 38.7 },
      { name: "어렵다", labelSettings: { fill: am5.color(0x4c86dd) }, value: 312, fluc: 38.7 },
      { name: "개발", labelSettings: { fill: am5.color(0x4c86dd) }, value: 271, fluc: 38.7 },
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
      { name: "기타", labelSettings: { fill: am5.color(0x4c86dd) }, value: 267, fluc: -40.1 },
      { name: "연비", labelSettings: { fill: am5.color(0xffffff) }, value: 1100, fluc: 38.7 },
      { name: "태양광", labelSettings: { fill: am5.color(0xffffff) }, value: 536, fluc: 38.7 },
      { name: "운영", labelSettings: { fill: am5.color(0x666666) }, value: 333, fluc: 38.7 },
      { name: "자연친화", labelSettings: { fill: am5.color(0x666666) }, value: 222, fluc: 38.7 },
      { name: "최적화", labelSettings: { fill: am5.color(0x4c86dd) }, value: 111, fluc: 38.7 },
      { name: "원자력 발전", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
    ];

    series.data.setAll(datas);
    observerClassIsStart.addCallback(() => series.data.setAll(datas));
    observerClassIsComplete.removeCallback(() => series.data.setAll([]));
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=연령별]");
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
    const datas = [
      { name: "시스템", labelSettings: { fill: am5.color(0x58cba2) }, value: 1100, fluc: 38.7 },
      { name: "현재", labelSettings: { fill: am5.color(0x58cba2) }, value: 536, fluc: 38.7 },
      { name: "정보", labelSettings: { fill: am5.color(0x58cba2) }, value: 368, fluc: 38 },
      { name: "쉽다", labelSettings: { fill: am5.color(0x58cba2) }, value: 363, fluc: 38 },
      { name: "가격", labelSettings: { fill: am5.color(0x58cba2) }, value: 358, fluc: 38.7 },
      { name: "어렵다", labelSettings: { fill: am5.color(0x58cba2) }, value: 312, fluc: 38.7 },
      { name: "개발", labelSettings: { fill: am5.color(0x58cba2) }, value: 271, fluc: 38.7 },
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
      { name: "기타", labelSettings: { fill: am5.color(0x58cba2) }, value: 267, fluc: -40.1 },
      { name: "연비", labelSettings: { fill: am5.color(0xffffff) }, value: 1100, fluc: 38.7 },
      { name: "태양광", labelSettings: { fill: am5.color(0xffffff) }, value: 536, fluc: 38.7 },
      { name: "운영", labelSettings: { fill: am5.color(0x666666) }, value: 333, fluc: 38.7 },
      { name: "자연친화", labelSettings: { fill: am5.color(0x666666) }, value: 222, fluc: 38.7 },
      { name: "최적화", labelSettings: { fill: am5.color(0x58cba2) }, value: 111, fluc: 38.7 },
      { name: "원자력 발전", labelSettings: { fill: am5.color(0x666666) }, value: 100, fluc: 38.7 },
    ];

    series.data.setAll(datas);
    observerClassIsStart.addCallback(() => series.data.setAll(datas));
    observerClassIsComplete.removeCallback(() => series.data.setAll([]));
  });
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
  const $cnts = $article.querySelectorAll(`.l-article-header .cnt`);
  const observerAddClass = new window.ObserverClass($article, "is-start");
  const observerRemoveClass = new window.ObserverClass($article, "is-complete");
  const dataWatcher = new window.DataWatcher();

  // 값(변수) 변경될 때마다 콜백 메소드 호출
  dataWatcher.callback(() => {
    observerAddClass.addCallback(() => {
      dataWatcher.data.forEach((_data, _idx) => {
        $cnts[_idx].innerText = _data;

        $($cnts[_idx]).stop().animateNumber({
          addComma: false,
          totalPlayTime: 1000,
          endNumber: _data,
          endValue: _data,
        });
      });
    });

    observerRemoveClass.removeCallback(() => {
      dataWatcher.data.forEach((_data, _idx) => {
        $cnts[_idx].innerText = "0";
      });
    });
  });

  // 초기값
  dataWatcher.data = [99.9, 64.4, 25, 25];
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=정보량추이]");
  const $chart = $article.querySelector(".js-chart");
  const $categoryLabels = $article.querySelectorAll(".chart-category .cnt");
  const observerClassIsStart = new window.ObserverClass($article, "is-start");
  const observerClassIsComplete = new window.ObserverClass($article, "is-complete");

  let data = [
    { category: "1/1", snps: 25, pareto: 10 },
    { category: "1/2", snps: 25, pareto: 10 },
    { category: "1/3", snps: 25, pareto: 30 },
    { category: "1/4", snps: 25, pareto: 40 },
    { category: "1/5", snps: 25, pareto: 20 },
    { category: "1/6", snps: 25, pareto: 40 },
    { category: "1/7", snps: 25, pareto: 60 },
    { category: "1/8", snps: 25, pareto: 10 },
    { category: "1/9", snps: 25, pareto: 15 },
    { category: "1/10", snps: 12, pareto: 7 },
    { category: "1/11", snps: 9, pareto: 12 },
    { category: "1/12", snps: 22, pareto: 12 },
    { category: "1/13", snps: 94, pareto: 42 },
    { category: "1/14", snps: 94, pareto: 62 },
    { category: "1/15", snps: -88, pareto: 52 },
    { category: "1/16", snps: 65, pareto: 2 },
    { category: "1/17", snps: 93, pareto: 12 },
    { category: "1/18", snps: 41, pareto: 22 },
    { category: "1/19", snps: -41, pareto: 12 },
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
  let division = data.length / Array.from($categoryLabels).length;
  Array.from($categoryLabels).forEach(function (_$label, _idx) {
    _$label.innerText = data[_idx * division].category;
  });
  Array.from($categoryLabels)[Array.from($categoryLabels).length - 1].innerText = data[data.length - 1].category;

  // setTimeout(() => {
  //   clearTimeout(didpLineNcolumnChart.timer);
  //   didpLineNcolumnChart.reDataBinding(data);
  //   didpLineNcolumnChart.lineAnimate({
  //     play: true, // Boolean / 기본값 - Booleantrue
  //     duration: 600, // Number /  기본값 sec - 600
  //   });
  // }, 3000);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
