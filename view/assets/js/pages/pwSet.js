$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    // 로컬, 퍼블 환경에서 input 초기값 설정 및 버튼 disable 제거
    if (HOST.localhost || HOST.publish) {
      const $btn = document.querySelector(".js-btn-pw-set");
      document.querySelector(".form-row[data-row=새비밀번호] input").value = "rsnux";
      document.querySelector(".form-row[data-row=새비밀번호확인] input").value = "rsnux";
      $btn.removeAttribute("disabled");

      const $input = document.querySelectorAll(".form-row.form-text");
      $input.forEach(function (_$this) {
        _$this.setAttribute("data-text-value", "true");
      });
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 비밀번호 변경 - 유효성체크
     *
     **/
    const $login = document.querySelector(".l-member--pw-set");
    const $inpPw = $login.querySelector(".form-row[data-row=새비밀번호] input");
    const $inpPwConfirm = $login.querySelector(".form-row[data-row=새비밀번호확인] input");
    const $btnEyes = $login.querySelectorAll(".btn-eye");
    const $errMsg = $login.querySelector(".form__cmt--err");
    const $btnPwSet = $login.querySelector(".js-btn-pw-set");

    // 강제포커스
    $inpPw.focus();

    // 4자리 넘는지, 일치하는지 비교
    [$inpPw, $inpPwConfirm].forEach((_$el) => {
      _$el.addEventListener("keyup", (e) => {
        if (!($inpPw.value.length < 4) && !($inpPwConfirm.value.length < 4)) {
          if ($inpPw.value == $inpPwConfirm.value) {
            $btnPwSet.removeAttribute("disabled");
            $errMsg.textContent = "";
          } else {
            $btnPwSet.setAttribute("disabled", "");
            $errMsg.textContent = "비밀번호가 일치하지 않습니다.";
          }
        } else {
          $btnPwSet.setAttribute("disabled", "");
          $errMsg.textContent = "";
        }
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
});
