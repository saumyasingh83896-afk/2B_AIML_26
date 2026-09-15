class student  {
    constructor(rollno,name,age){ 
        this.rollno = rollno;
        this.name = name;
        this.age = age;
     /* console.log("Rollno: " + this.rollno);
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);*/
    }

    display() {
        console.log("Rollno: " + this.rollno);
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

let s1 = new student();
let s2 = new student(101,"Saumya",20);
let s3 = new student(102,"Neha",21);

s1.display();
s2.display();
s3.display();
