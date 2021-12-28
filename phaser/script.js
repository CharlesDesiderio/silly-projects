const playerBox = document.getElementById('player')
const sprite = document.getElementById('sprite')

let x = 0;
let y = 0;

let offset = 20

let direction = 'r'

let step = 1

playerBox.style.top = `${y}px`
playerBox.style.left = `${x}px`

const input = (event) => {
  step++
  if (step >= 3) {
    step = 1
  }
  
  switch (event.key) {
    case 'ArrowDown':
      y += offset;
      playerBox.style.top = `${y}px`
      break;
    case 'ArrowUp':
      y -= offset;
      playerBox.style.top = `${y}px`
      break;

    case 'ArrowRight':
      direction = 'r'
      x += offset;
      playerBox.style.left = `${x}px`
      break;

    case 'ArrowLeft':
      direction = 'l'
      x -= offset;
      playerBox.style.left = `${x}px`
      break;

  }
  sprite.src = `${direction}${step}.svg`

}

document.addEventListener('keydown', (event) => input(event))