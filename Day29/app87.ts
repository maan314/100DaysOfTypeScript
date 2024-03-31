/*87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.*/
//this func extract the substring;
function extractSubstring(str:string):string{
    return str.substring(0,10)
}

console.log(extractSubstring("Welcome to TypeScript World"));
