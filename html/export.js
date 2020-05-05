let height = 100;
let width = 200;
  function sum (num1 , num2){
    return num1 + num2;
  }
  console.log(sum(10,20));
class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName () {
    return this.firstName + " " + this.lastName;
  }
}

export {height, width,sum , Person};




// export let height = 100;
// export let width = 200;
// export  function sum (num1 , num2){
//     return num1 + num2;
//   }

// export class Person {
//   constructor (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   fullName () {
//     return this.firstName + " " + this.lastName;
//   }
// }

