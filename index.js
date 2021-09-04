const btn = document.querySelector('.btn')
const color = document.querySelector('.color1')
const hex = document.querySelector('.hex')

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const btnClick = () => {
  console.log(getRandomColor())
  color.style.background = getRandomColor()
  hex.innerHTML = getRandomColor()
}

btn.addEventListener('click', btnClick)
