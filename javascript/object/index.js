function  creatRectangle () {
return rectangle = {
        length: 10,
        width: 5,
        draw(){
            console.log("object is created");

        }
        
    };
   
}
let rectangle1 = creatRectangle();
rectangle1.draw();



let reactangle={
    length:10,
    width:5,
   
}
// for in  loop

for(let key  of Object.entries(reactangle)){
    console.log(key);
}





let src={
    a:10,   
    b:20,
    c:30,
    }
// // object cloning #1
// let dest={};
// for(let key in src){
//     dest[key]=src[key];

// }
// object cloning #2
// let src2={value:25};
// let dest=Object.assign({},src,src2);
// console.log(dest,"dest")


// object cloning #3
let dest={...src};
console.log(dest);
src.a++;
console.log(dest)


// ------------------------------------------
// ---------Math Function-------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a= numbers.push(45);
console.log(numbers,"hhh")
numbers.unshift(2);
console.log(numbers,"start")


// add new item in array
// end -> push
// beginning -> unshift
// middle =>splice

// Searching
// variable name.find method
let data=[
    {id:1,name:"sachin"},
    {id:2,name:"rahul"},
    {id:3,name:"virat"},
    {id:4,name:"dhoni"},
]

let SerchingData = data.find((item)=>item.name==="virat")


console.log(SerchingData,"dataeee")

// remove item in array
// end -> pop
// beginning -> shift
// middle =>splice

let num=[1,2,3,4,5,6,7,8,9,10];
num.pop();
console.log(num,"pop")
num.shift();
console.log(num,"shift")
// splice
// array.splice(index,no of item to be removed,item to be added)
num.splice(2,1,)
console.log(num,"splice")

