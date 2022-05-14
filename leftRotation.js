function rotateLeft(arr) {
    var element = arr[0];
    arr.splice(0, 1);
    arr.push(element);
    return arr;
}

var arr = new Array(1, 2, 3, 4);
rotateLeft(arr);
console.log(arr);


