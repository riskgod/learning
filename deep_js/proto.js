function Person() {

}

var person1 = new Person();
var person2 = new Person();

Person.prototype.name = 'jiahua';
person2.name = 'xiangnan'

console.log(person1 === Person.prototype);

console.log(person1.constructor === Person.prototype.constructor);