const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const { log } = require("console")
const generateHTML = require("./src/page-template")
var answers = []
var team = []
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
        choices:['Manager','Engineer','Intern'],
        name: "kind"
    },
]
moreEmployee = function(){
    inquirer.prompt([
        {
            type:"list", 
            message:"Enter another emplyee: ", 
            choices:["Yes", "No. Print to file"],
            name: "another"
        }
    ])
    .then(function(data){
        if(data == "Yes"){
            promptUser()
        }else{

        } 
    })

}
specificQs = function(){
    const {name,id,email,kind} = answers
    if (kind == "Manager"){
        inquirer.prompt(managerQs)
        .then(data => {
            const {officeNumber} = data;
            manager = new Manager(name,id,email,officeNumber);
            team.push(manager);
            moreEmployee();


        }
            // creates a manager
        )
        
    }
    else if (kind == "Intern"){
        inquirer.prompt(internQs)
    }
    else if (kind == "Engineer"){
        inquirer.prompt(engineerQs)}
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
const promptUser = function(){
    answers = inquirer.prompt(questions)
    .then(specificQs())
}
print = fs.writeFileSync('emp.html', generateHTML(team)).catch((err) => console.error(err));

promptUser()

