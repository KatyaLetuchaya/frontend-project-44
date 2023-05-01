import randomNumber from "../randomNumber.js";
import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const gameProcess = ()=> {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberOfRounds; i += 1) {
    const num = randomNumber(1, 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = `${num % 2 === 0 ? 'yes' : 'no'}`;
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    } else {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default gameProcess;