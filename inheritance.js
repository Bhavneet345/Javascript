class vehicle{
    constructor(numwheels, price) {
        this.numwheels = numwheels;
        this.price = price;
    }
    getprice(){
        return this.price;
    }
    print(){
        console.log("Vehicle ", this.numwheels, this.price);
    }
}

class car extends vehicle{
    constructor(numDoors, price){
        super(4,price)
        this.numDoors = numDoors;
    }
    print(){
        super.print();
        console.log("Num Doors ", this.numDoors);
    }
}

var c = new car(4, 50000);
c.print();