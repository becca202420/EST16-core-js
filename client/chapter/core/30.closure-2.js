function earth() {
  // water와 gravity라는 변수를 또 아무나 접근하게 하지 못하게 함으로써 캡슐화/encapsulation도 가능하다.
  let water = true;
  let gravity = 10;

  function tiger(data) {
    // 밖으로 유배됐지만, 태어났던 지구를 기억함.
    // return [water, gravity]; // UFO에게 정보를 알려줌.

    gravity = data; // 심지어 그 기억한 정보를 조절할 수 있음. (값을 변경할 수 있음)
    return gravity;
  }

  return tiger;
}

const UFO = earth();
UFO(30); // 실제로 UFO가 값을 바꾸는게 아니라, UFO가 tiger에게 시켜서 tiger가 바꾸는 것
// -----------------------------------------------------------------------
// 근데 어따 씀??

const button = document.querySelector('button');

// let isClicked = false; // 전역 오염이 됨 !!

function handleClick() {
  let isClicked = false;

  return () => {
    // 해결방법
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = '';
    }

    isClicked = !isClicked;
  };
}

button.addEventListener('click', handleClick); //handleClick()은???
button.addEventListener('click', handleClick()); //해결방법 이후로는 이렇게 써야???
/*왜냐면 이벤트 리스너의 2번째 인자는 콜백함수를 받는데 거기에 실행한 결과를 넣는다는 
  행위 자체가 이상할 수 있다. 원래 함수 자체를 주는 칸이기 때문. 
*/

// 즉시 실행 함수로 만들기.
const _handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = '';
    }

    isClicked = !isClicked;
  };
})(); // 마지막 괄호는 실행이라는 뜻..

// -----------------------------------------------------------------------
// useState란?? 기본문법? : const [state, setState] = useState(initialState);
function useState(init) {
  // 캡슐화 됨??
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

state()[0]();
state()[1]('aa');

// const value = state('hello')[0]; // ???
// const setValue = state()[1];

const [value, setValue] = useState('hello');

value(); // 값 읽기
setValue(); // 값 쓰기
