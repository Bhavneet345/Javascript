var arr = new Array(1, 2, 3, 4);
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("\n");

function print(element){
    console.log(element);
}

arr.forEach(print);

console.log("\n");

for (var i in arr){
    console.log(arr[i])
}