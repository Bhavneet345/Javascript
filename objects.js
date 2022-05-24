// var student = {};
// console.log(typeof(student)) // onject

var student = {
    name: "abc", 
    roll: 25,
    marks: 90
};

console.log(student);

// student.sem = 2;

// console.log(student);

student["marks"] = 100;
console.log(student);

student["sem"] = 4;
console.log(student);

//delete property

delete student.sem;
console.log(student);

function change1(obj) {
    obj.name = "ninjas"
  }
  function change2(obj) {
    obj = {name: "changed"}
  }
  
  var obj = {name:"coding"}
  
  change1(obj)
  change2(obj)
  console.log(obj.name)