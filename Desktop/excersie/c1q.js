function printChess(len){
    let a = "";
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if((i+j)%2==0){
                a = a + " ";
            }
            else{
                a = a + "#";
            }
        }
        a = a + "\n";
    }
    return a;
}

// console.log(printChess(10));

// Question 2 - fizz buzzz

function fizz(){
    for(let i=1; i<=100; i++){
        if(i%3 == 0){
            console.log("Fizz");
        }
        if(i%5 == 0){
            console.log("Buzz");
        }
        if(i%5 == 0 && i%3 == 0){
            console.log("FizzBuzz");
        }
        else{
            console.log(i);
        }

    }
}

// fizz();

// Question 1 - Print triangle with loops

function tri(){
    let a ="";
    for(let i =0; i<7;i++){
        for(let j=0;j<=i;j++){
            // console.log("#");
            a += "#";
        }
        // console.log();
        a+="\n";
    }
    return a;
}

console.log(tri());