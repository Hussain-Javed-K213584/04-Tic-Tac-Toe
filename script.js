// Create a game board module which initializes a gameboard with 3 rows
const gameBoard = (() => {
    const gameBoardArray = {
        row1: [-1,-1,-1],
        row2: [-1,-1,-1],
        row3: [-1,-1,-1]
    }
    return {
        gameBoardArray
    };  
})();

console.log(gameBoard.gameBoardArray);