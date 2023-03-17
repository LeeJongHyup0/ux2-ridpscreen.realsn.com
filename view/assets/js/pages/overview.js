{
  /**
   *
   *  event : new Notys
   *  Note  : 5초 동안 화면 하단 중안에 안내 메세지 노출
   *
   */

  const notys = new window.Notys();

  setTimeout(
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
    1500
  );
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
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
  didpLineNcolumnChart.reDataBinding(data);
  didpLineNcolumnChart.options = {
    animate: {
      play: true, // Boolean / 기본값 - Booleantrue
      duration: 600, // Number /  기본값 sec - 600
    },
  };
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
  setTimeout(() => {
    const $swiper = document.querySelector(".swiper");
    const swiper = new Swiper($swiper, {
      slidesPerView: 1,
      loop: true,
      // effect: "fade",
    });
    // MutationObserver 생성
    const observer = new MutationObserver(() => {
      // Swiper를 재실행할 코드 작성
      swiper.update(); // Swiper를 업데이트하여 재실행
      console.log("A");
    });

    // Observer 옵션 설정
    const observerOptions = {
      childList: true, // 하위 요소의 추가/삭제를 감지
      subtree: true, // 하위 요소의 모든 변화를 감지
    };

    // Observer 시작
    observer.observe($swiper, observerOptions);
  }, 1500);
}
