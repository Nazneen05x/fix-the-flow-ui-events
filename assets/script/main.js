let interaction = document.querySelector('a:nth-of-type(12)')
let flow = document.querySelector('a:nth-of-type(8)')
let sprint5 = document.querySelector('a:nth-of-type(5)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
flow.addEventListener('click', slideclick)
sprint5.addEventListener('click', sprint5click)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

function slideclick () {
  flow.classList.toggle('slide')
}

function sprint5click () {
  flow.classList.toggle('slide_1')
}





