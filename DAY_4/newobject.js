let student = new Object();
    student.name = "Saumya";
    student.lastName = "Singh";
    student.city = "kanpur nagar";
    student.pincode = 209401;
    student.salary = function() {
    console.log("Salary is 50000");
};
    student.subjects = ["Maths", "Java", "C++"];
console.log(student.name);
console.log(student.lastName);
console.log(student.city);
console.log(student.pincode);
console.log(student.subjects);

student.salary();