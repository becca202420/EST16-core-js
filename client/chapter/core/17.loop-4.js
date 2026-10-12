/* ---------------- */
/* For In Loop      */
/* ---------------- */

const JS = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2026,
};

console.log('creator' in JS); // 객체 안에 구성 확인하는 방법. 중요.
console.log('toString' in JS); // 없는걸 물어본다면 chaining이 일어남. 본인에게는 없지만, 조상의 프로토타입(엄마,할아버지).... 위로위로 올라가 계속 물어보는 것.
Object.prototype.nickName = 'tiger';

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(JS.hasOwnProperty('nickName'));
console.log(Object.prototype.hasOwnProperty.call(JS, 'nickName')); // 위와 다르게 에러가 일어나지 않음.
//      ==  객체의  능력 사용   속성 있어?     빌려쓴다 JS객체가 nickName속성이 있는지.
//      ==  JS.hasOwnProperty('nickName');
console.log(Object.hasOwn(JS, 'nickName')); // 더 좋은 명령어. 위의 것은 쓰기 어려워서 새로 생긴것.

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

for (const key in JS) {
  // console.log(key);   // for문을 사용하여 JS 안에 있는걸 각각 모두 출력함. 그러나 원본이 훼손된 형태를 출력함.
  if (Object.hasOwn(JS, key)) {
    // 위의 해결 방법임.
    console.log(key);
  }
}
// 객체의 key가 아닌 value에 접근하는 방법 (key : value) :
for (const key in JS) {
  if (Object.hasOwn(JS, key)) {
    const value = JS[key];
    console.log(key, value);
  }
}
/* 
정리 :
for..in문은 객체의 key,value를 반복 처리할 때 사용가능함. 근데, 그냥 조회를 하면
조상의 값까지 조회가 됩니다. => 위험
for..in을 쓰지만 내부적으로 hasOwn 값이 써서 안전하게 정말 내가 가지고 있는 
값만 조회가 볼 수 있도록 합니다. 
*/
// JS['createAt'] 대괄호를 사용해야 하는 이유 :
// const value = JS.key; 는 JS.key = undefined를 넣는다는 뜻이기 때문에 대괄호를 사용하도록 합니다,.

// - 배열 객체 순환에 사용할 경우?

const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
  // Object.has
  console.log(tens[key]); // 10, 100, 1000, 10000
}
// for..in은 객체에서만...?
