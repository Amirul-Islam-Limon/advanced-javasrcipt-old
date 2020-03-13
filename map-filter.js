const number = [2, 3, 4, 5, 6, 7, 8];
// const result = [];

// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const total = element * element;
//     result.push(total);
// }
// console.log(result);
// const square = element => element * element;
 
// const squarE = number.map(square);
// console.log(squarE);

// const result = number.map(x => x * x);
// console.log(result);

const result  = number.filter(x => x > 5);
const result2  = number.find(x => x > 5);
console.log(result2);