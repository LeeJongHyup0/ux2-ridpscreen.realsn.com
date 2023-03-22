{
  /**
   *
   *  depth : 상황판 > 첫 번째 슬라이드
   *  block : Top3 직업
   *  event : new DataWatcher
   *
   */

  const $article = document.querySelector(`[data-article="Top3직업"]`);
  const $bullets = $article.querySelectorAll(".c-bullet");
  const $names = $article.querySelectorAll(".item-list__name");
  const $percents = $article.querySelectorAll(".item-list__percent");
  const dataWatcher = new window.DataWatcher();

   // 값(변수) 변경될 때마다 콜백 메소드 호출
   dataWatcher.callback(() => {
    const datas = dataWatcher.data.sort((_a, _b) => _b.percent - _a.percent);

    datas.forEach((_data, _idx) => {
      $bullets[_idx].innerHTML = `<img class="item-list__img" src="/view/assets/img/icon/job/job-${_data.icon}.png" alt="${_data.name}">`;
      $bullets[_idx].style.setProperty('--bgColor', _data.color);
      $names[_idx].innerText = _data.name
      $percents[_idx].innerText = _data.percent
    });
  });
  
  // 초기값
  dataWatcher.data = [
    { name: "소셜 크리에이터", percent: 80.5, icon: "creator", color: "#6756AD" },
    { name: "연구원", percent: 95.4, icon: "researcher", color: "#6756AD" },
    { name: "사업가", percent: 45.3, icon: "businessman", color: "#6756AD" },
  ];
}


{
  /**
   *
   *  depth : 상황판 > 첫 번째 슬라이드
   *  block : Top3 관심사
   *  event : new DataWatcher
   *
   */

  const $article = document.querySelector(`[data-article="Top3관심사"]`);
  const $bullets = $article.querySelectorAll(".c-bullet");
  const $names = $article.querySelectorAll(".item-list__name");
  const $percents = $article.querySelectorAll(".item-list__percent");
  const dataWatcher = new window.DataWatcher();

   // 값(변수) 변경될 때마다 콜백 메소드 호출
   dataWatcher.callback(() => {
    const datas = dataWatcher.data.sort((_a, _b) => _b.percent - _a.percent);

    datas.forEach((_data, _idx) => {
      $bullets[_idx].innerHTML = `<img class="item-list__img" src="/view/assets/img/icon/interest/interest-${_data.icon}.png" alt="${_data.name}">`;
      $bullets[_idx].style.setProperty('--bgColor', _data.color);
      $names[_idx].innerText = _data.name
      $percents[_idx].innerText = _data.percent
    });
  });
  
  // 초기값
  dataWatcher.data = [
    { name: "경제", percent: 34.5, icon: "economy", color: "#E5AF23" },
    { name: "환경", percent: 52.4, icon: "enviroment", color: "#E5AF23" },
    { name: "자동차", percent: 65.3, icon: "interest-car", color: "#E5AF23" },
  ];
}