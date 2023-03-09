{
  const $section = document.querySelector("[data-section=지역설정]");

  // "ready"와 "start" 속성을 삭제하는 함수
  const removeReadyAndStartAttributes = (_el) => {
    return new Promise((_resolve) => {
      $section.classList.remove("is-ready");
      $section.classList.remove("is-start");
      _resolve();
    });
  };

  // "complete" 속성을 추가하는 함수
  const addCompleteAttribute = (_el) => {
    return new Promise((_resolve) => {
      $section.classList.add("is-complete");
      _resolve();
    });
  };

  // Run after loading
  document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
      $section.classList.add("is-start");

      // 2초 뒤 Promise를 사용하여 속성을 삭제하고 추가
      setTimeout(() => {
        removeReadyAndStartAttributes($section)
          .then(() => {
            return addCompleteAttribute($section);
          })
          .catch((_error) => {
            console.error(_error);
          });
      }, 1500);
    }
  });
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
