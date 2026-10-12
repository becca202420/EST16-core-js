/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  //   return a + b + c + d + e + f + g;
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 : arguments
  console.log(arguments); // 유사배열 출력됨.
  let total;
  //   for (let i = 0; i < arguments.length; i++) {     // 1. for문을 사용한.
  //     total = total + arguments[i];
  //   }
  //   for (const value of arguments) {       // 2. for...of문을 사용한.
  //     total += value;
  //   }
  //   return total;
  // 유사 배열을 진짜 배열로 만듦. call을 사용하여 slice를 빌려옴. 왜?
  const arr = Array.prototype.slice.call(arguments); // array instance method
  const arr = Array.from(arguments); // array static method

  console.log(arr);

  const arr = [...arguments];
  arr.forEach(function (value, index) {
    console.log(value, index); // arr안의 아이템들을 출력
  });
};

// prototype 변경하기

// return total
arguments.__proto__ = Array.prototype; // 던더 : 언더바 2개 사용

const result = calculateTotal(10000, 23500, 38400, 19900, 18700, 29800, 9900);
console.log(result);

// reduce는 초깃값을 설정하지 않으면 배열의 첫 번째 값을 acc에 할당합니다. reduce는 어떤값이든 값을 내보낼 수 있습니다.
return arr.reduce(function (acc, current) {
  // forEach는 원래 값을 내보내지 않습니다. void. 그렇기 때문에 변수하고 같이 쓸 수 밖에 없음.
  return acc + current;
}, 0);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (condition, success, fail) {
  // const success = function(){ console.log)'성공입니다.'); }
  // const fail = function(){ console.log('실패입니다.'); }
  if (condition) success();
  else fail();
};

cb(
  true,
  function () {
    console.log('성공입니다.');
  },
  function () {
    console.log('실패입니다.');
  }
);

// 함수 선언문 vs. 함수 (표현)식

//그래서 콜백 함수를 왜 쓴느거야? 뭐가 좋은거지?
function movePage(url, success, fail) {
  if (url.includes('https')) {
    //제대로된 url
    success(매개변수url);
  } else {
    //이상한 url
  }
}
// 위 변수를 사용해서 다른걸 만들고 싶어. 할 때... 위에서 변수를 가져와 아래에서 다양한 동작/여러 function을 만들 수 있음?
// 콜백을 사용하는 이유 : 함수 안쪽의 변수를 바깥쪽에서 사용하기 위해
movePage(
  'https://www.naver.com',
  function (매개변수url) {
    console.log(
      '현재 입력하신 url은 ${변수}입니다. 3초 뒤 해당 사이트로 이동합니다.'
    );
  },
  function () {
    console.log('잘못된 url 정보를 입력하셨습니다.');
  }
);

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression : 함수를 만들고 바로 실행. 함수 이름이 없음.
// 클로져 closure 폐쇄 와 연결됨. 클러져에서는 IIFE를 사용할 수 밖에 없음.
let IIFE;
// IIFE가 필요한 이유 : encapsulation/캡슐화를 위해서
const master = (function () {
  var uuid = 'afdafdasfas';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();

console.log(master);
