function sum (num1 , num2) {
  return num1 + num2;
}
function ass (nu1 , nu2) {
  return nu1 * nu2;
}
function ann (nu1 , nu2) {
  return nu1 / nu2;
}

let name = "jon";
let height = 100; 

// export {sum , ass , name , height , ann}  es6

module.exports = {sum , ass , name , height , ann}  //