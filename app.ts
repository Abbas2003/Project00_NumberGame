#! /usr/bin/env node

// Number Guessing Game

import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { resolve } from "path";

async function welcome() {
    let title = chalkAnimation.neon("Are You Excited To Play The Number Guessing Game:");
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
};

await welcome();

async function numberGuess() {
  const SysGeneratedNo = Math.round(Math.random() * 10);
  type answerType = {
    userGuess: number;
  };
  const answer: answerType = await inquirer.prompt([
    {
      type: "number",
      name: "userGuess",
      message: "Write your guess number from (1 - 10):\n",
    },
  ]);

  console.log(chalk.yellowBright(`User: ${answer.userGuess} \t System: ${SysGeneratedNo}`));
  if (answer.userGuess == SysGeneratedNo) {
    console.log(chalk.green("Congratulations, You Won!\n"));
  } else {
    console.log(chalk.red("Better luck next time\n"));
  }
};

async function Startagain() {
  do {
    await numberGuess();
    var again = await inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: "Do you want to play again? Press Y or N\n",
      },
    ]);
  } while (
    again.restart == "Y" ||
    again.restart == "yes" ||
    again.restart == "YES" ||
    again.restart == "y"
  );

  if(again.restart === "n" || again.restart === "N") {
      console.log(chalk.redBright("\t\t--- THANK YOU FOR PLAYING MY GAME ---"))
  }
};


Startagain();


