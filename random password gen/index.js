
const passwordLength = 12
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true


function generatePassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase){
    const lowercaseChars = "qwertyuiopasdfghjklxcvbnm"
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const numbers = "1234567890"
    const symbols = `"!£$%^&*()=+-~#?/>.<,`

    let allowedChars = ""
    let password = ""

    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numbers : ""
    allowedChars += includeSymbols ? symbols : ""

    if(length <= 0){
        return `(password length must be at least 1)`
    }
    if(allowedChars.length === 0){
        return `(at least one set of chars must be selected)`
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return `Your Password is ${password}`
}

const password = generatePassword(passwordLength, includeLowercase, includeNumbers, includeSymbols, includeUppercase)
console.log(password)