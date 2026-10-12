/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  legs = 4;
  stomach = [];
  tail = true;

  static defaultOptions = {
    // class 밖에 쓰면 전역이 오염됨??
    version: '0.1.1',
    company: '8b-studio',
    ceo: '심선범',
  };

  // private field (비공개 멤버)
  #nickName = 'unknown';

  constructor(name) {
    this.name = name;
    console.log(this.#nickName);
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const animal = new Animal('몽실이');

// -----------------------------------------------------------------------

// 부모의 것이 상속이 되는 class
class Tiger extends Animal {
  pattern = '호랑이 무늬';

  constructor(name, pattern = '호랑이 무늬') {
    // 위의 Animal의 constructor와 연결됨.
    super(name);

    this.pattern = pattern;
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    //static이라고 정의하면 생성자만 사용가능.
    return sound; //tiger.bark는 쓸 수 없음...
  }
}

const tiger = new Tiger('호돌이');
