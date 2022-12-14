let interaction = document.querySelector('a:nth-of-type(12)')
let flow = document.querySelector('a:nth-of-type(8)')
let the = document.querySelector('a:nth-of-type(7)')
let sprint5 = document.querySelector('a:nth-of-type(5)')
let interface = document.querySelector('a:nth-of-type(10)')
let and = document.querySelector('a:nth-of-type(3)')
let design = document.querySelector('a:nth-of-type(2)')
let fix = document.querySelector('a:nth-of-type(6)')
let frontend = document.querySelector('a:nth-of-type(1)')


interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
flow.addEventListener('click', colorclick)
the.addEventListener('click', grootclick)
sprint5.addEventListener('click', slideclick)
interface.addEventListener('click', slideeclick)
and.addEventListener('click', rondclick)
design.addEventListener('click', flipclick)
fix.addEventListener('click', colorchangeclick)
frontend.addEventListener('click', slidecolorclick)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

function colorclick () {
  flow.classList.toggle('color')
}

function grootclick () {
  the.classList.toggle('groot')
}
function slideclick(){
  sprint5.classList.toggle('slide')
}

function slideeclick() {
  interface.classList.toggle('slidee')
}

function rondclick () {
  and.classList.toggle('rond')
}

function flipclick () {
  design.classList.toggle('flip')
}

function colorchangeclick() {
  fix.classList.toggle('colorchange')
}

function slidecolorclick() {
  frontend.classList.toggle('slidecolor')
}


