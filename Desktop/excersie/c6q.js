// Question 1 - A vector type;

class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    minus(obj){
        return new Vec(this.x - obj.x, this.y - obj.y)
    }
    plus(obj){
        return new Vec(this.x + obj.x, this.y + obj.y)
    }
    get length(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);

class Group{
    constructor(){
        this.members = [];
    }
    add(value){
        if(!this.has(value)){
            this.members.push(value);
        }
    }

    delete(value){
        this.members = this.members.filter( v => v !== value);
    }

    has(value){
        return this.members.includes(value);
    }

    static from(collection){
        let group = new Group;
        for(let value of collection){
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

// let group = Group.from([10, 20]);
// console.log(group.has(10));
// group.add(10);
// group.delete(10);
// console.log(group.has(10));


class GroupIterator {
    constructor(group){
        this.group = group;
        this.position = 0;
    }

    next() {
        if(this.position >= this.group.members.length){
            return {done: true}; 
        } else {
            let result = { value: this.group.members[this.position],
                           done: false};
            this.position++;
            return result;
        }
    }
}

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }

// Question 4 - Borrowing the method

let map = {one: true, two: true, hasOwnProperty: true};

// console.log(map.hasOwnProperty("one")); // - incorrect
console.log(Object.prototype.hasOwnProperty.call(map,"one"));