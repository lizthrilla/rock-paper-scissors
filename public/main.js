const qs = (e) => document.querySelector(e)
let playerOne = ''
let playerTwo = ''

const getComputerMove = () => {
  const moves = ['Rock', 'Paper', 'Scissors']
  const computerIndex = Math.floor(Math.random() * moves.length)
  qs('.computerSelection').textContent = moves[computerIndex]
}

const setPlayerOneSelection = (selection) => {
  playerOne = selection
  qs('.playerOneSelection').textContent = selection
  getComputerMove()
  checkForWinner()
}

const setPlayerTwoSelection = (selection) => {
  playerTwo = selection
  qs('.playerTwoSelection').textContent = selection
  checkForWinner()
}

const resetGame = () => {
  playerOne = ''
  playerTwo = ''
  qs('.winner').textContent = ''
  qs('.playerOneSelection').textContent = ''
  qs('.playerTwoSelection').textContent = ''
}

const checkForWinner = () => {
  // rules
  if ((playerOne === 'Rock' && playerTwo === 'Scissors') || (playerOne === 'Scissors' && playerTwo === 'Paper') || (playerOne === 'Paper' && playerTwo === 'Rock')) {
    qs('.winner').textContent = 'Player One Wins'
  } else if ((playerTwo === 'Rock' && playerOne === 'Scissors') || (playerTwo === 'Scissors' && playerOne === 'Paper') || (playerTwo === 'Paper' && playerOne === 'Rock')) {
    qs('.winner').textContent = 'Player Two Wins'
  } else if (playerOne === playerTwo) {
    qs('.winner').textContent = 'TIE'
  }
}

const main = () => {
  // player one buttons
  qs('.playerOne .rock').addEventListener('click', () => setPlayerOneSelection('Rock'))
  qs('.playerOne .paper').addEventListener('click', () => setPlayerOneSelection('Paper'))
  qs('.playerOne .scissors').addEventListener('click', () => setPlayerOneSelection('Scissors'))

  // player two buttons
  qs('.playerTwo .rock').addEventListener('click', () => setPlayerTwoSelection('Rock'))
  qs('.playerTwo .paper').addEventListener('click', () => setPlayerTwoSelection('Paper'))
  qs('.playerTwo .scissors').addEventListener('click', () => setPlayerTwoSelection('Scissors'))

  // reset game on click

  qs('.winner').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
