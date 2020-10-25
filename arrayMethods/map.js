var items = [
    {name:'bike', price:100},
    {name:'TV', price:500},
    {name:'Books', price:10},
    {name:'Phone', price:60},
    {name:'Computer', price:1000},
    {name:'laptop', price:6000},
    {name:'monitor', price:200},
]

// array map
var itemNames = items.map(function (item) {
    return item.name;
});
console.log(itemNames);

// mixed filter and map

var itemNames = items.filter(item => {
    return item.price <= 100;
}).map(item => {
    return item.price;
})
console.log(itemNames);

// shorthand

var itemName_1 = items.filter(item => item.price <= 10).map(item => item.price);
console.log(itemName_1);