/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - By default the 'this' keyword references the window object.
* 2. Implicit Binding - When you invoke a function. Look to the left of the dot (.) and that is what the 'this' keyword is referencing.
* 3. new Binding - When you create a new function with the 'new' keyword, the 'this' keyword references the new object and its data.
* 4. Explicit Binding - Use .call(), .apply(), and .bind(). When you invoke the function you pass in an object, that object is what the 'this' keyword is referencing. 

* write out a code example of each explanation above
*/

// Principle 1

function myName(name) {
    console.log(this)
    return name;
}
myName('Dan')

// Principle 2

const sayHi = {
    greeting: 'Hello',
    greet: function (name){
        console.log(`${this.greeting} my name is ${name}`)
    }
}

sayHi.greet('Dan'); //

// Principle 3

const horse = new Animal({name: 'Horse', type: 'Mammal'});

function Animal(attrs) {
    this.name = attrs.name;
    this.type = attrs.type;
    this.info = function(){
    console.log(`Did you know a ${this.name} is a ${this.type}`);
    }
};

horse.info();

// Principle 4

const sweetArr = ['candy', 'cookies', 'chocolate'];

const jessica = {
    name: 'Jessica',
    age: 32
};

function speakInfo(sweet1, sweet2, sweet3) {
    console.log(`Hello my name ${this.name} and I am ${this.age} years old! I love sweets and my favorites are ${sweet1}, ${sweet2}, ${sweet3}.`)
}

speakInfo.call(jessica,...sweetArr);