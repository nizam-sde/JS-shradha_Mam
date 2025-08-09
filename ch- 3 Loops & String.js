// for Loop

console.log("Welcome to Full Stack Web Development [HTML5 CSS3 JS]");

for (let i = 1; i <= 2; i++) {
    console.log("Nizam Sir is so cool");
}

// count 1 - 5 loop practice

// for (sum = 1; sum <= 5; sum++) {
//     console.log(sum)
// }

// sum 1-5 loop practice
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);

// infinite Loop (Never Start any loop in project)

// while Loop
let i = 150;
while (i <= 5) {
    console.log("i =", i);
    i++; //if i dont add this statement then i will not add 1 and it will stuck in infinite loop
}

// do-while Loop (atlest it will run 1  time this is difference b/w while & do while loop)

do {
    console.log("Thank You Nizam Sir");
    i++
} while (i <= 10);

// for of Loop (it help to loop strings & arrays)
// we do not use this loop for objects
let str = "Edtech India";

for (let p of str) {
    console.log("p =", p);
}

// for in Loop (for objects)

let student = {
    name: "Nizam",
    age: 21,
    cgpa: 9.8,
    isPass: true,
};

for (let key in student) {
    console.log("key = ", key, "Value = ", student[key]);
}