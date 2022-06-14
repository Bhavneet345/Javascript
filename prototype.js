function Vehicle(numwheels, price){
    this.numwheels = numwheels;
    this.price = price;
}

Vehicle.prototype.getprice = this.getprice = function(){
    return this.price;
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

console.log(vehicle1);
console.log(vehicle1.getprice())

console.log(vehicle1.__proto__)
// console.log(vehicle1.getprice.prototype)
// console.log(Vehicle.prototype)
// console.log(Vehicle.prototype.constructor)
console.log(Object.getPrototypeOf(vehicle1));