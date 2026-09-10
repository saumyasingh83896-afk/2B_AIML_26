class Student {

    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Normal method
    display() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }

    // Static method
    static college() {
        console.log("College: ABES Engineering College");
    }
}

// Creating objects
let s1 = new Student("Saumya", 20);
let s2 = new Student("Neha", 21);

// Calling normal method using object
s1.display();
s2.display();

// Calling static method using class name
Student.college();