const playerX = document.querySelector('.playerX')
const result = document.querySelector('#result')
const gameBoard = document.querySelector('.container')
const resetBtn = document.getElementById('reset')
const cases = document.querySelectorAll('.tile')
const case0 = document.querySelector("body > main > section.container > div:nth-child(1)")
const case1 = document.querySelector("body > main > section.container > div:nth-child(2)")
const case2 = document.querySelector("body > main > section.container > div:nth-child(3)")
const case3 = document.querySelector("body > main > section.container > div:nth-child(4)")
const case4 = document.querySelector("body > main > section.container > div:nth-child(5)")
const case5 = document.querySelector("body > main > section.container > div:nth-child(6)")
const case6 = document.querySelector("body > main > section.container > div:nth-child(7)")
const case7 = document.querySelector("body > main > section.container > div:nth-child(8)")
const case8 = document.querySelector("body > main > section.container > div:nth-child(9)")





function colors() {
  
}

function checkWin() {

  if (case0.innerHTML == 'X' && case1.innerHTML == 'X' && case2.innerHTML == 'X') {
   alert('Player X Has Won!')
   result.innerHTML = 'Congratulation Player X !'
  } else   if (case0.innerHTML == 'O' && case1.innerHTML == 'O' && case2.innerHTML == 'O') {
    alert('Player O Has Won!')
    result.innerHTML = 'Congratulation Player O !'
   } else if (case3.innerHTML == 'X' && case4.innerHTML == 'X' && case5.innerHTML == 'X') {
    alert('Player X Has Won!')
    result.innerHTML = 'Congratulation Player X !'
   } else if (case3.innerHTML == 'O' && case4.innerHTML == 'O' && case5.innerHTML == 'O') {
    alert('Player O Has Won!')
    result.innerHTML = 'Congratulation Player O !'
} else if (case6.innerHTML == 'O' && case7.innerHTML == 'O' && case8.innerHTML == 'O') {
  alert('Player O Has Won!') 
  result.innerHTML = 'Congratulation Player O !'
} else if (case6.innerHTML == 'X' && case7.innerHTML == 'X' && case8.innerHTML == 'X') {
  alert('Player X Has Won!')
  result.innerHTML = 'Congratulation Player X !'
 } else if (case0.innerHTML == 'X' && case4.innerHTML == 'X' && case8.innerHTML == 'X') {
  alert('Player X Has Won!')
  result.innerHTML = 'Congratulation Player X !'
 } else if (case0.innerHTML == 'O' && case4.innerHTML == 'O' && case8.innerHTML == 'O') {
  alert('Player O Has Won!')
  result.innerHTML = 'Congratulation Player O !'
 } else if (case2.innerHTML == 'O' && case4.innerHTML == 'O' && case6.innerHTML == 'O') {
  alert('Player O Has Won!')
  result.innerHTML = 'Congratulation Player O !'
 } else if (case2.innerHTML == 'X' && case4.innerHTML == 'X' && case6.innerHTML == 'X') {
  alert('Player X Has Won!')
  result.innerHTML = 'Congratulation Player X !'
 } else if (case0.innerHTML == 'X' && case3.innerHTML == 'X' && case6.innerHTML == 'X') {
  alert('Player X Has Won!')
  result.innerHTML = 'Congratulation Player X !'
 } else if (case0.innerHTML == 'O' && case3.innerHTML == 'O' && case6.innerHTML == 'O') {
  alert('Player O Has Won!')
  result.innerHTML = 'Congratulation Player O !'
 } else if (case1.innerHTML == 'X' && case4.innerHTML == 'X' && case7.innerHTML == 'X') {
  alert('Player X Has Won!')
  result.innerHTML = 'Congratulation Player X !'
 } else if (case1.innerHTML == 'O' && case4.innerHTML == 'O' && case7.innerHTML == 'O') {
  alert('Player O Has Won!')
  result.innerHTML = 'Congratulation Player O !'
 } else if (case2.innerHTML == 'X' && case5.innerHTML == 'X' && case8.innerHTML == 'X') {
  alert('Player X Has Won!')
  result.innerHTML = 'Congratulation Player X !'
 } else if (case2.innerHTML == 'O' && case5.innerHTML == 'O' && case8.innerHTML == 'O') {
  alert('Player O Has Won!')
  result.innerHTML = 'Congratulation Player O !'
 } 
 
}



gameBoard.addEventListener('click', colors, false)
  function colors(event) {
   if (playerX.innerHTML == 'X') {
    event.target.innerHTML = 'X'
    playerX.innerHTML = 'O'
    checkWin()
  
   } else if (event.target.innerHTML) {
     return false
 
   }
    else {
    event.target.innerHTML = 'O'
    playerX.innerHTML = 'X'
    checkWin()
   }
 
  }

resetBtn.addEventListener('click', function() {
  location.reload();
})



