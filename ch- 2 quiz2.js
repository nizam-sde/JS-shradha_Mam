let num = prompt("Enter Number");

if (num % 5 === 0){
    console.log(num, "Its Mulpiple by 5")
}else{
    console.log(num, "not multiple to 5")
}

let score = prompt("Enter your Score")
let grade = score
if (grade >= 90 && grade <= 100){
    grade = "A+ You Scored";
}else if (grade >= 70 && grade <= 89){
    grade = "B";
}
else if (grade >= 60 && grade <= 69){
    grade = "C";
}
else if (grade >= 50 && grade <= 59){
    grade = "D";
}
else if (grade >= 0 && grade <= 49){
    grade = "Fail";
}
console.log("Your Grade is ", grade, "&", score, " Was Your Score"); 