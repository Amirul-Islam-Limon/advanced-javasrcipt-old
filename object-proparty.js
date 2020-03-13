const students = [
    {id : 41, name : "dipjol"},
    {id : 51, name : "purnima"},
    {id : 71, name : "dipika"}
]

const name = students.map(s => s.name);
console.log(name);
const id = students.map(d => d.id);
console.log(id);
const Id = students.map(d => d.id < 50);
console.log(Id);
const find = students.find(d => d.id > 40);
console.log(find);

