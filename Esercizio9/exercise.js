const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
for (const [key, value] of Object.entries(person)){
  console.log(`${key}: ${value}`);
  //I believe using Object.entries is more appropriate to solve the question as mentioned.
}
// Print values of person using Object.keys