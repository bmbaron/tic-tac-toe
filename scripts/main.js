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
  
  const checkForWin =(gameMoves, p1Turn)=> {
    if(p1Turn) {
      let counter = 0;
      for(let i=0; i<3; i++) {
        if(gameMoves[0][i] == 'X') {
          counter++;
        }
        if(counter == 3) {
          console.log("P1 is the winner!");
        }
      }
    }
    
  };
  
  return {checkForWin};
  
})();



const gameController = (() => {
  
  const statusText = document.getElementById('status-text');
  let p1;
  let p2;
  let p1Turn = false;
  
  const gameMoves = [
    [1,1,1],
    [1,1,1],
    [1,1,1]
  ];
  
  
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  
  player1.addEventListener("mouseenter", function() {
    player1.style = "background-color: lightblue";
  });
  player1.addEventListener("mouseleave", function() {
    p1 = Player(player1.value);
    if(player2.value !== '') { p1Turn = true; startGameMessage(); }
  });
  
  player2.addEventListener("mouseenter", function() {
    player2.style = "background-color: lightblue";
  });
  player2.addEventListener("mouseleave", function() {
    p2 = Player(player2.value);
    if(player1.value !== '') { p1Turn = true; startGameMessage(); }
  });
  
  const startGameMessage = () => {
    if(p1Turn) {
      statusText.innerHTML = 'Your move, ' + p1.getName();
    }
    else {
      statusText.innerHTML = 'Your move, ' + p2.getName();
    }
  };

  const playMove = (index) => {
    if(typeof p1 === 'object' && typeof p2 === 'object') {
        switch(index) {
          case 0:
            if (gameMoves[0][0] === 1){
              gameMoves[0][0] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 1:
            if (gameMoves[0][1] === 1){
              gameMoves[0][1] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 2:
            if (gameMoves[0][2] === 1){
              gameMoves[0][2] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 3:
            if (gameMoves[1][0] === 1){
              gameMoves[1][0] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 4:
            if (gameMoves[1][1] === 1){
              gameMoves[1][1] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 5:
            if (gameMoves[1][2] === 1){
              gameMoves[1][2] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 6:
            if (gameMoves[2][0] === 1){
              gameMoves[2][0] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 7:
            if (gameMoves[2][1] === 1){
              gameMoves[2][1] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
          case 8:
            if (gameMoves[2][2] === 1){
              gameMoves[2][2] = p1Turn ? 'X' : 'O';
              displayController.updateBoard(p1Turn, index);
              console.log(gameMoves);
              console.log(p1Turn);
            }
            break;
        }
        scoreController.checkForWin(gameMoves, p1Turn);
        p1Turn = !p1Turn;

      }
    else {
      console.log("please enter player names");
    }
    
  };
  

  return {playMove};
  
})();

const Player = (name) => {
  this.name = name;
  const getName  = () => name;
  
  return {getName}
};