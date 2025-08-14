let marks = [85, 65, 97, 97, 64, 79];

let sum = 0;

for(let val of marks){
    sum += val;
}
console.log("Full Marks = ", sum, "total no of subjects = ", marks.length);
console.log("avg Val = ", sum / marks.length);

let items = [100, 200, 300, 400, 500]; 

/* let i = 0;
for(let val of items){
    // console.log(`value of index = ${i} = ${val}`);
    let offer = val / 10;
    items [i] = items[i] - offer;
    console.log(`after offer discount = ${items[i]}`);
    i++;
} */

for (i = 0; i < items.length; i++){
    let offer = items[i] /10;
    items[i] -= offer;
}

console.log(items)