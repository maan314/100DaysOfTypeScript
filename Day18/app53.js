/*53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them. */
var developerSkills = {
    langauges: ["JavaScript", "Python", "Ruby"],
    frameWorks: ["React", "Angular", "Vue",],
    tools: ["Git", "Docker", "WebPack"]
};
var langauges = developerSkills.langauges, frameWorks = developerSkills.frameWorks, tools = developerSkills.tools;
console.log("Languages: ".concat(langauges[0], ",\nFrameworks: ").concat(frameWorks[1], ",\nTools: ").concat(tools));
