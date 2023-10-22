const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;


// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName= "Simon";
//questo succede perchè sia person1 che person2 puntano allo stesso oggetto
// di conseguenza cambiando person2 cambierà anche person1

console.log(person1);
console.log(person2);
