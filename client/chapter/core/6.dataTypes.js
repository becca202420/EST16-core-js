/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty); // object라고 뜨는만 null이다.

// 2. 값이 할당되지 않은 상태
let undef;
console.log(undef);
console.log(typeof undef);
console.log(typeof typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let single = 'hello';
let double = 'tiger';
let backtick = 'hi';

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 1.23;

console.log(typeof intger);
console.log(typeof floatingPointNumber);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;
console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;
console.log(isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {};
console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
const key1 = Symbol('uuid');
const key2 = Symbol('uuid');    // 서로 다르다고 인식함. unique/고유. library같은 곳에 많이 쓰임. 

const a = 'hello';
const b = 'hello';

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
const user = {
    name: 'becca',
    age: 22,
    sayHI: function() {
        return 'Hellllooo'
    }
}

// Array
const arr = [function(){}, {name:'becca'},{1,2,3},4,'hello']

// function
function c () {
    console.log(1*2*3);
}

c() // 함수 실행. 


function c (a,b){
    console.log(a+b*3)
}

c(1,2) // 함수 재료 사용.

const result = c(1,2);  // 내보내려면 return을 사용해야.

// this
