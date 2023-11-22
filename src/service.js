import readlineSync from 'readline-sync';



const gameStart = () =>{
    let count = 0
    console.log("Welcome to the Brain Games!")
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name +"!")
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")

    let number = Math.floor(Math.random() * 100) + 1;
    let rightAnswer = number % 2 === 0 ? "yes" : "no"

    while (count < 3) {
        let number = Math.floor(Math.random() * 100) + 1;
        let rightAnswer = number % 2 === 0 ? "yes" : "no"

        console.log("Question: " + number)
        let answer = readlineSync.question('Your answer: ');
        if (answer === rightAnswer) {
            count += 1
            console.log("Correct!")
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`)
            console.log(`Let's try again, ${name}!`)
            break
        }
    }
    if (count === 3) console.log(`Congratulations, ${name}!`)
}

export {gameStart}
