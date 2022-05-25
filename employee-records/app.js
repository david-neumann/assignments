let employees = [];

function Employee (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

const harryPotter = new Employee ("Harry Potter", "The Chosen One", 100000);
const hermioneGranger = new Employee ("Hermione Granger", "The Real MVP", 250000);
const ronWeasley = new Employee ("Ron Weasley", "The Ginger", 40000, "Part Time");

Employee.prototype.printEmployeeForm = function () {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
}

harryPotter.printEmployeeForm(); 
hermioneGranger.printEmployeeForm();
ronWeasley.printEmployeeForm();

employees.push(harryPotter, hermioneGranger, ronWeasley);
console.log(employees);