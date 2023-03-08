/**
 * 
 * 기존 $.modal을 함수로 정의하여 router.js를 통해 각 페이지에서 load 후에 onClick에서 손쉽게 불러서 사용 가능
 *  + callback 추가도 onClick에서 손쉽게 가능 (예시는 최하단 참고)
 *
 *  ex)
 *  <button type="button" onClick="modalExample();"></button>
 * 
 * 위 마크업에서 버튼 클릭 시 모달 호출 가능
 */

{
  // $modal = 해당 모달 class 명

  const $modal = document.querySelector(".modal-data-table--example");
  const $wrapper = $modal.querySelector(".modal-wrapper");

  /*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
  /**
   *
   * depth : 모달 > Example
   * event : Modal show/hide toggle
   *
   */

  function modalExample(_callback) {
    $.modal({
      isExist: true,
      className: "data-table--example",
      on: {
        start() {
          // start callback(모달 생성 전)
        },
        complete() {
          // complete callback(모달 생성 후)

          if (_callback) _callback($wrapper);
        },
        close() {
          // execute close callback(모달 제거 후)
        },
      },
    });
  }
  /*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
}



/**
 * 
 * 
 * onClick 에서 실제 호출 시 Callback 예시
 * 
 * modalExample((_$wrapper) => {
 *   console.log("modal callback");
 * });
 * 
 * 
 */