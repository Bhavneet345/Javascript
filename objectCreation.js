// var student = {
//     name : "Ram",
//     rollno : 10, 
//     marks : 100
// };

// console.log(student)

function createStudent(name, rollno, marks){
    var student = {};
    student.name = name;
    student.rollno = rollno;
    student.marks = marks;
    return student;
}

var student1 = new createStudent("Ram", 15, 77);
console.log(student1);