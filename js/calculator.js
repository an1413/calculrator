const $reset_btn = document.querySelector('.clear');
const $btns = document.querySelector('.buttons');
const $output = document.querySelector('#output');
const output_arr = []; // 저장하기

// btn 클릭시 작동되는 함수
$btns.addEventListener('click', (e) => {
  let what_btn = e.target.value;
  if (what_btn === "=") {
    try {
      // 결과 계산 및 출력
      const result = eval($output.value);
      $output.value = result;
      output_arr.length = 0;
      output_arr.push(result.toString());
    } catch (error) {
      // 오류 발생 시 처리
      $output.value = "Error";
      output_arr.length = 0;
    }
  } else if (what_btn === "AC") {
    // AC 버튼 클릭 시 초기화
    $output.value = "0";
    output_arr.length = 0;
  } else if (what_btn === "+/-") {
    // +/- 버튼을 누를 때 부호 변경
    if (output_arr.length > 0) {
      if (output_arr[0] === "-") {
        output_arr.shift(); // 배열에서 부호 제거
      } else {
        output_arr.unshift("-"); // 배열의 맨 앞에 부호 추가
      }
      $output.value = output_arr.join('');
    }
  } else {
    output_arr.push(what_btn);
    $output.value = output_arr.join('');
  }
});
