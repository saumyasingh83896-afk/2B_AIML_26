class Employee {
  constructor(id, name, salary) {
    this.id = id; 
   this.name = name;
    this.salary = salary;
  }
   
  calculateSalary() {
     return this.salary;
  }

}

class Manager extends Employee {
    constructor(id, name, salary, incentive) {
        super(id, name, salary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return super.calculateSalary() + this.incentive;
    }
}

let emp1 = new Employee(1, "Saumya", 50000);
let emp2 = new Manager(2, "Shivi", 60000, 10000);

console.log("Employee Name: " , emp1.name);
console.log(" Salary: " , emp1.calculateSalary());

console.log("-------------------------");

console.log("Manager Name: " , emp2.name);
console.log("Salary: ", emp2.calculateSalary());
