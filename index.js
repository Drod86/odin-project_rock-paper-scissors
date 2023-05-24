const rpsShoot = ["rock", "paper", "scissors"];

const getComputerChoice = (shoot) => {
  const ranNum = Math.floor(Math.random() * 2) + Math.floor(Math.random() * 2);
  return shoot[ranNum];
};

const capitalize = (word) =>
  word.replace(word.charAt(0), word.charAt(0).toUpperCase());

const playRPSRound = (playerSelection, computerSelection) => {
  const plyr = playerSelection;
  const cpu = computerSelection;

  const youWin = `You Win! ${capitalize(plyr)} beats ${capitalize(cpu)}.`;
  const youLose = `You Lose! ${capitalize(cpu)} beats ${capitalize(plyr)}.`;

  const declareTheWinner = () => {
    switch (plyr) {
      case "rock":
        {
          return cpu === "paper" ? youLose : youWin;
        }
        break;
      case "paper":
        {
          return cpu === "scissors" ? youLose : youWin;
        }
        break;
      default: {
        return cpu === "rock" ? youLose : youWin;
      }
    }
  };

  return plyr === cpu ? "It's a Draw! Go again." : declareTheWinner();
};

const game = () => {
  let wins = 0;
  let loses = 0;
  const rounds = 5;
  let cancel = false;

  for (let i = 0; i < rounds; i++) {
    const getSelection = () => {
      let entry = prompt("Enter: Rock, Paper or Scissors", "")?.toLowerCase();

      while (!rpsShoot.includes(entry)) {
        if (entry === undefined) break;
        entry = prompt(
          "Invalid entry. Enter: Rock, Paper or Scissors"
        )?.toLowerCase();
      }
      return entry;
    };

    const playerSelection = getSelection();

    if (playerSelection === undefined) {
      cancel = !cancel;
      break;
    }

    const computerSelection = getComputerChoice(rpsShoot);
    const roundResult = playRPSRound(playerSelection, computerSelection);
    console.log(roundResult);

    roundResult.split(" ").includes("Draw!")
      ? --i
      : roundResult.split(" ").includes("Win!")
      ? wins++
      : loses++;

    if (wins > 2 || loses > 2) break;
  }

  cancel
    ? console.log("You forfeit. Sorry to see you go.")
    : console.log(`${wins > 2 ? "Player" : "Computer"} Wins!`);
};

game();
