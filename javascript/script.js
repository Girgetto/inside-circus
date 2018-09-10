var imagesArr  = document.querySelectorAll('.carasImages');
var buttonArr = document.querySelectorAll('.caras');
var activeID;
var activeImg;
var bool = true;
var i = 0

buttonArr.forEach(one => {
  one.onclick = function(){
    bool = false;
    buttonArr.forEach(one => {
      one.classList.remove('activeBut');
    });
    one.classList.add('activeBut')
    activeID = one.getAttribute('id')[one.getAttribute('id').length-1];
    imagesArr.forEach(one=>{
      one.classList.remove('active')
      one.getAttribute('id')[one.getAttribute('id').length-1] === activeID ? activeImg = one: activeImg = activeImg;
    })
    activeImg.classList.add('active')
    setTimeout(() => {
      bool = true;
    }, 6*1000);
  }
});

setInterval(() => {
  if (bool) {

    buttonArr.forEach(one => {
      one.classList.remove('activeBut');
    });
    
    imagesArr.forEach(one=>{
      one.classList.remove('active')
    });
    
    imagesArr[i].classList.add('active');
    buttonArr[i].classList.add('activeBut')
    
    if (i===imagesArr.length-1) {
      i = 0
    } else {
      i++;
    }
  }
}, 1000*3);