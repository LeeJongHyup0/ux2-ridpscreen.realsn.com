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
