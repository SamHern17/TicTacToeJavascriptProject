function App() {

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const [board, setBoard] = React.useState(["","","","","","","","",""])
    let gameOver = false
    const [turn, setTurn] = React.useState('X')
    const[win, setWin] = React.useState(null)

    function getWinner() {
        let winner = null;
            winningCombos.forEach((combo, index) => {
                if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
                    winner = board[combo[0]];
                }
            });

        if (winner) {
            gameOver = true
            return winner; 
            } else if (board.includes('')) {
                return null; // if there's an empty space, return null (no winner yet)
            } else {
                return 'T'; // no winner and no empty spaces? That's a tie!
            }

    };

    function handleTurn(event) {
        // alert('clicked!')
        //let idx = squares.findIndex(function(square)){
        //      return square === event.target;
        //}
        console.log(event.target, event.target.id)
        let idx = event.target.id
        if(gameOver == false) {
            let newBoard = [...board]
            newBoard[idx] = turn
            setBoard(newBoard)
            let nextTurn = turn === 'X' ? 'O' : 'X'
            setTurn(nextTurn)
            let whoWon = getWinner()
            setWin(whoWon)
          //render()
        }
    }

    function Message(){
        let message = win === `T`? `Game is a tie!` : win? `${win} wins the game!`: `It's ${turn}'s turn!`;

        return <h2>{message}</h2>
    }

    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <Message />

            <div className="flex-container flex-column">
            <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
                {board.map((value, idx) => {
                    return (
                        <div className="square" key={idx} id={idx}>
                            {value}
                        </div>    
                    )
                })}
            </div>
                {/*<!-- A reset button without having to refresh the browser -->*/}
                <button id="reset-button">Reset</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, root)