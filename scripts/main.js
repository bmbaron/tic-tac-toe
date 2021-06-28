
const gameBoard = (() => {

  const squares = ['','','','','','','','',''];
  const getSquares =()=> {
    return squares;
  };
  
  const gridContainer = document.getElementById('grid-container');

  const buildBoard = (boardSquares) => {
    
    boardSquares.forEach((value,index) => {
    value = document.createElement('div');
    value.classList.add('square');
    value.id = index;
    //value.innerHTML = index;
    value.addEventListener("click", function() {
      
      
      
      // if(index%2 === 0) {
      //   value.classList.toggle('squareVirus');
      // }
      // else {
      //   value.classList.toggle('squareVaccine');
      // }
    });
  
    gridContainer.appendChild(value);
    });
  };
  
  return {getSquares,buildBoard};
  
})();


const displayBuilder = (() => {
  
  const gameSquares = gameBoard.getSquares();
  gameBoard.buildBoard(gameSquares);
  
  return {};
})();


const moveTracker = (() => {
  const gameMoves = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];
  
  const getMoves =()=> {
    return gameMoves;
  };
  
  const makeMove = (index, player) => {
    
    switch(index) {
      case 0:
        if (gameMoves[0][0] === 0){
          gameMoves[0][0] = player;
        }
        break;
      case 1:
        if (gameMoves[0][1] === 0){
          gameMoves[0][1] = player;
        }
        break;
      case 2:
        if (gameMoves[0][2] === 0){
          gameMoves[0][2] = player;
        }
        break;
      case 3:
        if (gameMoves[1][0] === 0){
          gameMoves[1][0] = player;
        }
        break;
      case 4:
        if (gameMoves[1][1] === 0){
          gameMoves[1][1] = player;
        }
        break;
      case 5:
        if (gameMoves[1][2] === 0){
          gameMoves[1][2] = player;
        }
        break;
      case 6:
        if (gameMoves[2][0] === 0){
          gameMoves[2][0] = player;
        }
        break;
      case 7:
        if (gameMoves[2][1] === 0){
          gameMoves[2][1] = player;
        }
        break;
      case 8:
        if (gameMoves[2][2] === 0){
          gameMoves[2][2] = player;
        }
        break;
    }
    
  };

  return {makeMove, getMoves};

})();

for (let i=0; i<9; i++) {
  document.getElementById(i).addEventListener("click", function() {
    moveTracker.makeMove(i, 'x');
    alert(moveTracker.getMoves());
  });
}


const gameController = (() => {
  
  const playRound = () => {
    
  if (typeof p1 === "function") {
    console.log('hello p1');
  //const turn = 'p1';
  if (p1.getTurn == 'waiting')
  {
    alert("go P1");
    p1.setTurn('finished');
    alert(p1.getTurn);
  }
  }
  else {
    console.log("no p1");
  }
  }
  

  return {};
})();



const Player = (name, turn) => {
  this.name = name;
  this.turn = turn;
  const getName  = () => name;
  const getTurn  = () => turn;
  const setTurn  = (turnStatus) => turn = turnStatus;
  
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    // if (level < enemy.getLevel()) {
    //   damage(1);
    //   console.log(`${enemy.getName()} has damaged ${name}`);
    // }
    // if (level >= enemy.getLevel()) {
    //   enemy.damage(1);
    //   console.log(`${name} has damaged ${enemy.getName()}`);
    // }
  };
  
  //gameController.playRound();
  return {attack, damage, getName}
};


const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);



let statusText = document.getElementById('status-text');
statusText.innerHTML = "goodbye";

const player1 = document.getElementById('player1');
player1.addEventListener("mouseenter", function() {
  player1.style = "background-color: lightblue";
});
player1.addEventListener("mouseleave", function() {
  statusText.innerHTML = "player1: " + player1.value + "<br />" + "player2: " + player2.value;
  
  const p1turn = 'waiting';
  const p1 = Player('statusText.innerHTML');
});

const player2 = document.getElementById('player2');
player2.addEventListener("mouseenter", function() {
  player2.style = "background-color: pink";
});
player2.addEventListener("mouseleave", function() {
  statusText.innerHTML = "player1: " + player1.value + "<br />" + "player2: " + player2.value;
  
  const p2turn = 'waiting';
  const p2 = Player('statusText.innerHTML');
});

