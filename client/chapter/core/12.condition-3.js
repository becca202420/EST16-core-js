/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = prompt('몇 시 인가요?');

switch (thisTime) {
  case '아침':
    alert('뉴스 기사 글을 읽는다.');
    break;

  case '점심':
    alert('자주 가는 식당에 가서 식사를 한다.');
    break;

  case '저녁':
    alert('동네 한바퀴를 조깅한다.');
    break;

  case '밤':
    alert('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case '심야':
  case '새벽':
    alert('한 밤중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === '아침') {
  ('뉴스 기사 글을 읽는다.');
} else if (thisTime === '점심') {
  ('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === '저녁') {
  ('동네 한바퀴를 조깅한다.');
} else if (thisTime === '밤') {
  ('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === '심야' || thisTime === '새벽') {
  ('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */
function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay() {
  const whatDate = getRandom(7);

  switch (whatDate) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

function weekend() {
  const today = getDay();

  //   if (today.includes('토') || today.includes('월')) {
  //     return '오늘은 $(today)요일입니다. 그러므로 주말입니다.';
  //   } else {
  //     return '오늘은 $(today)요일입니다. 그러므로 평일입니다.';
  //   }

  const value =
    today.includes('토') || today.includes('일')
      ? '오늘은 $(today)요일입니다. 그러므로 주말입니다.'
      : '오늘은 $(today)요일입니다. 그러므로 평일입니다.';
  //   return value;
}
