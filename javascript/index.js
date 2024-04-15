console.log("div...Vishal..")
// variables
// var, let, const
// Reference Types--- obejcts,arrays,functions


let age =19;
let status = (age >=18)? "eligible":"not eligible";
console.log(status);


// switch Case

let day = 1;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); 
        break;
    case 4:
        console.log("Thursday");
        break; 
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

// for loop

for(let i=0;i<10;i++){
    console.log(i);
}

// while loop

let i=0;
while(i<10){
    console.log(i);
    i++;
}

// do while loop

let j=0;
do{
    console.log(j);
    j++;    
} while(j<10);
 