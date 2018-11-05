const buttonLeft = document.getElementById('arrow-left');
const buttonRight = document.getElementById('arrow-right');
const div1 = document.getElementById('quote1');
const div2 = document.getElementById('quote2');
const div2 = document.getElementById('quote3');
const imgA = document.getElementById('img-alberto');
const imgE = document.getElementById('img-emilio');
const imgI = document.getElementById('img-ignacio');
const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');

buttonLeft.addEventListener('click', () => {
  div1.classList.toggle('active');
  div2.classList.toggle('active');
});

buttonRight.addEventListener('click', () => {
  div1.classList.toggle('active');
  div2.classList.toggle('active');
});

imgA.addEventListener('click', () => {
  div1.classList.toggle('active');
  div2.classList.toggle('active');
  ball1.classList.remove('far');
  ball1.classList.add('fas');
  ball2.classList.remove('fas');
  ball2.classList.add('far');
});

imgE.addEventListener('click', () => {
  div1.classList.toggle('active');
  div2.classList.toggle('active');
  ball1.classList.remove('fas');
  ball1.classList.add('far');
  ball2.classList.remove('far');
  ball2.classList.add('fas');
});
