function outter(){
    var outtervar = 10;
    function inner(){
        console.log(outtervar);
    }
    inner();
}

outter();