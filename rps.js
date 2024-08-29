function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let getComputerChoice = () => {
    randNum = getRandomInt(3);
    if(randNum === 0)
        return "Rock";
    else if(randNum === 1)
        return "Paper";
    else
        return "Scissors";
}

let getHumanChoice = () => {
    let choice = parseInt(prompt("Type 1, 2, or 3 to select: 'Rock', 'Paper', or 'Scissors' respectively."))
}

console.log(getComputerChoice());