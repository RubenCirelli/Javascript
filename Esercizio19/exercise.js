class Person {
  firstName = " ";
  lastName = " ";
  age = 0;
  constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this._age = age;
  }
  set age(newVal){
    if(newVal < 1){
      this._age = 1;
    } else if (newVal > 110){
      this._age = 109;
    }
  }

  get age() {
    return this._age;
  }

  set firstName(newString){
    if(typeof(newString)!== "String"){
      this.firstName = String(firstName);
    } else {
      this.firstName = firstName;
    }
  }
  
  get firstName(){
    return this.firstName;
  }

  set lastName(newString1){
    if(typeof(newString1)!== "String"){
      this.lastName = String(lastName);
    } else {
      this.lastName = lastName;
    }
  }
  
  get lastName(){
    return this.lastName;
  }

  get fullName(){
    return this.firstName + " "+  this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);