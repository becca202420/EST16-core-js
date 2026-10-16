// // 1. input 선택하기
// // 2. input 이벤트 바인딩
// //    -addEventListener('input')
// // 3. input value값 가져오기
// // 4. 숫자 더하기
// // 5. result에 출력하기

// // import { getNode, getNodes } from './lib/dom/getNode.js';
// // import { insertLast } from './lib/dom/insert.js';
// // import { clearContent } from './lib/dom/clearContent.js';

// import {
//   attr,
//   addClass,
//   insertClass,
//   removeClass,
//   getNode as $,
//   clearContent,
// } from './lib/dom/index.js'; // 한꺼번에 원하는 것만 import 가능.

// // export의 종류 :
// /* 1. named export => import { 함수이름/변수이름 } from '경로설정'
//    - 이름이 있음, 내보내는 곳과 받는 곳의 이름이 같아야 함.
//    - alias를 설정할 수 있음. ex. import { getNode as $ }로 하면 getNode는 사용못하고 $로만.. */
// /* 2. default export =>
//    - 내보낼 때, export default function ... 아니면 아래에 따로 'export default 함수이름'을 합니다.
//    - 받을 때 중괄호 없이, import clearContent from '경로설정'을 합니다.
//    - 이름이 없는 아이이기 때문에 받을 때 as없이 바로 import $ from '경로설정'이 가능합니다.
//    - 내가 이름을 지을 수 있기 때문에 편안하게 남의 함수도 내 함수처럼 사용이 가능합니다. */

// function phase1() {
//   const first = getNode('#firstNumber');
//   const second = getNode('#secondNumber');
//   const result = getNode('.result');
//   const clear = getNode('#clear');

//   function handleInput() {
//     const firstValue = Number(first.value);
//     const secondValue = +second.value;
//     const total = firstValue + secondValue;

//     result.textContent = '';
//     insertLast(result, total);
//   }

//   function handleClear(e) {
//     e.preventDefault();
//     clearContent(first);
//     clearContent(second);
//     clearContent(result);

//     first.focus();
//   }

//   first.addEventListener('input', handleInput);
//   second.addEventListener('input', handleInput);
//   clear.addEventListener('click', handleClear);
// }

// phase1();

// function phase2() {
//   // const first = getNode('#firstNumber');
//   // const second = getNode('#secondNumber');
//   const calculator = getNode('.calculator');
//   const result = getNode('.result');
//   const clear = getNode('#clear');
//   const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

//   function handleInput() {
//     const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

//     result.textContent = '';
//     insertLast(result, total);
//   }

//   function handleClear(e) {
//     e.preventDefault();
//     console.log(numberInputs);

//     numberInputs.forEach((elem) => (elem.value = ''));
//     result.textContent = '-';
//   }

//   calculator.addEventListener('input', handleInput);
//   clear.addEventListener('click', handleClear);
// }
/*-----------------------------------------------------------------*/

// module을 적극적으로 사용하여 만들어주세요.

// 1. 주접 떨기 버튼을 클릭하는 함수
// 2. input값 가져오기
// 3. data 함수에서 주접 1개를 꺼내기
// 4. result에 렌더링 하기
// 5. 예외처리 : 이름이 없을 경우, 숫자만 들어올 경우 예외 처리.

import { getNode as $ } from './lib/dom/getNode.js';
import jujeobData, { data } from './data/data.js';
import { insertLast } from './lib/dom/insert.js';
import { getRandom } from './lib/math/getRandom.js';
import { showAlert } from './lib/dom/showAlert.js';
import { shake } from './lib/animation/shake.js';
import { clearContent } from './lib/dom/clearContent.js';

const nameField = $('#nameField');

// function doJujeob(name) {
//   const jujeob = jujeobData(name);
//   return jujeob;
// }

// doJujeob();

const submit = $('#submit');
const result = $('.result');

function doJujeob(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replaceAll(' ', '') === '') {
    showAlert('.alert-error', '공백은 허용되지 않습니다.');
    shake(nameField);
    return;
  }

  if (!isNaN(Number(name))) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요.');
    shake(nameField);
    return;
  }

  clearContent(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', doJujeob);
result.addEventListener('click', handleCopy);
