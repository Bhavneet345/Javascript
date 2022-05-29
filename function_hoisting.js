hoistDemo();

function hoistDemo(){
    console.log(i);
    var i = 10; // undefined output due to function hoisting all declarations moved to the top
}

x = 5;
console.log(x);
var x;

hoisted();

function hoisted() {
    console.log('Hoisted');
}