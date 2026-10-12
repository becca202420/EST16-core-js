/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
// 논리곱 할당 연산자
// a &&= b;
// a = a&&b와 같다.

// 논리합(또는) 연산자
let AorB;
// 논리합 할당 연산자
// a ||= b;

// 부정 연산자
let reverseValue = !!value; // 느낌표 두 개는 자동형 변환입니다.

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false;
se || '' || [2, 3].length || { thisIsTruthy: true }; // 2가 출력됨.

// let begin = prompt('누구십니까?');
// if (begin == 'Admin') {
//   let password = prompt('비밀번호를 입력해주세요.');
//   const _password = password.toLowerCase().trim();
//   if (_password == 'TheMaster') {
//     alert('환영합니다!');
//   } else if (!_password || _password == '') {
//     alert('취소되었습니다.');
//   } else {
//     alert('인증에 실패하였습니다.');
//   }
// } else if (!begin) {
//   alert('취소되었습니다.');
// } else {
//   alert('누구인지 모르겠습니다.');
// }

// const userName = prompt('누구십니까?');
// alert(userName);

// if (userName == 'Admin') {
//   alert(userName);
//   const password = prompt('비밀번호를 입력해주세요.');
//   const _password = password.toLowerCase().trim(); // userName.replace(/|s*/g,'') === '' 도 trim 대신 가능.

//   if (_password === 'TheMaster') {
//     alert('환영합니다!');
//   } else if (_password === null) {
//     alert('취소되었습니다.');
//   } else {
//     alert('인증에 실패하였습니다.');
//   }
// } else if (userName === null) {
//   alert('취소되었습니다.');
// } else {
//   alert('누구인지 모르겠습니다.');
// }
