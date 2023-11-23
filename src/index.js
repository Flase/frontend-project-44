import {congratulations, correctAnswer, getName, queryQuestion, wrongAnswer} from "./cli_agent.js";

const gameEven = () =>{
    let count = 0
    const name = getName()

    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")

    while (count < 3) {
        let randonNumber = Math.floor(Math.random() * 100) + 1;
        let rightAnswer = randonNumber % 2 === 0 ? "yes" : "no"
        let playerAnswer = queryQuestion(randonNumber)

        if (playerAnswer === rightAnswer) {
            count += 1
            correctAnswer()
        } else {
            wrongAnswer(playerAnswer, rightAnswer, name)
            break
        }
    }
    if (count === 3) congratulations(name)
}

export {gameEven}


const gameCalc = () =>{
    const name = getName()
    console.log("What is the result of the expression?")
    let count = 0
    let rightAnswer = 0, playerAnswer = 0
    const action = ["+", "-", "*"]
    while (count < 3) {
        let randA = Math.floor(Math.random() * 10) + 1;
        let randB = Math.floor(Math.random() * 10) + 1;
        let currentAction = action[Math.floor(Math.random() * 3)]

        playerAnswer = queryQuestion(`${randA} ${currentAction} ${randB}`)

        switch (currentAction){
            case "+":
                rightAnswer = randA + randB;
                break
            case "-":
                rightAnswer = randA - randB
                break
            case "*":
                rightAnswer = randA * randB
                break
        }

        if (parseInt(playerAnswer) === rightAnswer) {
            count +=1
            correctAnswer()
        } else {
            wrongAnswer(playerAnswer, rightAnswer, name)
            break
        }
    }
    if (count === 3) congratulations(name)
}

export {gameCalc}

const gameGCD = () => {
    const name = getName()
    console.log("Find the greatest common divisor of given numbers.")
    let count = 0
    let rightAnswer = 0, playerAnswer = 0
    while (count < 3) {
        let randA = Math.floor(Math.random() * 100) + 1;
        let randB = Math.floor(Math.random() * 100) + 1;
        let min = randA <= randB ? randA : randB
        for (let i=min; i >= 1; i--) {
            if (randA % i === 0 && randB % i ===0){
                rightAnswer = i
                break
            }
        }
        playerAnswer = queryQuestion(`${randA} ${randB}`)
        if (parseInt(playerAnswer) === rightAnswer) {
            count +=1
            correctAnswer()
        } else {
            wrongAnswer(playerAnswer, rightAnswer, name)
            break
        }
    }
    if (count === 3) congratulations(name)
}
export {gameGCD}

const gameProgression = () => {
    const name = getName()
    console.log("What number is missing in the progression?")
    let count = 0
    let rightAnswer = 0, playerAnswer = 0
    while (count < 3) {
        let difference = Math.floor(Math.random() * 5) + 1; // step
        let first = Math.floor(Math.random() * 50) + 1; // start number
        let hiddenMemberIndex = Math.floor(Math.random() * 10) + 1; // 0 .. 9 index for hide
        let array = [first]
        let playerString = first.toString()+" "

        for (let i=1; i < 9; i++){
            array[i] = array[i-1] + difference
            if (i !== hiddenMemberIndex) {
                playerString += array[i] + " "
            } else {
                playerString += ".. "
            }
        }
        rightAnswer = array[hiddenMemberIndex]

        playerAnswer = queryQuestion(`${playerString}`)

        if (parseInt(playerAnswer) === rightAnswer) {
            count +=1
            correctAnswer()
        } else {
            wrongAnswer(playerAnswer, rightAnswer, name)
            break
        }
    }
    if (count === 3) congratulations(name)
}

export {gameProgression}


const gamePrime = () => {
    const name = getName()
    console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".")
    let count = 0
    let rightAnswer = "yes", playerAnswer = ""
    while (count < 3) {
        let randNumber = Math.floor(Math.random() * 9) + 2; // start number 2 .. 10 
        for (let i=1; i<randNumber; i++){
            if (randNumber % i === 0) {
                rightAnswer = "no"
                break
            }
        }
        playerAnswer = queryQuestion(`${randNumber}`)

        if (playerAnswer === rightAnswer) {
            count +=1
            correctAnswer()
        } else {
            wrongAnswer(playerAnswer, rightAnswer, name)
            break
        }
    }
    if (count === 3) congratulations(name)
}

export {gamePrime}