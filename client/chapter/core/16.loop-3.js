/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

// let j = 0;
// while (j < 10) {
//   i++;

//   if (j % 2 == 0) {
//     continue;
//   }
//   alert(j);
// }

// for (let p = 0; p < 10; p++) {
//   console.log(p);
// }

let p = 0;

for (; p < 10;) {
  console.log(p++);
} // while문하고 비슷해짐.

for (let i = 0; i < l; i++) {
  const value = frontEndDev[i].toLowerCase();
  //   if (frontEndDev[i] === 'SVG' || frontEndDev[i] === 'jQuery') {
  //     continue;
  //   }
  if (value.includes('jquery') || value.includes('svg')) {
    continue;
  }

  console.log(value);
}

console.clear();

for (let i = 0; i < l; i++) {
  console.log(frontEndDev.pop());
}

console.log(frontEndDev);
