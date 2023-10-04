//console.log('Your JS is linked up. Be the person you needed when you were little.')

/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

const messages = document.querySelector('h2');

document.getElementById('reset-button').addEventListener('click', init);

/*----- functions -----*/

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    
    render();
};

function render() {

    if(board[index] == ''){
    board.forEach(function(mark, index) {
      //this sets the text content of the square of the same position to the mark on the board. 
    squares[index].textContent = mark; // X's and O's
    });
  }
   // messages.textContent = win === 'T' ? `Game is a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

   //Above ternary as an if-else if- else block

   if ( win === 'T' ) {
     messages.textContent = `Game is a tie!`
    } else if (win) { 
     messages.textContent = `${win} wins the game!`
    } else {
     messages.textContent = `It's ${turn}'s turn!`
    }
};

function getWinner() {
    let winner = null;
    winningCombos.forEach((combo, index) => {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
    winner = board[combo[0]];
    }
    });
    
    if (winner) {
      return winner 
    } else if (board.includes('')) {
      return null // if there's an empty space, return null (no winner yet)
    } else {
      return 'T' // no winner and no empty spaces? That's a tie!
    }

    // Above if- else if - else block as a ternary
    // return winner ? winner : board.includes('') ? null : 'T'; 

};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    board[idx] = turn;

    turn = turn === 'X' ? 'O' : 'X';

    // Above ternary as an if-else block 
    // if (turn === 'X') {
    // turn = 'O' 
    // } else {
    // turn = 'X' 
    // };

    win = getWinner(); 
    render();
};

init();