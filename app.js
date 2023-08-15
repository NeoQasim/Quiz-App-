import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
// import showBanner from "node-banner";
console.log(boxen("boxen working fine"));
const questions = [
    {
        question: "What is the  first letter a,b,c",
        options: ["a", "b", "c"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the  second letter a,b,c",
        options: ["a", "b", "c"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the  third letter a,b,c",
        options: ["a", "b", "c"],
        correctAnswerIndex: 2
    },
    {
        question: "What is the  fourth letter a,b,c,d",
        options: ["a", "b", "c", "d"],
        correctAnswerIndex: 3
    }
];
async function quiz() {
    const welcome = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter your name ",
            default: "user"
        }
    ]);
    console.log(chalk.blue(`welcome  ${welcome.name} ! `, chalk.green("lets start quiz ")));
    let score = 0;
    for (const question of questions) {
        const { userAnswer } = await inquirer.prompt([
            {
                type: "list",
                name: "userAnswer",
                message: question.question,
                choices: question.options
            }
        ]);
        if (question.correctAnswerIndex === question.options.indexOf(userAnswer)) {
            console.log(chalk.bgGreen('Correct!\n'));
            score++;
        }
        else {
            console.log(chalk.bgRed.white('Incorrect.\n'));
        }
    }
    console.log(score * 100 / questions.length);
    if (score * 100 / questions.length > 41) {
        console.log(chalk.bgGreenBright(`Quiz completed! Your score: ${score} out of ${questions.length}, you passed`));
    }
    else
        (console.log(chalk.bgRedBright(`Quiz completed! Your score: ${score} out of ${questions.length}, you failed`)));
}
quiz();
