
let f = "firstname";
let l = "lastname";

let data = {
    [f]: "Saumya",
    [l]: "Singh",

    show() {
        console.log(this.firstname);
        console.log(this.lastname);
    }
};

data.show();
/*
console.log(data.firstname);
console.log(data.lastname);*/