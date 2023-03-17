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
   * <thaad>를 table 최 상단에 고정하기
   *
   */

  if (Boolean(document.querySelectorAll("[data-thead-sticky=true]").length)) {
    const sticky = new window.TableSticky(document.querySelectorAll("[data-thead-sticky=true]"));

    window.onLoadResize({
      callback() {
        sticky.init();
      },
    });

    const headerPin = document.querySelectorAll(".js-header-pin");
    headerPin.forEach(function (_each) {
      console.log(_each);
      _each.addEventListener("click", function () {
        setTimeout(function () {
          sticky.init();
        }, 1);
      });
    });
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * GNB - active
   *
   */

  const $header = document.querySelector("#header");

  if ($header) {
    const $links = $header.querySelectorAll("#header [data-file-path]");
    const paths = Array.from($links).map((_$link) => _$link.getAttribute("data-file-path"));
    const url = location.pathname.getBetween("view/", "/");
    const hasPath = paths.find((_path) => _path === url);

    if (hasPath) $header.querySelector(`[data-file-path="${hasPath}"]`).classList.add("header-gnb__link--is-active");
  }
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
{
  /**
   *
   * GNB - link up
   *
   */

  const $header = document.querySelector("#header");

  if ($header) {
    const $links = $header.querySelectorAll("#header [data-file-path]");

    Array.from($links).forEach((_$link) => {
      const href = _$link.getAttribute("data-file-path");

      _$link.setAttribute("href", `../${href}`);
    });
  }
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
        // const $updateBtn = document.querySelector("[data-loading-update]");
        // $updateBtn.setAttribute("data-loading-update", "true");
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
  {
    /**
     *
     *.js-is-appear에 FadeIn 적용 ▼
     *
     *  [html 작성 예]
     *      //기본값 적용시
     *      <div class="js-is-appear">
     *
     *      //scroll.top 사용자값 입력시(예: class 뒤에 숫자 입력)
     *      <div class="js-is-appear50">
     *
     *  [CSS 작성 예]
     *      div {opacity:0;transition:none}
     *      div.appear {opacity:1;transition:opacity 0.3s ease-in-out}
     *
     */

    const $appears = document.querySelectorAll("[class*=js-is-appear]");

    $appears.forEach((_each) => {
      const $this = _each;
      const classNames = $this.getAttribute("class").split(" ");
      const posY = classNames
        .map((_arr) => {
          if (_arr.indexOf("js-is-appear") !== -1) {
            let num = Number(_arr.replace(/[^0-9]/g, ""));

            $this.classList.remove(_arr); //removeClass
            return (num = num !== 0 ? num : 70); //scroll.top 기본값 70 설정함
          }
        })
        .filter((_el) => _el)[0];

      // addClass('js-is-appear')
      $.scrollAction({
        $target: $this,
        top: posY,
        scrollDownAction: function () {
          $this.classList.add("is-appear");
        },
        scrollUpAction: function () {
          $this.classList.remove("is-appear");
        },
      });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // jQuery DOCUMENT READY...
