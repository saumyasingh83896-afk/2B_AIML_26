
let f = "firstname";
let l = "lastname";

let data = {
    [f]: "Saumya",
    [l]: "Singh",

    
    'detail show'() {
        console.log(this.firstname);
        console.log(this.lastname);
    }
};

data['detail show']();
/*
console.log(data.firstname);
console.log(data.lastname);*/