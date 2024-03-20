/*58: Average Score Calculator: Write a simple program that can take lots of scores and find their average*/
/*Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score.*/

function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum,score)=> sum + score, 0);
    return total / scores.length;
}

console.log(averageScore(90, 30, 70, 40,));
