/*ass student{
   static fName="Saumya";
    static lName="Singh";
    static display(){
        console.log(this.fName);
        console.log(this.lName);
    }
}
student.display();*/
class student{
   static fName="Saumya";
    static lName="Singh";
     display(){
        console.log(student.fName);
        console.log(student.lName);
    }
}
//student.display();
let s1=new student();
s1.display();