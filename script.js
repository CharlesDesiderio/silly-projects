const makeSpoopy = () => {
  const target = document.getElementById('spoop')
  target.classList.add('makeSpoop')
  setTimeout(() => {
    target.classList.remove('makeSpoop')
  }, 1000)
}

const spoopButton = document.getElementById('spoopButton').addEventListener('click', makeSpoopy)