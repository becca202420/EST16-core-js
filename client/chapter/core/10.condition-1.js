/* ---------------- */
/* Condition        */
/* ---------------- */

const result = prompt('자바스크립트의 공식 이름은 무엇일까요?');
if (result === 'ECMAScript') {
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? ECMAScript입니다!');
}

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('너 영화 봤니?');
  // 영화 볼거니?
  let goingToWatchMovie;

  if (didWatchMovie) {
    console.log('재밌었어?');
  } else {
    goingToWatchMovie = comfirm('영화 볼거니?');
  }
}

// 간단한 삼항식
let didWatchMoive = 'no';
let goingToWatchMovie = 'yes';

let result = didWatchMoive.includes('no')
  ? value1
  : goingToWatchMovie.includes('yes')
    ? value2
    : value3;

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
