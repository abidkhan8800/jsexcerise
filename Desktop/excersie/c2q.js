// code sample 1
function findSolution(target){
    function find(current, history){
        if(current == target){
            return history;
        }else if(current > target){
            return null;
        }else{
            return find(current + 5,`(${history}+5)`) || find(current * 3, `(${history}*3)`);
        }
    }
    return find( 1 , "1");
}

// console.log(findSolution(13));

// Question 1 - Find the minimum of two numbers

function minNum(a, b){
    return Math.min(a,b);
}

// console.log(minNum(100,15));

// Question 2 - Even number test using recursion 

function isEven(n){
    let a = Math.abs(n);
    if(a==0) return "Even";
    else if(a==1) return "Odd";
    else  return isEven(a-2);
}

// console.log(isEven(-75));

// Question 3 - Bean Counting

// Vesion 1

function countB(a){
    let count = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] == "B"){
            count++;
        }
    }
    return count;
}

// console.log(countAlpha("BBnnnsdlkslnbnklnBBnB"));

// Version 2 

function countAlpha(a, x){
    let count = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] == x){
            count++;
        }
    }
    return count;
}

console.log(countAlpha("BBnnnsdlkslnbnklnBBnB", "s"));

