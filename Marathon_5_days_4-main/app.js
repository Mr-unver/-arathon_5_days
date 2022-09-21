const board = document.querySelector('#board')
// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES_NUMBER = 500

const COLORS_NUMBER = 10 // количество цветов
const colorString = '0123456789abcdef'
var colors = []
for (let i = 0; i < COLORS_NUMBER; i++) {
    let s = ''
    for (let j = 0; j < 6; j++) { 
        s += colorString[Math.floor(Math.random() * 16)]
    }
    colors[i] = `#${s}`
}




for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mousemove', setColor) 

    square.addEventListener('mouseleave', removeColor) 
    
    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 20px #001`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}