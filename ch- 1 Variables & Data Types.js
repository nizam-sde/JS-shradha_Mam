// alert is use to send alert popup in browser
/* alert("Apna College"); */

// to print msg 

console.log("Nizam Is Cool")

Name = "Tony Stark";
Age = 21;
role= "Full Stack developer"
x= null;
y= undefined;
isFollow= true;
console.log(Name, Age, role, x, y, isFollow)

// There are 3 types of container with us let, Const, Var 
// never declare any container diretly always use any one of the 3  

// var can be REPLACED/Re-Decleare Cum Update but it is globally available

let name = "Nizam Sir Is Cool"
let age = 21
console.log(name, age)

// let cannot be re-decleared but updated in future need

let age = 22;
age=25;
age=35;

// Const nither be re-decleared nor be updated again (once you decleared it is fixed globally)

const age = 24;

// age = 35; we can't do this again (const prefered to write in CAPITAL CASE)

// Data types

//primitive data type
// Number, String, Boolean, Undefined, Null, BigInt, Symbol

//Non-primitive data types
// objects (collection of values)
//    Arrays, Functions

let students ={
    fullName: M Nizam,
    age: 21,
    cgpa: b+,
    role: web dev,
    isPass: true
}

console.log(students.age);  
// console.log(students["age"]) both can be used 

// this is how we can assign a new value

students["age"] = students["age"] + 1;