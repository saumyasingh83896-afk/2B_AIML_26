class Person {
    static count = 0;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        Person.count++;
    }

    displayDetails() {
        console.log(this.id, this.name, this.age);
    }

    static total() {
        console.log("Total Persons:", Person.count);
    }
}

class Doctor extends Person {
    constructor(id, name, age, spec, fee) {
        super(id, name, age);
        this.spec = spec;
        this.fee = fee;
    }

    displayDetails() {
        console.log(this.id, this.name, this.age, this.spec, this.fee);
    }
}

class Patient extends Person {
    constructor(id, name, age, disease, room) {
        super(id, name, age);
        this.disease = disease;
        this.room = room;
    }

    displayDetails() {
        console.log(this.id, this.name, this.age, this.disease, this.room);
    }
}

let d1 = new Doctor(1, "Dr. A", 40, "Cardio", 1000);
let d2 = new Doctor(2, "Dr. B", 45, "Neuro", 1200);
let p1 = new Patient(3, "Ram", 25, "Fever", 101);
let p2 = new Patient(4, "Sita", 30, "Diabetes", 102);

d1.displayDetails();
d2.displayDetails();
p1.displayDetails();
p2.displayDetails();

Person.total();