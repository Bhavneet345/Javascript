var factorial = function fact(n){
    if(n == 1){
        return 1;
    }
    // return n * fact(n - 1);
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial);

var RectArea = function(width, height) {
    return width * height;
}

console.log(RectArea(5,4));

var a = 1;

function b() {
    a = 10;
    return;
    function a() { }
}

b();
console.log(a);

function f(a,b = 1) {
    console.log(a*b)
  }
  var x=// some hidden  value
  f(5,x);