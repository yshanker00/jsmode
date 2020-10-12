function findMinimum(n1,n2){
    if(n1>n2)
        return n2
    
    if(n2>n1){
        return n1
    }
}

console.log(findMinimum(20,3));

findMinimum =(a,b) => a>b?b:a
console.log(findMinimum(20,32));