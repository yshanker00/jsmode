var items = [
    {name:'bike', price:100},
    {name:'TV', price:500},
    {name:'Books', price:10},
    {name:'Phone', price:60},
    {name:'Computer', price:1000},
    {name:'laptop', price:6000},
    {name:'monitor', price:200},
]

var foundItem = items.find(item => {
    return item.name == 'bike';
})

console.log(foundItem);

