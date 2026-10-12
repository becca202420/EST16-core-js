/* --------------- */
/* For Of Loop     */
/* --------------- */

// enumerable => 열거 가능한 : 안에 뭐가 있는지 확인 가능한
// iterable => 반복 가능한
// mutable => 변형 가능한
// immutable => 변형 할 수 없는

// for...of 배열에서 쓸 수 있는 반복문 X
// for...of iterable한 요소에 사용할 수 있는 반복문.

/* 
배열의 특징
- 쉼표 구분
- 인덱스를 가지고 있다.
- 길이(length)가 있다. 
*/

const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
}; // 다음은 객체입니다. 이유는 일단 중괄호를 가지고 있습니다. 유사배열이라고 부릅니다. 실제 배열은 아닙니다. Prototype을 보면 알 수 있음.

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기

for (const value of languages) {
  const name = value.name;

  if (name.includes('Java') && name.length < 5) continue; // JavaScript를 말한것.

  console.log(name);
  console.table(value); // console.table을 사용하면 객체의 key, value가 더 깔끔하게 나오기 때문에 데이터가 많으면 사용 권장합니다.
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

const obj = {
  nickName: 'tiger',
  age: 30,
};
// 객체의 순환 for...in을 써야함.. 문제가 있음 : 조상의 아이템
// hasOwn... 사용하면 해결이 됨.
// for..of는 그런거 필요없음.
// for...of를, 쓰려면 iterable한 요소여야 사용이 가능함
// 그럼 객체를 배열로 바꿔버려야 !!!!!!!!!!!

const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열을 '반환'하는 유틸 함수
// ['nickName', 'age']

for (const key of keys) {
  // console.log(key);
}

// Object.values()
const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 '반환'하는 유틸 함수
// ['tiger', '30']

for (const value of values) {
  //   console.log(value);
}

// Object.entries()
const entries = Object.entries(obj); // 객체의 key, value를 모아 한 쌍의 배열로 '반환'하는 유틸 함수
// [key,value], [key,value]

// console.log(entries);

for (const keyValue of entries) {
  const key = keyValue[0];
  const value = keyValue[1];

  console.log(keyValue); // 2개의 배열이 출력됨. 배열이 많았다면, 더 많은 배열이 출력됨 반복문으로써.
}
// 구조 분해 할당으로 위와 같음.
for (const [key, value] of entries) {
}

// 점수가 80점 이상인 과목만 콘솔창에 출력해주세요.
const scores = {
  html: 90,
  css: 75,
  javascript: 85,
  react: 60,
};
// const _keys = Object.keys(scores);
// const _values = Object.values(scores);
// for (const _key of _keys) {
//   if (_values < 80) continue;
//   console.log(_keys);
// }
for (const [subject, score] of Object.entries(scores)) {
  //   const subject = keyValue[0]; // key
  //   const score = keyValue[1]; // value

  if (score >= 80) {
    console.log(subject, score);
  }
}

// 객체의 키, 값 순환
// - for ~ in 문
for (const key in randomUser) {
  if (Object.hasOwn(randomUser, key)) {
    const L1 = randomUser[key];
    console.log(L1);

    if (typeof L1 === 'object') {
      for (const key in L1) {
        if (Object.hasOwn(L1, key)) {
          const L2 = L1[key];

          console.log('\t', L2);

          if (typeof L2 === 'object') {
            for (const key in L2) {
              if (Object.hasOwn(L2, key)) {
                const L3 = L2[key];

                console.log('\t\t', L3);
              }
            }
          }
        }
      }
    }
  }
}

// - for ~ of 문
for (const [key, value] of Object.entries(randomUser)) {
  // const key = keyValue[0];
  // const value = keyValue[1];
  console.log(value);

  if (typeof value === 'object') {
    for (const keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];
      console.log('\t', value);

      if (typeof value === 'object') {
        for (const keyValue of Object.entries(value)) {
          const key = keyValue[0];
          const value = keyValue[1];
          console.log('\t\t', value);
        }
      }
    }
  }
}

// - 성능 비교 진단
