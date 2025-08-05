console.log("This is a javascript 2nd chapter")
// this is a single line comment
/* this is a
multiline comment */

/* Operators in JS
        Arithmetic Operators
            +, -, *, /

            . Modulus
            . Exponentiation
            . Increment
            . Decrement */

let a = 5;
let b = 2;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

// Modulus me divide krne pr jo reminder bachta hai uski value dikhata hai

console.log("a % b =", a % b);

// Exponentiation hum logo ko power btata hai ex- a to the power b

console.log("a ** b =", a ** b);

/* Unary Operator
    Increment ++    a = a + 1
    Decrement --    a = a - 1      
    we can write it actualy 2 way but to automate everyting it was introduced                                      */
a = a + 1;
console.log("Normal way")
console.log("a = a + 1 = ", a);

a++;
console.log("Increment way")
console.log("a + 1 = ", a);

++a;
console.log("Increment 2nd way")
console.log("++a = ", a);

a--;
console.log("Decrement way")
console.log("a - 1 = ", a);

--a;
console.log("Decrement 2nd way")
console.log("--a = ", a);

// Assignment Operators

a += 4;
console.log("a + 4 = ", a);

a -= 4;
console.log("a - 4 = ", a);

a *= 4;
console.log("a * 4 = ", a);

a /= 4;
console.log("a / 4 = ", a);

/* Comparison Operators
    Equal to ==         Equal to & type ===
    Not eqal to !=      Not Equal to & type !== 
    
    <   >   <=  >=               */


console.log("a == b = ", a == b);
console.log("a === b = ", a === b);
console.log("a != b = ", a != b);
console.log("a !== b = ", a !== b);


// is a greater then b
console.log("a > b = ", a > b);

// is a smaller then b
console.log("a < b = ", a < b);

// is a smaller then b or equal to b
console.log("a <= b = ", a <= b);

// is a greater then b or equal to b
console.log("a >= b = ", a >= b);

/* Logical operators

    Logical AND &&      used when condition 1 & Condition 2 Both are true
                                        and the answer is true
    Logical OR ||       used when any of condition is true the final ans is
                                            True
    Logical NOT !       used when statement is true he will say false
                        and if statement is false he will say true  */

let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 && cond2 = ", cond1 && cond2);

console.log("cond1 || cond2 = ", cond1 || cond2);

console.log("cond1 ! cond2 = ", !(cond1 > cond2));

// Conditional statements
// Ex - if Else Statement
let age = 18;

if (age >= 18) {
    console.log("Your lisence is here");
}
else {
    console.log(" bachha hai tu bhai");
}

// another ex = dark and light mode of screen
// if if example
let mode = "dark";
let color;

if (mode === "dark") {
    color = "Black";
}
if (mode === "light") {
    color = "White";
}
console.log(color);

// If Else

if (mode === "dark") {
    color = "black"
} else {
    color = "white"
}
console.log(color);

// odd even statement

let num = 7;

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

//else if statement

if (age<18){
    console.log("Teenager")
}else if (age >= 60){
    console.log("Senior citizen")
} else{
    console.log("Adult")
}

// ternary Operators // simpler way of writing if else statement

let result = age >= 18 ? "adult " : "Minor Child";
console.log(result);

age >= 18 ? console.log("aDult") : ("Minor Child");

