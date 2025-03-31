// Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Student Class (Inherits from Person)
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and I am in grade ${this.grade}.`;
    }
}

// Form Submission Event Listener
document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    let person;
    if(grade && grade>12)
    {
        alert("Grade cannot be grater than 12");
    }
    // Check if grade is provided to determine if the user is a student
    if (grade && grade<12) {
        person = new Student(name, age, grade);
    } else {
        person = new Person(name, age);
    }

    // Display output
    document.getElementById('output').innerText = person.greet();
});
