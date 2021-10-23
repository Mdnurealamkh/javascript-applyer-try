 
//  prime Number Chake

function isPrime(n) {
    for(i = 2; i < n; i++) {
        if (n % i == 0) {
           return`This is not prime Number `;
        }
        else{
            return`This is Prime Number`;
        }
    }

}

let result = isPrime(139);
console.log(result);