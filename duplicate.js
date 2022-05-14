function duplicate(arr) {
    function duplicate_helper(element){
        arr.splice(arr.length, 0, element);
    }
    arr.forEach(duplicate_helper);
    return arr;
}