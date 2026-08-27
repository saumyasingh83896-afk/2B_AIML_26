class student {

    constructor(name, lastName, city, pincode, subjects) {
        this.name = name;
        this.lastName = lastName;
        this.city = city;
        this.pincode = pincode;
        this.subjects = subjects;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Last Name:", this.lastName);
        console.log("City:", this.city);
        console.log("Pincode:", this.pincode);
        console.log("Subjects:", this.subjects);
        console.log("----------------");
    }
}

let v1 = new student(
    "Jay",
    "Doe",
    "Noida",
    "201301",
    ["Maths", "Java", "C++"]
);

let v2 = new student(
    "Jane",
    "Smith",
    "Ghaziabad",
    "201002",
    ["Maths", "Java", "C++"]
);

let v3 = new student(
    "Alice",
    "Johnson",
    "Chicago",
    "60601",
    ["Maths", "Java", "C++"]
);


delete v1.name;
delete v1.age;
delete v1.city;


v1.display();
v2.display();
v3.display();