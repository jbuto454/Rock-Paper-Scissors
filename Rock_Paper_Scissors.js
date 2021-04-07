

const btn10 = document.querySelector("#btn1");
btn10.addEventListener('click', function() {game("Rock");});

const btn20 = document.querySelector("#btn2");
btn20.addEventListener('click', function() {game("Paper");});

const btn30 = document.querySelector("#btn3");
btn30.addEventListener('click', function() {game("Scissors");});
    
    //Finds a random number between two values (min and max)
    function Random_number(min, max) {
            return Math.floor((Math.random()) * (max - min + 1) + min);
    }
    
    //Uses the Random_number function to find a number, 
    //then returns a string ("Rock", "Paper", or "Scissors") based on what that number is
    function computerPlay() {
        let This_Number = parseInt(Random_number(1,3));
        if (This_Number === 1) {
            return("Rock");
        } else if (This_Number === 2) {
            return("Paper");
        } else if (This_Number === 3) {
            return("Scissors");
        } 
    }

    // Determines the winner of a rock, paper, scissors game and prints the solution
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection.toLowerCase() === "scissors") {
                return "You Lose!";
            } else if (computerSelection.toLowerCase() === "paper") {
                return "You Win!";
            } else {
                return "Tie!"
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection.toLowerCase() === "scissors") {
                return "You Lose!";
            } else if (computerSelection.toLowerCase() === "rock") {
                return "You Win!";
            } else {
                return"Tie!";
            }
        } else {
            if (computerSelection.toLowerCase() === "rock") {
                return "You Lose!";
            } else if (computerSelection.toLowerCase() === "paper") {
                return "You Win!";
            } else {
                return "Tie!";
            }
        }
            
    }

    // function that runs the game 5 times, 
    //each time the user is asked to imput either rock, paper, or scissors and then the console shows what the computer picked, 
    //what the user picked and who won the game. 
    function game(string) {
        let playerSelection = string;
        let computerSelection = computerPlay();
        let Result = playRound(playerSelection, computerSelection);
        let r = document.querySelector("#container20");
        r.textContent = "The computer chose" + " " + computerSelection + " " + "and you chose" + " " + playerSelection + " " + ":" + " " + Result;
        score(Result);
    }

    let playerSum = 0;
    let compSum = 0;

    // Need help on this one
    function score(Result) {
        let cs = document.querySelector("#compScore");
        let ps = document.querySelector("#playerScore");
        if (Result == "You Win!") {
            playerSum++;
            ps.textContent = playerSum;
            return playerSum;
        } else if (Result == "You Lose!") {
            compSum++;
            cs.textContent = compSum;
            return compSum;
        } 
    }

