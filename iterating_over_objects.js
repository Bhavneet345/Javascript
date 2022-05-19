var student = {
    name: "abc", 
    roll: 25,
    marks: 90
};

for(var prop in student){
    console.log(prop,student[prop])
}

var keys = Object.keys(student);
console.log(keys)