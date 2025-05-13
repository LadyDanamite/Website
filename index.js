//console.log(`hello`);
//console.log(`welcome here`)

//window.alert(`This is an alert`)

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `Let's test this thing`;

// let pets = 2
// pets ++
// pets = pets * 3
// console.log(pets)

//let username;
//username = window.prompt(`username?`);
//console.log(`hello `+ username);

// let username;
// document.getElementById(`mySubmit`).onclick = function(){
//     username = document.getElementById(`myText`).value
//     document.getElementById(`myH1`).textContent = `Hello ${username}`
// }


const pi = 3.14159
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2* pi * radius;
    document.getElementById("myAnswer").textContent = circumference;
    }