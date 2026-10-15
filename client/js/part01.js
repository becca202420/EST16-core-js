const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];

// 1. navigation을 선택 후 이벤트 위임을 걸어주세요. (addEventListener, e.preventDefault())
/* navigation.addEventListener('click', (e) => {
    const targetLink = e.target.closest('a');

    if (targetLink) {
      e.preventDefault();
    }
  }); */

// 2. li들을 수집 (e.target, closest())
/* const allLi = document.querySelectorAll('li'); */

// 3. target에게 is-active 클래스 넣기 (elem.classList.add(), addClass())
/* allLi.addEventListener('click', (e) => {
  e.target.classList.add('is-active');
}); */

// 4. target을 제외한 나머지 li들에게는 is-active를 제거해야함 (elem.classList.remove(), removeclass())
/* allLi.addEventListener('click', (e) => {
  if (!target) {
    e.target.classList.remove('is-active');
  }
}); */

// 5. data-index

const visualImage = getNode('.visual img');
const navigation = getNode('.navigation');

const split = new SplitText('h3', { type: 'chars' });
console.log(split); // 글자가 다 쪼개진다. h3안에서도. => 애니메이션을 만들 수 있다.

function handleClick(e) {
  e.preventDefault();
  // event가 발생했을 때 그 타겟을 찾아야 합니다. console.log(e.target);으로,
  const index = target.dataset.index;
  visualImage.src = `./assets/part01/visual${index}.jpg`;
  visualImage.alt = data[index - 1].alt;

  const target = e.target.closest('li');
  if (!target) return;

  // removeClass를 모든 li에게 주고, target만 add해주는 방식을 사용
  for (const li of navigation.children) {
    // .children 사용, li는 변수일까 그냥 li일까...
    removeClass(li, 'is-active');
  }
  /* forEach ver.
  const children = [...navigation.children]; 진짜 배열로 먼저 만들어줘야 forEach 사용가능
  children.forEach((li) => removeClass(li, 'is-active'));
   */
  addClass(target, 'is-active');
}

gsap.from(split.chars, {
  opacity: 0,
  u: 30,
  immediateRender: false,
  ease: 'power3.inOut',
  stagger: 0.03,
  onComplete() {
    console.log('애니메이션 종료 시점');
  },
});

navigation.addEventListener('click', handleClick);
