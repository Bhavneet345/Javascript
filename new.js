function vehicle(name){
    this.name = name;
    console.log(this);
}

new vehicle("Car");