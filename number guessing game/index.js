
const minNum = 1;
const maxNum = 100;
const anwser = Math.floor(Math.random() *(maxNum-minNum+1)) +minNum

let attempts = 0
let guess
let running = true

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`)
    guess = Number(guess)

    if(isNaN()){
            window.alert(`Please enter a valid number`)
    }
    else if(gues < minNum || guess > maxNum){
            window.alert(`Please enter a valid number`)
    }
    else{
        attempts++
        if(guess< answer){
            window.alert(`Too Low`)
        }
        else if(guess <answer){
            window.alert(`Too High`)
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`)
        }
        running = false

    }

    
}