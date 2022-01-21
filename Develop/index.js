const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const { log } = require("console")
const generateHTML = require("./src/page-template")

questions = [
    {
        type:"input",
        message:"Enter employee name: ",
        name: "name"
    },{
        type:"input",
        message:"Enter employee ID#: ",
        name: "id"
    },{
        type:"input",
        message:"Enter employee email#: ",
        name: "email"
    },{
        type:"list",
        message:"What kind of employee?: ",
        choices:['Manager', 'Engineer', 'Intern'],
        name: "kind"
    },
]
specificQs = ({kind}) => {
    if (kind == "Manager"){
        inquirer.prompt(managerQs)
    }
    else if (kind == "Intern"){
        inquirer.prompt(internQs)
    }
    else {inquirer.prompt(engineerQs)}
}
managerQs =[
    {
    type:"input", 
    message:"Enter office number: ", 
    name: "officeNumber"
}]
internQs =[{
    type:"input", 
    message:"Enter school: ", 
    name: "school"
}]
engineerQs =[{
    type:"input", 
    message:"Enter GitHub ID: ", 
    name: "github"
}]

// make questions and write to-file use page template.js  create a new instance of whatever there role is to put into the html that can be used with fs 
const promptUser =function(){ return inquirer.prompt(questions).then(({specificQs(ans)})).then()}
promptUser()
// const init = () => {
//     promptUser()
//         .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.error(err));
//     };
  
// init();
  