var h1 = "scope";
console.log(h1);

function demo(){
    console.log(i);
    var i = 10;
}

demo();
// console.log(i); errors

function demo1(){
    var h1 = "scope1"
    console.log(h1);
}

demo1();

function multiply(a, b) {
    return a*b;
};

console.log(multiply);

var a = 10;

function test() {
    var a = 20;
}

test(); 
console.log(a);