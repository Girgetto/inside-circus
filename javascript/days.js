var allDays = document.querySelectorAll('.days');
var dayButtons = document.querySelectorAll('.days-but');
var allDashes = document.querySelectorAll('.days-dash ');
var activeId;
var activeDay;
var activeDash;

dayButtons.forEach(one => {
  one.onclick = function() {
    dayButtons.forEach(one=>{
      one.classList.remove('activeBut')
    })

    one.classList.add('activeBut')
    activeID = one.getAttribute('id')[one.getAttribute('id').length-1];

    allDays.forEach(one=>{
      one.classList.remove('active')
      one.getAttribute('id')[one.getAttribute('id').length-1] === activeID ? activeDay = one: activeDay = activeDay;
    })

    activeDay.classList.add('active')

    allDashes.forEach(one=>{
      one.classList.remove('activeDash')
      one.getAttribute('id')[one.getAttribute('id').length-1] === activeID ? activeDash = one: activeDash = activeDash;
    })

    activeDash.classList.add('activeDash')
  }
})