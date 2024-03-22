/*62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information,*/

//creating a blueprint(interface) for stdnt info
interface Student {
    name: string;
    age: number;
    classes: string[];
}
//filling in the blueprint
let student: Student = {
    name: "Aslam",
    age: 20,
    classes: ['English', 'Science', 'Urdu']
}
//showing the stdnt info
console.log(student);
// we use blueprint to make sure our student must have all that;
