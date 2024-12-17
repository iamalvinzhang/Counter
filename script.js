var rate = 0.5
var headsCounter = 0 
var tailsCounter = 0 
var dom = document.querySelector('.result')
var restartBtn = document.querySelector('.restart_button')


function onClick(event) {
  if (event.target.classList.contains('restart_button')) return
  
  if (lot()) {
    
    headsCounter++
    dom.innerText = `HEADS:\n ${headsCounter}\nTAILS: \n${tailsCounter}`
  } else {
   
    tailsCounter++
    dom.innerText = `HEADS:\n ${headsCounter}\nTAILS: \n${tailsCounter}`
  }
}


function onRestart(event) {
  event.stopPropagation()  
  headsCounter = 0
  tailsCounter = 0
  dom.innerText = 'Click to start'
}


function lot() {
  var key = Math.random()
  return key < rate ? true : false
}


window.addEventListener('click', onClick)
restartBtn.addEventListener('click', onRestart)