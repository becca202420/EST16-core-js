/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAdress =
  emailAddress === undefined || emailAddress === null
    ? 'user@compaany.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? 'user@compnay.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '100px';
const isActive = false;
const empty = '';

console.log(0 || WIDTH);
console.log(0 ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log('' || WIDTH);
console.log('' ?? WIDTH);

function sum(a, b) {
  b = b ?? 0;
  return a + b;
} // if (b===undefined || b===null) 같은 것.

/*
a ||= b : a가 false일 때 b의 값을 a에 할당.
a = a || b

a &&= b : a가 true일 때 b의 값을 a에 할당. 
a = a && b

a ??= b : a가 undefined, null일 때 b의 값을 a에 할당 
a = a ?? b
*/
