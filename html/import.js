import {height, width,sum , Person} from './export.js'
console.log(height , width , sum(10 , 20));
let p = new Person();
p.fullName(n1 , n2);


import * as info from './export.js' 
console.log(info.height , info.width , info.sum(10 , 20));
let p = new info.Person();
p.fullName(n1 , n2);