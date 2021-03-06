const gameBoard = (() => {

  const squares = ['','','','','','','','',''];
  const getSquares =()=> {
    return squares;
  };
  
  const gridContainer = document.getElementById('grid-container');
  const getGridContainer =()=> {
    return gridContainer;
  };
  
  const buildBoard = (squares) => {
    
    squares.forEach((value,index) => {
    value = document.createElement('div');
    value.classList.add('square');
    value.id = index;
    value.addEventListener("click", function() {
      gameController.playMove(index);
    });
  
    gridContainer.appendChild(value);
    });
  };
  
  return {getGridContainer, getSquares,buildBoard};
  
})();



const displayController = (() => {
  
  gameBoard.buildBoard(gameBoard.getSquares());
  
  const updateBoard =(p1Turn, index)=> {
    
    const squareToChange = document.getElementById(index);
    if(p1Turn) {
      squareToChange.classList.add('squareVirus');
    }
    else {
      squareToChange.classList.add('squareVaccine');
    }
    
  };
  
  return {updateBoard};
  
})();

const scoreController = (() => {
  
    let streakCounter = 0;
    const winMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    let currentWinMoves = [];
    
    const checkForWin =(gameMoves, p1Turn)=> {
    
      let currentSymbol = p1Turn ? 'X' : 'O';
      for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
          if(gameMoves[i][j] == currentSymbol) {
            if(i == 2) { currentWinMoves.push(j+6); }
            if(i == 1) { currentWinMoves.push(j+3); }
            if(i === 0) { currentWinMoves.push(j); }
          }
        }
      }
      console.log(currentSymbol, currentWinMoves);

      for(let i=0; i<8; i++){
          let j = 0;
          
          if(currentWinMoves.includes(winMoves[i][j]) && currentWinMoves.includes(winMoves[i][j+1]) && currentWinMoves.includes(winMoves[i][j+2])) {
            return true;
          }
      }
      currentWinMoves = [];
      return false;
      
    // for(let i=0; i<3; i++){
      
    //   let x = winPossibilities[j][i];
    //   if(gameMoves[ == currentSymbol) {
    //     streakCounter++;
    //   }
    //   if(streakCounter == 3) {
    //     console.log("P1 is the winner!");
    //   }
    // }
    
  };
  
  return {checkForWin};
  
})();



const gameController = (() => {
  
  const statusText = document.getElementById('status-text');
  statusText.classList.add("status-text");
  
  let p1;
  let p2;
  let p1Turn = false;
  
  const gameMoves = [
    [1,1,1],
    [1,1,1],
    [1,1,1]
  ];
  
  let numberOfMoves = 0;
  
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  const player1Submit = document.getElementById('player1-submit');
  const player2Submit = document.getElementById('player2-submit');
  
  // player1.addEventListener("mouseenter", function() {
  //   player1.style = "background-color: lightblue";
  // });
  player1Submit.addEventListener("click", function() {
    p1 = Player(player1.value);
    this.style = "background-color: lightgreen";
    this.value = "\u2713";
    if(player2.value !== '') { p1Turn = true; turnMessage();}
  });
  
  // player2.addEventListener("mouseenter", function() {
  //   player2.style = "background-color: lightblue";
  // });
  player2Submit.addEventListener("click", function() {
    p2 = Player(player2.value);
    this.style = "background-color: lightgreen";
    this.value = "\u2713";
    if(player1.value !== '') { p1Turn = true; turnMessage();}
  });
  
  const getCurrentPlayer = () => {
    let currentPlayer = p1Turn ? p1.getName() : p2.getName();
    return currentPlayer;
  };
  
  const turnMessage = () => {
    if(p1Turn) {
      statusText.innerHTML = 'Your move, ' + p1.getName();
      player1.style = "background-color: yellow";
      player2.style = "background-color: white";

    }
    else {
      statusText.innerHTML = 'Your move, ' + p2.getName();
      player1.style = "background-color: white";
      player2.style = "background-color: yellow";
      
    }
  };

  const playMove = (index) => {
    if(typeof p1 === 'object' && typeof p2 === 'object') {
        switch(index) {
          case 0:
            if (gameMoves[0][0] === 1){
              gameMoves[0][0] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 1:
            if (gameMoves[0][1] === 1){
              gameMoves[0][1] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 2:
            if (gameMoves[0][2] === 1){
              gameMoves[0][2] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 3:
            if (gameMoves[1][0] === 1){
              gameMoves[1][0] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 4:
            if (gameMoves[1][1] === 1){
              gameMoves[1][1] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 5:
            if (gameMoves[1][2] === 1){
              gameMoves[1][2] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 6:
            if (gameMoves[2][0] === 1){
              gameMoves[2][0] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 7:
            if (gameMoves[2][1] === 1){
              gameMoves[2][1] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
          case 8:
            if (gameMoves[2][2] === 1){
              gameMoves[2][2] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
            }
            break;
        }
        if(scoreController.checkForWin(gameMoves, p1Turn)) {
          weHaveAWinner();
          setTimeout(endTheGame, 2000);
        }
        else if (numberOfMoves == 8) {
          statusText.innerHTML = "It's a tie!";
          setTimeout(endTheGame, 2000);
          
        }
        else {
          numberOfMoves++;
          p1Turn = !p1Turn;
          setTimeout(turnMessage, 1000);
        }
      }
    else {
      console.log("please enter player names");
    }
    
  };
  
  const weHaveAWinner = () => {
    statusText.innerHTML = getCurrentPlayer() + " is the winner!";
  };
  
  const endTheGame = () => {
    statusText.classList.add("end-the-game");
    statusText.addEventListener("click", function() {
      location.reload();
    });
    statusText.innerHTML = "click to replay";
    
  };
  
  return { playMove, weHaveAWinner, endTheGame};
  
})();

const Player = (name) => {
  this.name = name;
  const getName  = () => name;
  
  return {getName}
};