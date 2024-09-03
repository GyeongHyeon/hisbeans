
const myLink = document.getElementById('myLink');
const keyword = 'hisbeans'; // 패스워드

myLink.addEventListener('click', (event) => {
  event.preventDefault(); // 기본 링크 이동 방지

  const inputValue = prompt('키워드를 입력하세요.');

  if (inputValue === keyword) {
    window.location.href = myLink.href; // 링크로 이동
  } else {
    alert('키워드가 일치하지 않습니다.');
  }
});
