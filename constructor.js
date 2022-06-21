function Vehicle(numwheels, price){
    this.numwheels = numwheels;
    this.price = price;
    this.getprice = function(){
        return this.price;
    }
}

var vehicle1 = new Vehicle(2, 50000);
var vehicle2 = new Vehicle(4, 500000);

console.log(vehicle1);
console.log(vehicle2);

console.log(vehicle1.getprice());
console.log(vehicle2.getprice());