var factorial = function fact(num){
    var ans = 1;
    for(var i = 1; i <= num; i++){
        ans *= i;
    }
    return ans;
};

console.log(factorial);
console.log(factorial(5));