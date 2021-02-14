// methods in javascripts oops

const { ok } = require("assert");
const { clear } = require("console");
const { listenerCount } = require("events");

let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says ${line}`);
}

// rabbit.speak("I'm alive");

/* when a funciton is called as a method
 - looked up as a property and immediately called, in object.method
 the binding called THIS in its vosy automatically points at the
 object it was called on*/

 function speak(line){
     console.log(`This ${this.type} rabbit says '${line}'`);
 }

 let whiteRabbit = {type: "white", speak};
 let hungryRabbit = {type: "hungry", speak};


//  whiteRabbit.speak("Oh my ears and whiskers, " + 
//                     "how late it's getting!");

//  hungryRabbit.speak("I could use a carrot right now.")

//  speak.call(hungryRabbit, "Burp!");


function normalize(){
    console.log(this.croods.map(n => n / this.length));
}

// normalize.call({croods: [0, 2, 3], length: 5});


/* Prototypes - in addition to their set properties, 
most objects also have a prototype. A prototype is an
another object that is used as a fallback source of properties.
When an object gets a request for a property that is does not have,
its prototype will be searched for the property, then the prototype's
prototype and so on. */

// console.log(Object.getPrototypeOf({})==Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));
// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// console.log(Object.getPrototypeOf([]) == Array.prototype)

// create a new object using Object.create

let protoRabbit = {
    speak(line){
        console.log(`This ${this.type} rabbit says '${line}'`);
    }
};

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("skreee!!");

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

// function Rabbit(type){
//     this.type =type;
// }
// Rabbit.prototype.speak = funciton (line){
//     console.log(`This ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit("weird");
// console.log(Object.getPrototypeOf(Rabbit) ==
//             Function.prototype);
// console.log(Object.getPrototypeOf(weirdRabbit) ==
//             Rabbit.prototype);


// Class notation 

class Rabbit{
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");


/* defining class as statement and expression*/

let object = new class {getWord(){ return "hello";}};
// console.log(object.getWord());

// overriding derived properties

Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log(Rabbit.prototype.teeth);

//  maps

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// // → Júlia is 62
// console.log("Is Jack's age known?", ages.has("Jack"));
// // → Is Jack's age known? false
// console.log(ages.has("toString"));
// // → false

// Polymorphism

Rabbit.prototype.toString =function(){
    return `a ${this. type} rabbit`;
}

// console.log(String(blackRabbit));

// SYMBOLS

let sym = Symbol("name");
// console.log(sym == Symbol("name"));
Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length} cm of blue yarn`;
}

// console.log([1,2].toString());
// console.log([1,2][toStringSymbol]());

// inculding symbols in object expressions and classes

let stringObject ={
    [toStringSymbol](){
        return "a jute rope";
    }
}

// console.log(stringObject[toStringSymbol]());

// ITERATOR INTERFACE

let OKIterator = "OK"[Symbol.iterator]();
// console.log(OKIterator.next());
// console.log(OKIterator.next());
// console.log(OKIterator.next());


// Matrix implementation

class Matrix{
    constructor(width, height, element = (x,y)=>undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                this.content[y * width + x] = element(x,y);
            }
        }
    }

    get(x, y){
        return this.content[y * this.width + x];
    }

    set(x, y,value){
        this.content[y * this.width + x] = value;
    }
}

// MatrixIterator

class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next(){
        if(this.y == this.matrix.height) return {done: true};

        let value = { x: this.x,
                      y: this.y,
                      value : this.matrix.get(this.x, this.y)};
        this.x++;
        if(this.x == this.matrix.width){
            this.x=0;
            this.y++;
        }
        return { value, done: false};
    }
}

// setting up the iterator

Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIterator(this);
}

// let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
// for(let {x, y, value} of matrix){
//     console.log(x, y, value);
// }

// getter, setter and statics


let varyingSize = {
    get size(){
        return Math.floor(Math.random()*100);
    }
}

// console.log(varyingSize.size);
// console.log(varyingSize.size);

class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }
    
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value - 32) / 1.8)
    }
}

// let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 86;
// console.log(temp.celsius);

// Inheritance

class SymmerticMatrix extends Matrix{
    constructor(size, element = (x,y) => undefined){
        super(size, size, (x,y)=>{
            if(x<y) return element(y,x);
            else return element(x,y);
        });
    }

    set(x, y, value){
        super.set(x, y, value);
        if(x != y){
            super.set(y, x, value);
        }
    }
}

// let matrix1 = new SymmerticMatrix(5, (x,y)=> `${x}, ${y}`);
// console.log(matrix1.get(2, 3));

// creatin a vectoe class

class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(value){
       
        return new Vec(this.x + value.x, this.y + value.y);
    }

    minus(value){
        return new Vec(this.x - value.x, this.y - value.y)
    }

    get length(){
        return Math.sqrt( this.x*this.x + this.y*this.y);
    }
}


// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);

// group class

class Group{
    constructor(){
        this.members = [];
    }

    add(value){
        if(!has(value)){
            this.members.push(value);
        }
    }

    add(value){
        if(!this.has(value)){
            this.members.push(value);
        }
    }

    delete(value){
        this. members = this.members.filter(a => a !== value);
    }
    has(value){
        return this.members.includes(value);
    }

    static from(collection){
        let group = new Group;
        for(let a of collection){
            group.add(a);
        }

        return group;
    }

    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// console.log(group.has(30));
// group.add(10);
// group.delete(10);
// console.log(group.has(10));

class GroupIterator{
    constructor(group){
        this.group = group;
        this.position = 0;
    }
    next(){
        if(this.position >= this.group.members.length) return {done: true}
        else {
            let result = {value: this.group.members[this.position], done: false}
            this.position++;
            return result
        }
    }

}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

