class hello {
    info(){
        console.log(" info hello");
    }
}
class hi extends hello{
    info(){
        super.info();
        console.log("info hi");
    }
}
let h=new hi();
h.info();