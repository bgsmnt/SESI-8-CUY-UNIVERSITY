let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")

function generatePassword(length) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const Symbol = "`!@#$%^&*()_+|}{:?></.,';\\][~";

    const data = lowerAlphabet + upperAlphabet + numeric + Symbol;
    let generator = '';
    for (let index = 0; index < length; index++) {
        generator += data[~~(Math.random() * data.length)]; // fixed += to concatenate characters
    }
    return generator
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    setTimeout(() => {
        alert('password has been generated!!')
    }, 200)
}

function savePassword() {
}