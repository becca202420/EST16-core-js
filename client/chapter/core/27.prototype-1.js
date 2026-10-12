/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
const animal = {
  // 1. main
  legs: 4,
  tail: true,
  getEat() {
    return this.stomach;
  },
  setEat(food) {
    this.stomach = [];
    this.stomach.push(food); // 배열 먼저 만들어줘야 push 사용가능
  },
};

for (const key in animal) {
  console.log(key);
}

// Object.defineProperty(animal,'sleep;), {
//     get() {
//       return true;
//     },
//     enumerable: false
// })

const blackCat = {
  // 2. 좀 더 specific
  pattern: '고양이 무늬',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return '${target}에게 조용히 접근 후 먹는다.';
  },
  __proto_: aniaml,
};

// 백두산고양이.__proto__ = blackCat
const 백두산고양이 = {
  // 3. 더 specific
  name: '효냥이',
  color: 'black',
  __proto__: blackCat,
}; // 공장처럼 여러 개 만들 수 있음.
// -----------------------------------------------------------------------

// 생성자 함수
function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

function Tiger(name) {
  Animal.call(this); // ????
  this.name = name;
  this.pattern = '호랑이무늬';
  // 생성된 instance들만 사용할 수 있는 매서드입니다.
  this.hunt = function (target) {
    this.pray = target;
    return '${target}에게 조용히 접근합니다.';
  };
}
// 누구나 사용할 수 있는매서드 입니다.
Tiger.bark = function (sound) {
  return sound;
}; // 사용방법: Tiger.bark('왈왈!');
/* 
_tiger는 인스턴스
_tiger.bark()를 사용할 수 없음. 그러나, 빌려오기를 사용하면 사용가능
_tiger.getEat 가능. Tiger.getEat은 불가능.. 왜냐하면 getEat은 Animal을 통해 생성된 객체들만 사용할 수 있기 때문
*/
Animal.bark = function (target, sound) {
  return '${targer}는 가끔 ${sound} 이런 소리를 냅니다.';
};

const _animal = new Animal();
const _tiger = new Tiger('호돌이');
console.log(_animal, _tiger); // 그러나 tiger가 꼬리를 가지고 있는지, 다리가 몇 개 인지는 알 수 없음.

Tiger.prototype = _animal; // 위의 해결방법. 대량생산이 가능해짐.
// -----------------------------------------------------------------------
/* 
1. f.call  : 함수를 대신 "실행"시켜준다. this를 custom가능. 인수 : , , ,
2. f.apply : 함수를 대신 "실행"시켜준다. this를 custom가능. 인수 : [, , ,]
3. f.bind  : 함수를 대신 실행하지X. this custom가능.       인수 : , , ,
*/
function sum(a, b) {
  // a=1, b=2
  console.log(this); // this = "hello"
  return a + b;
}
const a = sum.call('hello', 1, 2); // this를 먼저 인수로 받게 설계되어 있음.

const b = sum.apply('hello', [1, 2]); // 배열로 받는다.

const b = sum.bind('hello', 1, 2); // b() 이런식으로 함수로 실행가능.
// -----------------------------------------------------------------------
let count = 0;

span.addEventListener('click', function () {
  this.style.color = 'orange';
  // console.log('클릭했습니다!', count++);
});

span.onclick = function () {
  alert('감사합니다.');
};
