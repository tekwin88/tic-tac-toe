//debugger
console.log('Hello frontend');

gridArray = [ 0, 0, 0,
              0, 0, 0,
              0, 0, 0]

var currentPlayer = 'x'

function playerMove(sel) {
   if (sel.target.textContent === '' && currentPlayer === 'x') {
  //     console.log("sel = " + sel)
  //     console.log("sel.target.textContent = " + sel.target.textContent)
  //     console.log("currentPlayer = " + currentPlayer)

      sel.target.textContent = 'x'
      var i = sel.target.id
      gridArray[i] = 'x'

      console.log("gridArray[ " + i + "] = " + gridArray[i])
      checkWinner()
      checkGameStatus()
      currentPlayer = 'o'

    } else if (sel.target.textContent === '' && currentPlayer === 'o') {

      sel.target.textContent = 'o'
      var i = sel.target.id
      gridArray[i] = 'o'
      checkWinner()
      checkGameStatus()
      currentPlayer = 'x'

    }
    console.log(gridArray);
  }

  function checkWinner() {
    if        (gridArray[0] === gridArray[1] && gridArray[1] === gridArray[2]) {
      winner = gridArray[0]
    } else if (gridArray[3] === gridArray[4] && gridArray[4] === gridArray[5]) {
      winner = gridArray[3]
    } else if (gridArray[6] === gridArray[7] && gridArray[7] === gridArray[8]) {
      winner = gridArray[6]
    } else if (gridArray[0] === gridArray[3] && gridArray[3] === gridArray[6]) {
      winner = gridArray[0]
    } else if (gridArray[1] === gridArray[4] && gridArray[4] === gridArray[7]) {
      winner = gridArray[1]
    } else if (gridArray[2] === gridArray[5] && gridArray[5] === gridArray[8]) {
      winner = gridArray[2]
    } else if (gridArray[0] === gridArray[4] && gridArray[4] === gridArray[8]) {
      winner = gridArray[0]
    } else if (gridArray[2] === gridArray[4] && gridArray[4] === gridArray[6]) {
      winner = gridArray[2]
    } else {
      winner = 'It is a draw|'
    }
  }

function checkGameStatus() {
  if (winner === "x" || winner === "o") {
    document.getElementById('messageBox').innerHTML = 'The winner is: ' + winner
  } else if (!gridArray.includes(0)){
    document.getElementById('messageBox').innerHTML = 'It is a draw!'
  }
}

// DOM
var grids = document.querySelectorAll('div.grid')

for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', playerMove)
}
