function add(num1, num2) {
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}
// const total = add(2,5);
console.log(add(2,4,6,8,10,20));