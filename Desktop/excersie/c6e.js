let rabbit = {};

rabbit.speak = function(line){
    console.log(`The rabbit says ${line}`);
}

// rabbit.speak("I'm alive.")

function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`)
}

let whilteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

// whilteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now. ")


let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEEE!");

// javascript prototype and classes and oopr are almost similar

// counstructor function

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

// javascript prototype declarations

function Rabbit1(type){
    this.type = type;
}
Rabbit1.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let weirdRabbit = new Rabbit1("wierd");

// javascript class declarations

class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let object  = new class{ getword(name){return `Hello ${name}`}};
// console.log(object.getword(""))

// overriding derived properties

Rabbit.prototype.teeth = "small";
// console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);


// Maps

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
ages.set("Júlia", 10);

// console.log(`Júlia is ${ages.get("Júlia")}`);
// console.log("Is Jack's age known?", ages.has("Jack"));
// console.log(ages.has("toString"));


Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`;
}

//console.log(String(blackRabbit));


// Symbols and iterator

let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());


// Matrix class

class Matrix {
    constructor(width,height, element = (x,y) => undefined){
        this.width = width;
        this.height = height;
        this.content = [];

        for(let y=0;y<height;y++){
            for(let x = 0; x <width; x++){
                this.content[y * width + x] = element(x,y);
            }
        }
    }

    get(x,y){
        return this.content[y * this.width + x];
    }
    set(x,y,value){
        this.content[y * this.width +x] = value;
    }
}

// matrix iterator

class MatrixIterator{
    constructor(matrix){
        this.x =0;
        this.y =0;
        this.matrix = matrix;
    }
    next(){
        if(this.y == this.matrix.height) return {done: true}

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x,this.y)
        }
        this.x++
        if(this.x == this.matrix.width){
            this.x =0;
            this.y++
        }
        return { value, done: false}
    }
}

Matrix.prototype[Symbol.iterator] = function(){
    return new MatrixIterator(this);
}

// let matrix = new Matrix(2,2,(x,y)=>`value ${x},${y}`);
// for(let {x, y, value} of matrix){
//     console.log(x, y, value)
// }

// getters

let varyingSize = {
    get size(){
        return Math.floor(Math.random()* 100);
    }
};

// console.log(varyingSize.size);
// console.log(varyingSize.size);

// setters

class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }
    get fahrenheit(){
        return this.celsius*1.8 +32;
    }
    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value -32) / 1.8)
    }
}

let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 86;
// console.log(temp.celsius);
// console.log(Temperature.fromFahrenheit(100));

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined){
        super(size, size, (x, y)=>{
            if(x<y) return element(y,x);
            else return element(x,y);
        });
    }

    set(x, y, value){
        super.set(x, y, value);
        if(x !=y){
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3))