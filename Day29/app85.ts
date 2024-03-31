/*85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.*/

//functions finds where "code" first show up;
function findSubstring(str:string):number{
        return str.indexOf("code");
}
//findig substring with indexOf() method..
console.log(findSubstring("Learn to code with TypeScript"));
//index numbers            0123456789