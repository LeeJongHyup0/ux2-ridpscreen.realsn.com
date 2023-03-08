// DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 로그인 - 유효성체크
     *
     **/
    const $login = document.querySelector(".l-member--login");
    const $inpId = $login.querySelector(".form-row[data-row=id] input");
    const $inpPass = $login.querySelector(".form-row[data-row=password] input");
    const $btnEyes = $login.querySelectorAll(".btn-eye");
    const $btnLogin = $login.querySelector(".js-btn-login");

    // 강제포커스
    $inpId.focus();

    // ID & Pass, Empity 상태에서 button 비활성화
    [$inpId, $inpPass].forEach((_$el) => {
      _$el.addEventListener("keyup", (e) => {
        if (Boolean($inpId.value) && Boolean($inpPass.value)) $btnLogin.removeAttribute("disabled");
        else $btnLogin.setAttribute("disabled", "");
      });
    });

    // 비밀번호 미리보기
    $btnEyes.forEach(function (_$btnEye) {
      _$btnEye.addEventListener("click", (e) => {
        e.target.classList.toggle("btn-eye--is-active");

        const isActive = e.target.classList.contains("btn-eye--is-active");

        if (isActive) e.target.parentElement.querySelector("input").setAttribute("type", "text");
        else e.target.parentElement.querySelector("input").setAttribute("type", "password");
        e.target.dispatchEvent(new Event("change"));
      });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /*
     *
     * 상황별 preview 가져오기
     *
     **/
    const name = new URLSearchParams(location.search).get("preview");

    switch (name) {
      case "fail":
        // 팝업 - 로그인 실패
        $.modal({ className: "alert", message: `<p class="text-center">ID 또는 PW를 잘못 입력했습니다.<br> 입력하신 내용을 다시 확인해주세요.</p>` });
        break;
      case "overlapping":
        // 팝업 - 중복 로그인
        $.modal({
          className: "confirm",
          message: `<p class="text-center">동일 아이디 사용자가 존재합니다.</p><p class="text-center">기존 사용자를 강제 로그아웃 후 로그인하시겠습니까?</p>`,
          btnAgree: "로그인",
          on: {
            complete({ ...args }) {
              const $btnAgree = args.$modal[0].querySelector(".btn-agree");

              $btnAgree.addEventListener("click", () => {
                location.href = "../../moral";
              });
            },
          },
        });
        break;
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
