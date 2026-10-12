/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// let calcAllMoney = function (a, b) {
//   return a + b;
// };
// calcAllMoney(1000, 2000);
// let calcAllMoney = (a, b) => console.log(arguments); // arrow function은 최근에 나온 기능이라 아직 arrow function과 arguments하고 같이 쓸 수 없음
// arguments 대신 : rest parameter
// 해당 기능을 이용하면 args 중에 하나를 빼고 싶을 때 빼놓고 출력할 수 있다. -> (a,...args), const _4000 = args[2]; ...
let total = 0;
let calcAllMoney = (...args) => {
  // 진짜 배열이 나오기 때문에 굳이 from같은걸로 유사배열을 바꿀 필요가 없습니다.
  //  == (...rest)

  // 1. for of 문을 사용해 모든 값의 합을 구하시오.
  //   for (const value of args) total += value;
  // 2. forEach문을 사용해 모든 값의 합을 구하시오.
  //   args.forEach(function (value) {
  //     total += value;
  //   });
  // 3. reduce를 사용하여 모든 값의 합을 구하시요.
  total = args.reduce((acc, cur) => acc + cur, 0); // total 앞에 return 쓰기도 가능.
  // let _calcAllyMoney = (...args) => args.reduce((acc,cur) => acc + cur, 0);

  return total;
};
calcAllMoney(1000, 2000, 3000, 4000, 5000, 6000, 7000);
/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/

// 화살표 함수와 this : 자바스크립트 세상에서 this는 어디에나 존재한다.
// 함수 안에서의 this.
function a() {
  console.log(this);
}
const _a = () => console.log(this);
// 둘 다 window가 출력되지만 방식이 다릅니다.
a();
_a();

// Ex)
const obj = {
  name: 'tiger',
  age: 30,

  sayHi: function () {
    console.log(this.name); // 여기에서 this는 해당 함수를 호출한 객체 obj를 가리킵니다.
  },
  _sayHi: () => {
    console.log(this); // 여기에서 this란 const obj의 상위 컨택스트인 window를 가리킵니다.
  },
  __sayHi() {
    console.log(this); // 일반함수처럼 취급이 되지만, constructor가 없음. 메소드로만 쓰기 위해 탄생했기 때문에 조상까지 알 필요가 없는 것.
  },
};

// 1. 일반 함수 : 나를 호출한 대상을 this로 삼는다. constructor 내장.
obj.sayHi(); // tiger 출력
// 2. 화살표 함수 : this자체를 바인딩하지 않는다. 상위 컨텍스트에서 가져올 뿐.
obj._sayHi(); // window 출력, constructor 비내장 (성능 최적화) -> 화살표 함수는 prototype을 내장하지 않기 때문에 빠르고 가벼움. 즉, 조상에 대한 내용이 없음. 독립적으로 존재하며 함수 역할만 함.
// 3. concise method
obj.__sayHi(); // this 출력은 일반함수와 같지만 성격이 다름 :  또한 prototype이 없음. this까지도 찾을 수 있고, 최적화도 된 가장 효율적인 방법입니다.

/* 그러나, 메서드 안에서 일반 함수를 쓰게 된다면 window가 나온다..
   결론 : 
   '객체 안에서' 메서드를 써야 하는 상황이 생긴다? 무조건 concise method 
   -> 그 메서드 안에서 함수를 또 써야 하는 일이 생긴다? 화살표 함수 (왜? this 때문에)
   그럼 일반함수는? : 간단한 유틸 함수를 쓸 때는 일반 함수 추천. 가장 함수처럼 딱 보이기 때문. 
*/
/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/

const user = {
  name: '이소망',
  total: 0,
  grades: [30, 50, 90],
  totalGrades() {
    // this.grades.forEach(function(grade) {
    //     console.log( this.total += grade);  // 메소드 안에 일반함수를 썼기 때문에 this는 window고 출력은 undefined가 됨!
    // })
    this.grades.forEach((grade) => {
      console.log((this.total += grade)); // forEach는 내부적으로 콜백함수를 받음.
    });
  },
};
user.totalGrades(); // 모든 정수 합

// forEach는 forEach(callbackFn), forEach(callbackFn, thisArg) 두번째는 optional로 두 가지 형태 사용가능.
this.grades.forEach(function () {
  this;
}, this); // thisArg의 this는 밖에서 받은 this이고, 함수 안의 this는 그 밖에서 받아온 this를 함수 안에 가져와서 사용하는 것입니다. this는 다 이어져있는 패턴이 있는 것으로 보이며 이것이 객체지향의 특징입니다.
/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
// prototype => constructor

// 자바스크립트의 함수 양면의 얼굴 : 함수는 두 가지 기능이 있음.
// 1. normal functions (일반 함수) => 리턴값을 명시
// 2. constructor function (생성자 함수) => 무조건 객체를 리턴함.

function sum(a, b) {
  return a + b;
}
function Sum(a, b) {
  // new 키워드를 쓸 때는 파스칼 케이스 즉 앞이 대문자인 형태를 사용하기로 한 관례가 있음.
  return a + b;
}
sum(1, 2);
const result = new Sum(1, 2); // 객체 sum{}가 출력됨. 생성자 함수처럼 리턴하는 것. 여기에서 result는 복제품으로 instance.
// 화살표 함수는 constructor로써 사용할 수 없음. new를 사용해도 에러가 뜸.

/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let total = 1;
  for (let i = 0; i < powerCount; i++) {
    total = total * numeric;
  }

  return total;
};

let _pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);
let __pow = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(null) // fill()은 배열 뒤에 하나 더 추가하는거
    .reduce((acc) => {
      return acc * numeric;
    }, 1);
};

// repeat(text: string, repeatCount: number): string;
let repeat = (message, repeatCount) => {
  let result = '';

  for (let i = 0; i < repeatCount; i++) {
    result += message;
  }

  return result;
};

let _repeat = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      return acc + text;
    });
};
