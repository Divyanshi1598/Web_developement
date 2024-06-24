// function ----- function is a block of code 


// hoisting is the process of moving function declaration to the top  of file  

// function call
fun();
// function declaration 
function fun(){
    console.log("hoisting...")
}


// dynamic create sum  function 
function sum(a,b){
    let total=0;
    for(let value of arguments)
        total=total+value;
    return total;

}
let ans = sum(2,3,45,6,78,99,2,2)
console.log(ans,"total number")

// rest function  (spread oprator)

function sum1(...args){
    console.log(args)
}

sum1(2,3,4,12,43)
