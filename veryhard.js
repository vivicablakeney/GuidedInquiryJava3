//  Class and constructor work like objects, but when written this way
// you can assign the values to each key anytime, and create multiple of the same objects with the 
// same keys but different values.

class person {
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("Running is fun! - Said no one ever")
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

//plugged values in
const person1 = new person("Vivica", "Fullstack Engineer", 22);

console.log(person1.name);
console.log(person1.job);
console.log(person1.age);
person1.exercise();
person1.fetchJob();

// programmer class that inherits properties from the programmer class and also adds in a 
// languages key 
//busy property is set to true by default
class Programmer extends person{
    constructor(name, job, age, language =[]) {
        super(name, job, age);
        this.language = language;
        this.busy = true;
    }

// // completeTask and acceptNewTask reassign false and true 
// depending on wether the if programmer is not busy or busy 
    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

// else if statment lets user know if they are busy or not based off of the newly created methods above will print out true or false based on current status
    offerNewTask() {
        if (this.busy){
            console.log(`Sorry but ${this.name} is already busy with another task`)
        } else {
            console.log(`${this.name} is ready for another task`)
        }
    }

// pushes a new string element "language" into the end of  array of the programmer
    learnLanguage(language) {
        this.language.push(language);
    }

// function below will lists all of the languages in the programmer's array
    listLanguages() {
        console.log(this.languages)
    }
}

//Practice Run
const programmer2 = new Programmer("Allah", "Engineer", 23, ["JavaScript", "CSS"]);
const Vivica = new Programmer("Vivica", "Full-Stack Developer", 23, ["React", "MySQL"]);
console.log(programmer2.name);
console.log(programmer2.job);
console.log(programmer2.age);
console.log(programmer2.language);
console.log(programmer2.busy);
programmer2.exercise();
programmer2.fetchJob();

console.log(Vivica.name);
console.log(Vivica.job);
console.log(Vivica.age);
console.log(Vivica.language);
console.log(Vivica.busy);
Vivica.exercise();
Vivica.fetchJob();

// complete task is applied *.busy*
//reassigns the value of busy to false and then console logs if they still are busy after they've completed the previous task * --> expected output: false*
programmer2.completeTask();
console.log(programmer2.busy);

programmer2.acceptNewTask();
console.log(programmer2.busy);

programmer2.offerNewTask();

Vivica.completeTask();
console.log(Vivica.busy);

Vivica.acceptNewTask();
console.log(Vivica.busy);

Vivica.offerNewTask();

// has to learn languages one by one with the learnLanguage method since there is only one 
// parameter in the method function: learnLanguage(language){} <-- "language" is the only parameter
programmer2.learnLanguage("React");
programmer2.learnLanguage("MySQL");
programmer2.listLanguages();

Vivica.learnLanguage("React");
Vivica.learnLanguage("MySQL");

Vivica.listLanguages();