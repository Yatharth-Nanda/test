pc = "paper";
var computer_choice;
console.log("script is live");
function computerchoice() {
  computer_choice = Math.floor(Math.random() * 3);
  switch (computer_choice) {
    case 0:
      computer_choice = 0;
      break;
    case 1:
      computer_choice = 1;
      break;
    case 2:
      computer_choice = 2;
      break;
  }
}
function getoutput(computer_choice, pc) {
  var y = -1;
  pc = pc.toLowerCase();
  if (pc == "rock") y = 0;
  else if (pc == "scissors") y = 1;
  else if (pc == "paper") y = 2;
  console.log("Value of pc is " + pc);
  console.log("Value of computer choice  is " + computer_choice);

  switch (y) {
    case 0:
      switch (computer_choice) {
        case 0:
          console.log("It is a draw ");
          break;
        case 1:
          console.log("Player wins (rock) vs computer (scissors)");
          break;
        case 2:
          console.log("Computer wins paper vs player (rock)");
          break;
      }
      break;
    case 1:
      switch (computer_choice) {
        case 1:
          console.log("It is a draw ");
          break;
        case 0:
          console.log("Computer wins (rock) vs player (scissors)");
          break;
        case 2:
          console.log("Player wins (scissors) vs computer(paper)");
          break;
      }
      break;
    case 2:
      switch (computer_choice) {
        case 2:
          console.log("It is a draw ");
          break;
        case 1:
          console.log("Computer wins (scissor) vs player(paper)");
          break;
        case 0:
          console.log("Player wins (paper) vs computer(rock)");
          break;
      }
      break;
  }
}
computerchoice();

for (var i = 1; i < 10; i++) {
  computerchoice();

  getoutput(computer_choice, pc);
}
