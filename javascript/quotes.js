const buttonLeft = document.getElementById('arrow-left');
const buttonRight = document.getElementById('arrow-right');
const div1 = document.getElementById('quote1');
const div2 = document.getElementById('quote2');

buttonLeft.addEventListener('click', () => {
  if (div1.classList[1] === 'active') {
    div1.classList.toggle('active');
    div2.classList.toggle('active');
  } else {
    div1.classList.toggle('active');
    div2.classList.toggle('active');
  }
});

buttonRight.addEventListener('click', () => {
  if (div1.classList[1] === 'active') {
    div1.classList.toggle('active');
    div2.classList.toggle('active');
  } else {
    div1.classList.toggle('active');
    div2.classList.toggle('active');
  }
});
