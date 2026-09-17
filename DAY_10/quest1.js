class Student {
    static totalStudents = 0;

    constructor( rollNo ,name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.totalStudents++;
    }

    displayDetails() {
        console.log("Roll No: " , this.rollNo);
        console.log("Name: " , this.name);
        console.log("Marks: " , this.marks);

        if(this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
            console.log("-----------------------------");
    }

        static displayTotalStudents() {
            console.log("Total Students: " , Student.totalStudents);
        }
    }
    let s1 = new Student(1, "Saumya", 80);
    let s2 = new Student(2, "shivi", 35);
    let s3 = new Student(3, "nimmi", 50);
    s1.displayDetails();
    s2.displayDetails();
    s3.displayDetails();


    Student.displayTotalStudents();