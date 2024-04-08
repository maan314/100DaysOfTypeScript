/*114: Iterate over a Map of student IDs and names, and log each pair to the console.
Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.*/

const students = new Map<number,string>();

students.set(1,"Aslam");
students.set(2,"Aadil");
students.set(3,"Suffi");
students.set(4,"Khan");
students.set(5,"Viki");

students.forEach((name,id) =>{
        console.log(`Student ID: ${id}, Name: ${name}`);
})