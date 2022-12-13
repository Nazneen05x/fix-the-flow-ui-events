let interaction = document.querySelector('a:nth-of-type(12)')
let flow = document.querySelector('a:nth-of-type(8)')
let the = document.querySelector('a:nth-of-type(7)')
let sprint5 = document.querySelector('a:nth-of-type(5)')
let interface = document.querySelector('a:nth-of-type(10)')


interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
flow.addEventListener('click', colorclick)
the.addEventListener('click', grootclick)
sprint5.addEventListener('click', slideclick)
interface.addEventListener('click', slideeclick)

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







