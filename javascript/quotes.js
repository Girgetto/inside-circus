const buttonLeft = document.getElementById('arrow-left');
const buttonRight = document.getElementById('arrow-right');
const div1 = document.getElementById('quote1');
const div2 = document.getElementById('quote2');
const div3 = document.getElementById('quote3');
const img = document.getElementById('quote-container');
const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');
const arr = [div1, div2, div3];
const balls = [ball1, ball2, ball3];
let index = 0;

buttonLeft.addEventListener('click', () => {
  arr[index].classList.toggle('active');
  arr[(arr.length - 1 + index) % 3].classList.toggle('active');
  index--;
  if (index < 0)index = 2;
});

buttonRight.addEventListener('click', () => {
  arr[index].classList.toggle('active');
  arr[(arr.length + 1 + index) % 3].classList.toggle('active');
  index++;
  if (index > 2)index = 0;
});

img.addEventListener('click', () => {
  arr[index].classList.toggle('active');
  arr[(arr.length + 1 + index) % 3].classList.toggle('active');
  index++;
  if (index > 2)index = 0;

  for (bi = 0; bi < balls.length; bi++) {
    if (balls[bi].classList.contains('fas')) {
      balls[bi].classList.remove('fas');
      balls[bi].classList.add('far');
    }
  }

  balls[index].classList.add('fas');
});
