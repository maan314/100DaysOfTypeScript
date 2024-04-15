/*135: Explain how you can format a JSON string with proper indentation for readability.
Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.*/

const student = {
    name: "Salman",
    rollNo: 7,
    department: "Criminology"
}
// Converts the object into a JSON string with indentation
const studentJson = JSON.stringify(student,null,2); // The '2' specifies the number of spaces to use as white space

console.log(studentJson);