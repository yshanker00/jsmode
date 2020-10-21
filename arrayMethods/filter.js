var items = [
    {name:'bike', price:100},
    {name:'TV', price:500},
    {name:'Books', price:10},
    {name:'Phone', price:60},
    {name:'Computer', price:1000},
    {name:'laptop', price:6000},
    {name:'monitor', price:200},
]

filterItems = items.filter(item => {
    return item.price <=300;
})
console.log(filterItems)
console.log(items)