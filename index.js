const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const charactersWithoutNumber= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const charactersWithNumberOnly = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const charactersWithoutSpecial= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersWithSpecialOnly = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const charactersWithoutSpecial_Number= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const characterWithoutString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const charactersWithStringOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let switchButton = document.querySelector(".switch");
let includeNumber = true
let includeSpecial = true
let includeString = true
let user = document.querySelector("#user")
let options = document.querySelector("#userInfo #info")
let getlength = document.querySelector("#length")
let numbers = document.querySelector("#includeNumber")
let specialCharacter = document.querySelector("#userInfo #info #includespecial")
let stringCharacter = document.querySelector("#userInfo #info #includestring")
let length = 15



function display() {
    console.log(user.value)
    if( user.value == "on") {
        user.value = "off"
        options.style.display = "none"
        
    } else if( user.value == "off") {
        user.value = "on"
        options.style.display = "block"
    } 
}

function getLength() {
    if(getlength.value != 0) {
        length = getlength.value
        console.log(getlength.value)
    } 
}
function toSpecial() {
    console.log("specialCharacter:" + specialCharacter.value)
    if(specialCharacter.value == "off") {
        includeSpecial = false
        specialCharacter.value = "on"
    } else {
        includeSpecial = true
        specialCharacter.value = "off"
    }
}

function toNumber() {
    console.log(includeNumber == true)
    if( numbers.value == "off") {
        includeNumber = false
        numbers.value = "on"
        
    } else {
        includeNumber = true
        numbers.value = "off"
    }

}

function changeString() {
    console.log("string: " + stringCharacter.value)
    if(stringCharacter.value == "off") {
        includeString =false
        stringCharacter.value = "on"
    } else {
        includeString = true
        stringCharacter.value = "off"
    }
}

let pass1 = document.querySelector(".show1");
let pass2 = document.querySelector(".show2");

function getRandomCharacter() {
    console.log(includeNumber +" " + !includeSpecial +" " + !includeString)
    
    // if( includeNumber == false  ) {
    //     return charactersWithoutNumber[Math.floor(Math.random() * charactersWithoutNumber.length)]
    // } else {
    //     return characters[Math.floor(Math.random() * characters.length)]
    // }

    // if(includeNumber == true && includeSpecial == true) {
    //     return characters[Math.floor(Math.random() * characters.length)]
    // } else if(includeNumber == true && includeSpecial == false) {
    //     return charactersWithoutSpecial[Math.floor(Math.random() * charactersWithoutSpecial.length)]
    
    // } else if(includeNumber == false && includeSpecial == true) {
    //     return charactersWithoutNumber[Math.floor(Math.random() * charactersWithoutNumber.length)]
    // } else {
    //     return charactersWithoutSpecial_Number[Math.floor(Math.random() * charactersWithoutSpecial_Number.length)]
    // }

    if(includeNumber && includeSpecial && includeString) {
        return characters[Math.floor(Math.random() * characters.length)]
    } else if(includeNumber && !includeSpecial && !includeString) {
        return charactersWithNumberOnly[Math.floor(Math.random() * charactersWithNumberOnly.length)]
    } else if(!includeNumber && includeSpecial && !includeString) {
        return charactersWithSpecialOnly[Math.floor(Math.random()*charactersWithSpecialOnly.length)]
    } else if(!includeNumber && !includeSpecial && includeString) {
        return charactersWithoutSpecial_Number[Math.floor(Math.random() * charactersWithoutSpecial_Number.length)]
    } else if(includeNumber && includeSpecial && !includeString) {
        return characterWithoutString[Math.floor(Math.random()*characterWithoutString.length)]
    } else if(!includeNumber && includeSpecial && includeString) {
        return charactersWithoutNumber[Math.floor(Math.random()*charactersWithoutNumber.length)]
    } else if(includeNumber && !includeSpecial && includeString) {
        return charactersWithoutSpecial[Math.floor(Math.random()*charactersWithoutSpecial.length)]
    } else {

    }
}

function generateRandomPassword() {
    getLength()

    let password = "";
    for(let i=0; i<length; i++) {
        password += getRandomCharacter()
    }
    return password
}

// button.addEventListener("click", function(){
//     pass1.textContent = generateRandomPassword()
//     pass2.textContent = generateRandomPassword()

//     if(pass1) {
//         alert("pass1");
//     } else {
//         alert("not ");
//     }
// });

console.log(pass1)
function showPass() {
    if(user.value == "on") {
        if(getlength.value == 0) {
            alert(`length is: ${getlength.value}`)
            
        }
        else {
            pass1.textContent = generateRandomPassword()
            pass2.textContent = generateRandomPassword()
        }
    } else {
        pass1.textContent = generateRandomPassword()
        pass2.textContent = generateRandomPassword()
    }
    
    
}


function copyToClip(box = "") {
    console.log(box)
    let copyText = ""
    if( box === 'show1') {
        copyText = document.querySelector(".show1");
    } else if(box === 'show2') {
        copyText = document.querySelector(".show2");
    }

  navigator.clipboard.writeText(copyText.textContent);
  alert("Copied the text: " + copyText.textContent);

}