console.log("overview.js");
const $swiper = document.querySelector(".swiper");
const swiper = new Swiper($swiper, {
  slidesPerView: 1,
  loop: true,
  // effect: "fade",
});
console.log($swiper);

{
  const $article = document.querySelector(".swiper-slide-overview1 [data-article=Top100연관어]");
  const $chart = $article.querySelector(".js-chart");

  let datas = [
    { name: "시스템", fill: "#EA704A", value: 1100, fluc: 38.7 },
    { name: "현재", fill: "#EA704A", value: 536, fluc: 38.7 },
    { name: "정보", fill: "#EA704A", value: 368, fluc: 38 },
    { name: "쉽다", fill: "#EA704A", value: 363, fluc: 38 },
    { name: "가격", fill: "#EA704A", value: 358, fluc: 38.7 },
    { name: "어렵다", fill: "#EA704A", value: 312, fluc: 38.7 },
    { name: "개발", fill: "#EA704A", value: 271, fluc: 38.7 },
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
{
  const $article = document.querySelector(".swiper-slide-overview1 [data-article=성별]");
  const $chart = $article.querySelector(".js-chart");
  const didpPictogramChart = new rsnCharts.DidpPictogramChart($chart);
  didpPictogramChart.reDataBinding([{ man: { percents: "27.1%" } }, { woman: { percents: "72.9%" } }]);
}
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
{
  const $article = document.querySelector(".swiper-slide-overview2 [data-article=TPOP]");
  const $chart = $article.querySelector(".js-chart");
  const didpTpopChart = new rsnCharts.DidpTpopChart($chart);
  // DidpTpopChart.reDataBinding(datas);
}
