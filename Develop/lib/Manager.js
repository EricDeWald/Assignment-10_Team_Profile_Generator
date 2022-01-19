const Emplyee = require('./Employee.js');

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = this.officeNumber;
    }
    getRole(officeNumber){"&mdash;overridden to "
        return Manager;
    }
};
// module.exports = Manager;