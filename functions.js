/*
let username = "shanker";

function showUsername() {
    username = "nani";

    let message = 'hi ' + username;
    console.log(message);

}
console.log(username);

showUsername();

console.log(username);
 */
let message = 'done';

function showMessage(text,message = "cancelled") {
    addphrase = 'hi ' + text;
    return (addphrase + ' '+ message)
    
}
showMessage('today class',message);
console.log(showMessage());
console.log(showMessage('today class',message));

// prime numbers

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
    return true;
}
function showPrimes(n){
    for(let i = 2; i < n; i++){
        if (!isPrime(i)) continue;
        console.log(i);
    }
}
showPrimes(20);