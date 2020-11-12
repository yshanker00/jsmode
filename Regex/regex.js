let datetime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/ ;
console.log(datetime.test("01-03-1922 23:20"));

let neighbor = /neighbou?r/
console.log(neighbor.test("neighbour"));

console.log(new Date())