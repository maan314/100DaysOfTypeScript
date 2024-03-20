/*57: Find the Average Grade: Given a list of grades, calculate the average grade.  We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.*/
var grades = [88, 95, 73, 98, 49, 68];
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrades);
