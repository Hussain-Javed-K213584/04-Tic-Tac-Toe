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

// Create a module which starts the game

const PlayerFactory = () => {
    const setPlayerChoice = () => {
        // Logic to assign player a marker
        const buttonContainer = document.getElementById("buttonContainer");

        buttonContainer.addEventListener("click", (e) => {
            if (e.target.id == "markerX"){
                playerChoice = "x";
            }
            else if (e.target.id == "markerY"){
                playerChoice = "y";
            }
            console.log(playerChoice)
        })
    }
    const getPlayerChoice = () =>{
        return playerChoice;   
    }

    let playerChoice = "-1";
    return {setPlayerChoice, getPlayerChoice};
}

// returns an AI object based on the computer choice
const AIFactory = (playerChoice) => {
    const botChoice = () => {
        if (playerChoice == "x"){
            return "o";
        }
        else{
            return "x";
        }
    }
    return {botChoice};
}

console.log(gameBoard.gameBoardArray);

const player = PlayerFactory();
player.setPlayerChoice();
const computer = AIFactory(player.getPlayerChoice());
computer.botChoice();

console.log("Player choice is: " + player.getPlayerChoice())
console.log(computer)