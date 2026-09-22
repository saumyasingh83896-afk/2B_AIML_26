class Vehicle {
    constructor(no, driver, distance) {
        this.no = no;
        this.driver = driver;
        this.distance = distance;
    }

    calculateFare() {
        return 0;
    }

    static platform() {
        console.log("Platform: GoRide");
    }
}

class Car extends Vehicle {
    calculateFare() {
        return this.distance * 15;
    }
}

class Bike extends Vehicle {
    calculateFare() {
        return this.distance * 8;
    }
}

let car = new Car("C101", "Rahul", 20);
let bike = new Bike("B101", "Aman", 15);

Vehicle.platform();
console.log("Car Fare:", car.calculateFare());
console.log("Bike Fare:", bike.calculateFare());