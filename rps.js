function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

let choice = choice => {
    if(choice === 1)
        return "Rock";
    else if(choice === 2)
        return "Paper";
    else if(choice == 3)
        return "Scissors";
    else
    {
        console.log("Please try again. Input 1, 2, or 3 to choose Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
};

let getComputerChoice = () => {
    randNum = getRandomInt(3);
    return choice(randNum);
};

let getHumanChoice = () => {
    let num = parseInt(prompt("Type 1, 2, or 3 to select: 'Rock', 'Paper', or 'Scissors' respectively."))
    return choice(num);
};

let computerScore = 0, humanScore = 0;

//If I want just one flavorText at a time
// const flavorText = document.querySelector(".flavorText");
// const pText = document.createElement("p");

const score = document.querySelector(".score");
const pScore = document.createElement("p");
const cScore = document.createElement("p");

let updateScore = () => {
    pScore.textContent = `PLAYER: ${humanScore}`;
    cScore.textContent = `CPU: ${computerScore}`;

    score.appendChild(pScore);
    score.appendChild(cScore);
};

let newGame = document.querySelector(".newGame");
let toggleNewGame = () => {
    if(newGame.disabled)
        newGame.disabled = false;
    else
        newGame.disabled = true;
}
newGame.addEventListener("click", () => {
    const playerOptions = document.querySelectorAll(".rpsBtn");
    playerOptions.forEach(option => {
        option.disabled = false;
    });
    toggleNewGame()
    humanScore = 0, computerScore = 0;
    updateScore();

    const flavorText = document.querySelector(".flavorText");
    while (flavorText.firstChild) {
        flavorText.removeChild(flavorText.firstChild);
    }
})
newGame.disabled = true;

updateScore();

function playGame()
{     
    const playerOptions = document.querySelectorAll(".rpsBtn");
    playerOptions.forEach(option => {
        option.addEventListener("click", () => {
            playRound(option.textContent, getComputerChoice());
        })
    });
}

function playRound(humanChoice, computerChoice) {

    //Keep if Game History is desired.   
    const flavorText = document.querySelector(".flavorText");
    const pText = document.createElement("p");
    pText.textContent = "";
    flavorText.appendChild(pText);

    switch(humanChoice)
    {
        case "Rock":
            if(computerChoice === "Rock")
            {
                pText.textContent = "Its Rock vs. Rock! WE HAVE A TIE!!!"
                pText.setAttribute("style", "color: orange");
            }
            else if(computerChoice === "Paper")
            {
                computerScore += 1;
                pText.textContent = "The Paper envelops the Rock in a suffocating hold! YOU LOSE!";
                pText.setAttribute("style", "color: pink");
            }
            else if(computerChoice === "Scissors")
            {
                humanScore += 1;
                pText.textContent = "The Rock delivers critical hits to the Scissors' mechanism... SPLITTING IT IN TWO! YOU WIN!";
                pText.setAttribute("style", "color: green");
            }
            break;
        case "Paper":
            if(computerChoice === "Paper")
            {
                pText.textContent = "Its Paper vs. Paper! They're just looking at one another... Menacingly. WE HAVE A TIE!!!";
                pText.setAttribute("style", "color: orange");
            }
            else if(computerChoice === "Rock")
            {
                humanScore += 1;
                pText.textContent = "The Paper envelops the Rock in a suffocating hold! YOU WIN!";
                pText.setAttribute("style", "color: green");
            }
            else if(computerChoice === "Scissors")
            {
                computerScore += 1;
                pText.textContent = "With one swift slice the Scissors cut the Paper in half! \
                \nThe clean-up crew is getting paid overtime tonight... YOU LOSE!";
                pText.setAttribute("style", "color: pink");
            }
            break;
        case "Scissors":
            if(computerChoice === "Scissors")
            {
                pText.textContent = "Its Scissors vs. Scissors! CUT THE TV FEED! WE HAVE A TIE!!!";
                pText.setAttribute("style", "color: orange");
            }
            else if(computerChoice === "Rock")
            {
                computerScore += 1;
                pText.textContent = "The Rock delivers critical hits to the Scissors' mechanism... SPLITTING IT IN TWO! YOU LOSE!";
                pText.setAttribute("style", "color: pink");
            }
            else if(computerChoice === "Paper")
            {
                humanScore += 1;
                pText.textContent = "With one swift slice the Scissors cut the Paper in half! \
                \nThe clean-up crew is getting paid overtime tonight... YOU LOSE!";
                pText.setAttribute("style", "color: green");
            }
            break;
    }

    updateScore();

    if(humanScore === 5 || computerScore === 5)
    {
        const playerOptions = document.querySelectorAll(".rpsBtn");
        playerOptions.forEach(option => {
            option.disabled = true;
        });
        if(humanScore > computerScore)
        {
            pText.textContent = "YOU WIN!";
            flavorText.appendChild(pText);
        }
        else
        {
            pText.textContent = "YOU LOSE!";
            flavorText.appendChild(pText);
        }
        toggleNewGame();
    }
}
playGame()