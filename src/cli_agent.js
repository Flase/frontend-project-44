import readlineSync from "readline-sync";


const getName = () => {
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question('May I have your name? ')
    console.log(`Hello, ${name}!`)
    return name
}

const queryQuestion = (questionString) => {
    console.log(`Question: ${questionString}`)
    return readlineSync.question('Your answer: ')
}

const correctAnswer = () => {
    console.log("Correct!")
}

const wrongAnswer = (playerAnswer, rightAnswer, name) => {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`)
            console.log(`Let's try again, ${name}!`)
}

const congratulations = (name) => {
    console.log(`Congratulations, ${name}!`)
}

export {getName, queryQuestion, correctAnswer, wrongAnswer, congratulations}