
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
    value.innerHTML = index;
    value.addEventListener("click", function() {
      if(index%2 === 0) {
        value.classList.toggle('squareVirus');
      }
      else {
        value.classList.toggle('squareVaccine');
      }
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


const Player = (name, number) => {
  const getName  = () => name;
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
  return {attack, damage, getName}
};


const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);



let statusText = document.getElementById('status-text');
statusText.innerHTML = "goodbye";

const player1 = document.getElementById('player1');
player1.addEventListener("mouseleave", function() {
  statusText.innerHTML = "player1: " + player1.value + "<br />" + "player2: " + player2.value;
});

const player2 = document.getElementById('player2');
player2.addEventListener("mouseleave", function() {
  statusText.innerHTML = "player1: " + player1.value + "<br />" + "player2: " + player2.value;
});

