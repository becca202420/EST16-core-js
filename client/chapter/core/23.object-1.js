/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;
// 객체로 다시 쓴 ver.
const dialog = {
  /* css */
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-${position.x}px, -${position.y}px',
};
// -----------------------------------------------------------------------
// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;

// -----------------------------------------------------------------------
// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uuid: crypto.randomUUID(),
  name: 'tiger',
  email: 'seonbeom@gmail.com',
  isSignIn: true,
  perission: 'paid', // paid | free
};
// -----------------------------------------------------------------------

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

const keys = Object.keys(authUser);

function getKeys(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key) && !excludes.includes(key)) {
      arr.push(key); // push는 안전하지 않음 hasOwn을 사용하지 않으면??
    }
  }

  return arr;
}

// 객체의 value들을 모아서 배열로 반환하는 함수
function getValues(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj[key]);
    }
  }

  return arr;
}

// Object.entries
function getEntries(obj, key) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push([key, obj[key]]);
    }
  }

  return arr;
}
// -----------------------------------------------------------------------

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제 :
/* 
제거는(remove) vs 제거는(delete)
    비워두기       메모리 없음
1. removeProperty(authUser, 'name');
2. authUser.name = null
*/
function removeProperty(obj, key) {
  if (typeof obj === 'object') {
    obj[key] = null;
  } else {
    throw new Error(
      'removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.'
    );
  }
}
// 위의 typeof obj === 'object'를 더 정확한 타입비교로 만들자.
Object.prototype.toString
  .call(() => {})
  .slice(8, -1)
  .toLowerCase() === 'object'; // 빌려써야하기 때문에 call을 사용, slice로 딱 typeof 이름만 추출

// -----------------------------------------------------------------------
// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;
//기존 데이터를 가지고 새로운 객체를 만들자!
const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
const arr = [10, 100, 1000, 10_000, 100_000];

// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[3];
// const [] = arr; 가 기본 문법.

// 순서(order)를 바꿀 수 없음. 변수명은 내 마음대로 가능.
const [a1, _, a3, a4, a5, a6 = 999] = arr;
console.log(a6);
/* 
let a1 = 10;
let a3 = 1000;
let a6; 와 같음... a6은 default값을 설정한 것. 
100은 건너뛴 것. 언더스코어는 내가 쓰지 않기로 한 것을 의미.
*/
const [first, second, third] = document.querySelectorAll('span');
console.log(third);

second.addEventListener('click', function () {
  this.style.color = 'orange';
});

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
const salaries = {
  이소망: 330,
  박소연: 550,
  이유정: 130,
  김효경: 60,
  조민지: 400,
  임규진: 400,
};
const 이소망 = salaries.이소망;
const 박소연 = 10;
// 데이터 추출 : salaries.이소망, salaries.박소연.... 식으로

// - 네이밍을 마음대로 지을 수 없습니다. -> 해결방법은 별칭(alias) 만들기.
const {
  박소연: 카페알바생,
  이소망: 투머치토커,
  이유정: 아픈사람,
  김효경: 쎈언니,
  신재훈: 닭강정킬러,
  안경찬 = 30,
  ...나머지
} = salaries; // 순서는 상관없음. 값이 없어도 default값과 alias도 설정가능
console.log(이소망); // 장점은 'salaries.'까지 쓸 필요가 없어짐
console.log(카페알바생);
console.log(신재훈);
console.log(닭강정킬러);

const newObj = {
  조민지,
  임규진,
}; // salary가 400으로 똑같기 때문에 따로 빼서 객체로 만들었지만, 위에 '...나머지'를 써도 둘이 합쳐진 객체를 만들 수 있다. 이름 지정은 자유.

const { log: g } = console;
const { alert: message } = window;

function createUserObject(obj) {
  /*
obj = {
    age:30,
    name: 'tiger',
    job: '강사',
    gender: 'male',
    address: '남양주시'
}
*/
  const { name, age, job, gender, address } = obj; // 전달해야 할 정보가 많을 경우 유용. 더 자유롭게 사용 가능.

  return { name, age, job, gender, address };
}

createUserObject({
  age: 30,
  name: 'tiger',
  job: '강사',
  gender: 'male',
  address: '남양주시',
});
