/*53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them. */

let developerSkills = {
    langauges: ["JavaScript", "Python", "Ruby"],
    frameWorks: ["React", "Angular", "Vue", ],
    tools: ["Git", "Docker", "WebPack" ]
};

let {langauges, frameWorks, tools } = developerSkills;

console.log(`Languages: ${ langauges[0]},
Frameworks: ${frameWorks[1]},
Tools: ${tools}`);

