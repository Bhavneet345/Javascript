var i = 10;

function outter(){
    var j = 20;
    console.log(i, j);
    var inner = function(){
        var k = 30;
        console.log(j, k);
    }
    return inner;
}

var inner = outter();
inner();

// for(var a = 1; a < 5; a++){
//     setTimeout(function(){
//     console.log(a)}, 1000);
//     } 

for(let a = 1; a < 5; a++){
    setTimeout(function(){
    console.log(a)}, 1000);
} 