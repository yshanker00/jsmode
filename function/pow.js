function pow(base,exponent){
    let result = base;
    for (i = 1; i < exponent;i++){
      result *= base;
    }
return result
}
console.log(pow(2,3));