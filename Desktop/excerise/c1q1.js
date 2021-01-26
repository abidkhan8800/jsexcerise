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

console.log(printChess(10));