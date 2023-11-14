class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);

// Convert developer object to JSON
const developerJSON = JSON.stringify(developer);

// Print developer as JSON object
console.log(developerJSON);
