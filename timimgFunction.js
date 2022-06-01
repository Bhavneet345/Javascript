// var sec = 1;
// function sayHello(){
//     console.log("hello")
//     sec++;
//     if(sec == 6){
//         clearInterval(id);
//     }
// }

// // setTimeout(sayHello, 10000);

// var id = setInterval(sayHello); // repeats after every time interval

setTimeout(function () {
    console.log("a")
  },20)
  setTimeout(function () {
    console.log("b")
  })
  console.log("c")

  var arr = []

  arr.push("hello")
  arr.hello = 0
  var value = 0
  for(var i = 0;i < 5; i++) {
      value = arr[value]
  }
  console.log(value)