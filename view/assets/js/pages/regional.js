{
  /**
   *
   *  depth : 지역설정
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
  /**
   *
   *  depth : 지역설정
   *  block : [data-section=지역설정]
   *  event : new TransitionElement
   *
   */

  const $el = document.querySelector("[data-section=지역설정]");
  const transitionElement = new TransitionElement($el);
  transitionElement.initialize();
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
