class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return console.log('hello, I am ' + this.name)
    }
}

var person = new Person('jiahua');

person.sayHello();

//static 不能在new 中被调用
class Anima {
    static sayName() {
        return console.log('ertong')
    }
}

const a = new Anima;

a.sayName()