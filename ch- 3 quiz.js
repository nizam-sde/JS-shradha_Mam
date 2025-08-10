let i = 0;
while ( i <= 100){
    console.log("Num = ", i);
    i++
}

for (let num = 0; num <= 100; num++){
    if(num%2 === 0){
        console.log("Count - ", num);
    } else{}
    
}

// Number game

/* let gameNum = 25;
let userNum = prompt("Guess the Number =")
while(userNum != gameNum){
   userNum = prompt("Try again =")
}
console.log("Congratulation You Guessed Correct Number =", gameNum); */

// string and there properties

let str = "Nizam";
let str2 = 'Nizam Sir Is Cool';

// in-built properties

// str.length

console.log(str[2]); //z

// Template  Literals

let splstr = `Nizam Sir You Are Amazing ${1+2}`;
console.log(splstr);

//escape character \n it gives you a new line if needed

console.log("Happy birthday \n Nizam Sir");
console.log("Thank you \t Bro");

//string methods
// str.toUpperCase()
// str.toLowerCase()
// str.trim()
//str.slice(start,end?)
//str1.concat(str2)
//str.replace(searchVal, newVal)
//str.charAt(idx)

let userName = prompt("Your Name Please")
nameLength = userName.length;
console.log("@" + userName + nameLength);