// counter js function
const countValue = document.querySelector('#counter');

function inecrement(){
    let value =parseInt(countValue.innerText);
    value=value+1;
    countValue.innerText= value;

}
function decrement(){
    let value =parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText= value;

}

// profile assignment js function

const Modal = document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

// open model
const openModal=()=>{
    console.log("Modal is open")
    Modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

// close model

const closeModal=()=>{
    console.log("Modal is open")
    Modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}