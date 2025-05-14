//console.log(Math.PI)

//let x = 81
//let z
//z = Math.round(x)
//z = Math.floor(x)
//z = Math.ceil(x)
//z = Math.trunc(x)
//z = Math.pow(x)
//z = Math.sqrtd(x)

//console.log(z)

//6 sided dice
//let randomNum = Math.floor(Math.random() * 6) + 1;
//console.log(randomNum);


const myButton = document.getElementById("myButton")
const myLabel = document.getElementById("myLabel")
const min = 1
const max = 6
let randomNum;
console.log(randomNum)

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * (max)) + min
    myLabel.textContent = randomNum
}