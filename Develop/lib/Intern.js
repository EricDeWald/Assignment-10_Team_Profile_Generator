const Emplyee = require('./Employee.js');
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    }
    getSchool = (choosenIntern) => school;
    // * getRole(choosenIntern){&mdash;overridden to return `'Intern'`
    // }
}
module.exports = Intern;
