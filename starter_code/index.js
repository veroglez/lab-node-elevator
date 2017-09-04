/*jshint esversion: 6*/

const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person1 = new Person('Vero',1,3);
let person2 = new Person('Juan',2,7);
let person3 = new Person('Pepe',5,8);

elevator.call( person1 );
elevator.call( person2 );
elevator.call( person3 );
elevator.start( person1 );
