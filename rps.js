function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let choice = choice => {
    if(choice === 0)
        return "Rock";
    else if(choice === 1)
        return "Paper";
    else if(choice == 2)
        return "Scissors";
    else
    {
        console.log("Please try again. Input 0, 1, or 2 to choose Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
};

let getComputerChoice = () => {
    randNum = getRandomInt(3);
    return choice(randNum);
};

let getHumanChoice = () => {
    let num = parseInt(prompt("Type 0, 1, or 2 to select: 'Rock', 'Paper', or 'Scissors' respectively."))
    return choice(num);
};

let computerScore = 0, humanScore = 0;

function playGame()
{
    for(let i = 1; i < 6; i++)
    {
        console.log(`ROUND ${i}`)
        const playerChoice = getHumanChoice();
        const cpuChoice = getComputerChoice()
        console.log("Player: " + playerChoice);
        console.log("Computer: " + cpuChoice);
        playRound(playerChoice, cpuChoice);
        console.log(
        `---THE SCORE---\n PLAYER: ${humanScore}\n CPU:    ${computerScore}`
        )
    }
    if(humanScore > computerScore)
        console.log("YOU WIN!");
    else
        console.log("YOU LOSE!");
    
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice)
    {
        case "Rock":
            if(computerChoice === "Rock")
                console.log("%cIts Rock vs. Rock! WE HAVE A TIE!!!", "color: yellow;");
            else if(computerChoice === "Paper")
            {
                computerScore += 1;
                console.log("%cThe Paper envelops the Rock in a suffocating hold! YOU LOSE!", "color: pink;")
            }
            else if(computerChoice === "Scissors")
            {
                humanScore += 1;
                console.log("%cThe Rock delivers critical hits to the Scissors' mechanism... SPLITTING IT IN TWO! YOU WIN!", "color: green;")
            }
            break;
        case "Paper":
            if(computerChoice === "Paper")
                console.log("%cIts Paper vs. Paper! They're just looking at one another... Menacingly. WE HAVE A TIE!!!", "color: yellow;");
            else if(computerChoice === "Rock")
            {
                humanScore += 1;
                console.log("%cThe Paper envelops the Rock in a suffocating hold! YOU WIN!", "color: green;")
            }
            else if(computerChoice === "Scissors")
            {
                computerScore += 1;
                console.log("%cWith one swift slice the Scissors sliced the Paper in half! \
                    The clean-up crew is getting paid overtime tonight... YOU LOSE!", "color: pink;")
            }
            break;
        case "Scissors":
            if(computerChoice === "Scissors")
                console.log("%cIts Scissors vs. Scissors! CUT THE TV FEED! WE HAVE A TIE!!!", "color: yellow;");
            else if(computerChoice === "Rock")
            {
                computerScore += 1;
                console.log("%cThe Rock delivers critical hits to the Scissors' mechanism... SPLITTING IT IN TWO! YOU LOSE!", "color: pink;")
            }
            else if(computerChoice === "Paper")
            {
                humanScore += 1;
                console.log("%cWith one swift slice the Scissors sliced the Paper in half! \
                    The clean-up crew is getting paid overtime tonight... YOU LOSE!", "color: green;")
            }
            break;
    }
}
playGame()