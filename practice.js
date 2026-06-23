//Your professional profile as JavaScript data
const profile = {
    name: "Ifeanyichukwu Kanu",
    title: "IT Project Manager",
    certified: true,
    years: 10,
    skills: ["Project Management", "HTML", "CSS", "JavaScript", "React"],
    location: "Lagos, Nigeria"
};

//functions
const introduce = (name, years) => {
    return `${name} has ${years} years of experience.`;
};
const generateBio = (person) => {
    return `${person.name} is a ${person.title} with ${person.years} years of experience.`;
}

//map method

//format each skill with a number

const formatSkills = (skillsArray) => {
    return skillsArray.map((skill, index) => {
        return `${index + 1}. ${skill}`;
    });
};

//check if person is senior (5 years)
const isSenior = (years) => {
    return years > 5;
}

//Access and log each piece
console.log(profile.name);
console.log(profile.title);
console.log(profile.certified);
console.log(profile.skills);
console.log(profile.skills[4]);
console.log(profile.location);
console.log(introduce("Ifeanyichukwu", 10));
console.log(generateBio(profile));
console.log(isSenior(profile.years));

const heading = document.querySelector("#hero h1");
heading.textContent = "Hello, I'm a Software Engineer";

const hero = document.querySelector("#hero");
hero.style.backgroundColor = "#ff6b6b";

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    alert("Button clicked!");
});