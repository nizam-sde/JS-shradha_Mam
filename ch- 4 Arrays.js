// Arrays  - linear way of storing collection of same type of items
// arrays is a smart type of object

let marks = [98, 48, 52 ,97 , 57];
console.log(marks);
console.log(marks.length);

let heros = [ "NIzam the cool", "Nizam the administrator", "Nizam the King", "Nizam the greater of its all time"];
console.log(heros);
console.log(heros.length);

console.log(heros[2]);

//arrays can be changed but string values cannot because strings are immutable means not changeable  IP question

marks[2] = 23;
console.log(marks)

// loop in arrays

for (let i = 0; i < heros.length; i++){
    console.log(heros[i]);
}

// for  - of loop is preferred to use arrays

// for (let el of heros){
//     console.log(heros);
// }

let city = ["delhi", "pune", "mumbai", "dhanbad", "sahebgunj"];
for (let c of city){
    console.log(city);
}