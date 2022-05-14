var student = {
    name: "abc", 
    roll: 25,
    marks: 90,
    address : {
        city : "Delhi",
        pincode: 110023
    }
};

// console.log(student);

// console.log(student["address"])

// console.log(student["address"]["city"])

// console.log(student.address.pincode)

// console.log(student.address.name)


var keys = Object.keys(student);
console.log(keys)