// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함

try {
  // 아니 이렇게 코드쓴느 사람이 어딨음?
  /*
    1. 유저 정보를 서버에서 가져와야함
    2. 가져온 유저 정보를 화면에 출력
    */
  // 유저정보 가져오기()
  // 가져온 정보를 가지고 화면 출력하기()

  const user = JSON.parse(data);

  if (!user.value) {
    throw new ReferenceError('해당 키 값은 존재하지 않습니다.');
  }
} catch (message) {
  console.dir(message);
}
