const fs = require("fs");
const path = require("path");

const teamMembers = [
  {
    name: "Afnan Fahim",
    role: "CEO",
    image: fs.readFileSync(path.join(__dirname, "assets/afnan.jpg")), // Read binary
  },
  {
    name: "Abdul Haseeb",
    role: "CTO",
    image: fs.readFileSync(path.join(__dirname, "assets/haseeb.jpeg")),
  },
  {
    name: "Rayyan Fahim",
    role: "COO",
    image: fs.readFileSync(path.join(__dirname, "assets/rayyan.jpg")),
  },
];

module.exports = teamMembers;