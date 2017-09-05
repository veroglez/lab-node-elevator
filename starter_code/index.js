/*jshint esversion: 6*/

const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person1 = new Person('Vero',1,4);
let person2 = new Person('Juan',2,8);
let person3 = new Person('Pepe',8,5);

elevator.call( person1 );
elevator.call( person2 );
elevator.call( person3 );
elevator.start( );
