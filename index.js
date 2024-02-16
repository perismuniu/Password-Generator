// Array containing all possible characters for generating passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-1")
let passwordTwoEl = document.getElementById("password-2")

// Function to generate a random character from the characters array
function randomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// Function to generate passwords and display them in the respective elements
function passwordGenerator() {
    let password1 = ""
    let password2 = ""
    // Generate 15-character passwords
    for (let i = 0; i < 15; i++) {
        password1 += randomCharacter()
        password2 += randomCharacter()
    }
     // Display generated passwords in the respective elements
    passwordOneEl.textContent = password1
    passwordTwoEl.textContent = password2
}