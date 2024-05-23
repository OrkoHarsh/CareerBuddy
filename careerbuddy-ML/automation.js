//

const fs = require("fs");

const f = require("./data/ITjobs.json");
// const arr = [];
// f.forEach((e) => {
//   arr.push(e["Suggested Job Role"]);
// });

// const unique = [...new Set(arr)];

// const skillsMap = {};
// unique.forEach((e, i) => {
//   skillsMap[e] = i;
// });

// // dump this map to a JSON
// fs.writeFileSync("./data/skillsMap.json", JSON.stringify(skillsMap));

// const arr = [];
// f.forEach((e) => {
//   arr.push(e["worked in teams ever?"]);
// });

// const unique = [...new Set(arr)];
// console.log(unique);

// const skillsMap = {};
// unique.forEach((e, i) => {
//   skillsMap[e] = i;
// });
// console.log(skillsMap);

// certifications
const certifications = {
  "information security": 0,
  "shell programming": 1,
  "r programming": 2,
  "distro making": 3,
  "machine learning": 4,
  "full stack": 5,
  hadoop: 6,
  "app development": 7,
  python: 8,
};

// workshops
const workshops = {
  testing: 0,
  "database security": 1,
  "game development": 2,
  "data science": 3,
  "system designing": 4,
  hacking: 5,
  "cloud computing": 6,
  "web technologies": 7,
};

// read and write skills
const rawSkills = { poor: 0, excellent: 1, medium: 2 };

// memory capability score
const memCapability = { poor: 0, excellent: 1, medium: 2 };

// Interested subjects
const intereSubs = {
  programming: 0,
  Management: 1,
  "data engineering": 2,
  networks: 3,
  "Software Engineering": 4,
  "cloud computing": 5,
  "parallel computing": 6,
  IOT: 7,
  "Computer Architecture": 8,
  hacking: 9,
};

// interested career area
const intereCareer = {
  testing: 0,
  "system developer": 1,
  "Business process analyst": 2,
  security: 3,
  developer: 4,
  "cloud computing": 5,
};

// type of company
const typeOfCompany = {
  BPA: 0,
  "Cloud Services": 1,
  "product development": 2,
  "Testing and Maintainance Services": 3,
  "SAaS services": 4,
  "Web Services": 5,
  Finance: 6,
  "Sales and Marketing": 7,
  "Product based": 8,
  "Service Based": 9,
};

// type of books
const typeOfBooks = {
  Series: 0,
  Autobiographies: 1,
  Travel: 2,
  Guide: 3,
  Health: 4,
  Journals: 5,
  Anthology: 6,
  Dictionaries: 7,
  "Prayer books": 8,
  Art: 9,
  Encyclopedias: 10,
  "Religion-Spirituality": 11,
  "Action and Adventure": 12,
  Comics: 13,
  Horror: 14,
  Satire: 15,
  "Self help": 16,
  History: 17,
  Cookbooks: 18,
  Math: 19,
  Biographies: 20,
  Drama: 21,
  Diaries: 22,
  "Science fiction": 23,
  Poetry: 24,
  Romance: 25,
  Science: 26,
  Trilogy: 27,
  Fantasy: 28,
  Childrens: 29,
  Mystery: 30,
};

// type of company
const mgmOrTech = { Management: 0, Technical: 1 };

// smart/hard worker
const typeOfWorker = { "smart worker": 0, "hard worker": 1 };

// worked in teams ever?
const workInTeams = { yes: 0, no: 1 };

// Introvert?
const Introvert = { yes: 0, no: 1 };

// y:
const jobTitle = {
  "Applications Developer": 0,
  "CRM Technical Developer": 1,
  "Database Developer": 2,
  "Mobile Applications Developer": 3,
  "Network Security Engineer": 4,
  "Software Developer": 5,
  "Software Engineer": 6,
  "Software Quality Assurance (QA) / Testing": 7,
  "Systems Security Administrator": 8,
  "Technical Support": 9,
  "UX Designer": 10,
  "Web Developer": 11,
};

const fc = require("./data/ITjobsEnumiration.json");
const d = [];
fc.forEach((e) => {
  d.push({
    "Logical quotient rating": e["Logical quotient rating"],
    hackathons: e.hackathons,
    "coding skills rating": e["coding skills rating"],
    "public speaking points": e["public speaking points"],
    "self-learning capability?":
      e["self-learning capability?"] === "yes" ? 1 : 0,
    "Extra-courses did": e["Extra-courses did"] === "yes" ? 1 : 0,
    certifications: certifications[e.certifications],
    workshops: workshops[e.workshops],
    "reading and writing skills": rawSkills[e["reading and writing skills"]],
    "memory capability score": memCapability[e["memory capability score"]],
    "Interested subjects": intereSubs[e["Interested subjects"]],
    "interested career area": intereCareer[e["interested career area"]],
    "Type of company want to settle in?":
      typeOfCompany[e["Type of company want to settle in?"]],
    "Taken inputs from seniors or elders":
      e["Taken inputs from seniors or elders"] === "yes" ? 1 : 0,
    "Interested Type of Books": typeOfBooks[e["Interested Type of Books"]],
    "Management or Technical": mgmOrTech[e["Management or Technical"]],
    "hard/smart worker": typeOfWorker[e["hard/smart worker"]],
    "worked in teams ever?": workInTeams[e["worked in teams ever?"]],
    Introvert: Introvert[e.Introvert],
    "Suggested Job Role": jobTitle[e["Suggested Job Role"]],
  });
});

console.log(d, d[1234]);

fs.writeFileSync("./data/ITjobsEnumiration.json", JSON.stringify(d));
