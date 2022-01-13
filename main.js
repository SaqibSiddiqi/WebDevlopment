function multi(a,b,...args)
{
    multiply = a * b;
    let numSum = 0;
    for(const arg of args){
    numSum+=arg;
    }
    console.log(multiply, numSum)
}


console.log(multi(1,2,3,4,5))