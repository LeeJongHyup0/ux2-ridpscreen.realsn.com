import $ from "jquery";

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * wrapper is ready
   *
   */

  const $wrap = document.querySelector("#wrap");
  const $loadingWrap = document.querySelector("#loadingWrap");
  let isState;

  $wrap.style.opacity = 1;
  $wrap.style.visibility = "visible";

  const removeLoading = () => {
    try {
      if (Boolean($loadingWrap) === false) throw new Error("#loadingWrap 찾을 수 없습니다.");
    } catch (_err) {
      console.log(`%c common.js %c ${_err}`, "color:yellow;background:#ffb6c16b", "color:red;");
      return;
    }

    $loadingWrap
      .animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        fill: "forwards",
      })
      .finished.then(() => {
        $loadingWrap.remove();
      });
  };

  window.addEventListener("load", () => {
    removeLoading();
    isState = true;
  });

  setTimeout(() => {
    removeLoading();
    !isState &&
      console.log(`%c common.js %c 리소스가 정상적으로 다운로드 않거나, 지연시간이 2초를 초과했습니다.`, "color:yellow;background:#ffb6c16b", "color:red;");
  }, 2000);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * #header 숨기기 (custom data attributes)
   *
   */

  const $container = document.querySelector("#container");
  const $header = document.querySelector("#header");
  const isHide = $container?.getAttribute("data-header-hide")?.toLowerCase().boolean();

  if (isHide) $header.parentNode.removeChild($header);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * #footer 숨기기 (custom data attributes)
   *
   */

  const $container = document.querySelector("#container");
  const $footer = document.querySelector("#footer");
  const isHide = $container?.getAttribute("data-footer-hide")?.toLowerCase().boolean();

  if (isHide) $footer.parentNode.removeChild($footer);
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * depth : 대시보드 공통
   * event : TEST 파라미터
   *
   */

  const name = new URLSearchParams(location.search).get("preview");

  if (name) {
    switch (name) {
      //  데이터 로딩 예시
      case "loading":
        const $lodings = document.querySelectorAll("[data-loading-spinner]");

        Array.from($lodings).forEach((_$loding) => {
          _$loding.setAttribute("data-loading-spinner", "true");
        });
        break;
      //  데이터 없는 경우
      case "empty":
        const $emptys = document.querySelectorAll("[data-is-empty]");

        Array.from($emptys).forEach((_$empty) => {
          _$empty.setAttribute("data-is-empty", "true");
        });
        break;
      case "notys":
        const notys = new window.Notys();

        setInterval(() => notys.info("데이터를 불러오고 있습니다", "right top"), 1500);
        setInterval(() => notys.success("데이터 불러오기가 완료되었습니다.<br>", "right top"), 2500);
        setInterval(() => notys.error("데이터 불러오기에 실패하였습니다.", "right top"), 3500);
        break;
      case "modal":
        $.modal({ isExist: true, className: "comments--all" });
        break;
    }
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

// jQuery DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  Device 체크 (custom data attributes)
     *
     */

    $("#wrap").wait(100).attr({ "data-target-device": $.getDevice().type, "data-device-detail": $.getDevice().detail });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // jQuery DOCUMENT READY...
