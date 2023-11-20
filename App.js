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
    let turn = 'X'
    let win

    function handleTurn(event) {
        console.log(event.target, event.target.id)
        let idx = event.target.id
        if(gameOver == false) {
            let newBoard = [...board]
            newBoard[idx] = turn
            setBoard(newBoard)
            turn = turn === 'X' ? 'O' : 'X'
          //win = getWinner()
          //render()
        }
    }

    return (
        <div>
            <h1>Tic-React-Toe</h1>
            <h2>It's X's turn!</h2>

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