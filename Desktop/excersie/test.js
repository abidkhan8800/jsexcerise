function findSolution(target){
    function find(current, history){
        if(current == target) return history;
        else if(current > target) return null;
        else {
            return find(current + 5, `(${history}+ 5)`) || 
                   find(current * 3, `(${history}) * 3`);
        }
    }
    return find(1, "1");
}

// console.log(findSolution(28));

// function to find min of two numbers
function min(a,b){
    return Math.min(a,b);
}

// console.log(min(0,10));
// console.log(min(0,-10));

// find eveness using recursion

function isEven(N){
    let n = Math.abs(N);
    if(n == 0) return true;
    if(n == 1) return false;
    return(isEven(n-2));
}

// console.log(isEven(10));
// console.log(isEven(11));
// console.log(isEven(-100));
// console.log(isEven(100));


function countBs(text){
    let count =0;
    for(let a of text){
        if(a == "B") count++;
    }
    return count;
}

function countChar(text, c){
    let count =0;
    for(let i = 0; i<text.length; i++){
        if(text[i]== c) count++;
     }
     return count;
}


// console.log(countBs("BBCjgggjB"));
// console.log(countChar("kakkerlak", "k"));

// printing a triangle

function printTriangle(n){
    let pt = "";
    for(let i = 0;i < n; i++){
        for(let j = 0; j<i;j++){
            pt += "#";
        }
        pt += "\n";
    }
    return pt;
}
// console.log(printTriangle(7));


// fizzbuzz

function fizzBuzz(){
    for(let i=1; i<=100;i++){
        if(i%3 == 0) console.log("Fizz");
        else if(i%5 == 0 && i%3 != 0) console.log("Buzz");
        else if(i%5 == 0 && i%3 == 0) console.log("FizzBuzz");
        else console.log(i);
    }
}

// fizzBuzz();

// chess printing

function chessBoard(n){
    let a = "";
    for(let i = 0; i< n;i++){
        for(let j = 0; j < n; j++){
            if( (i+j)%2 == 0){
                a += " ";
            } else {
                a += "#";
            }
        }
        a += "\n";
    }
    console.log(a);
}

// chessBoard(8)