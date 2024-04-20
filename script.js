// Search box functions


let src=document.querySelector(".input");
let li= document.querySelector("#ho");


src.onclick=()=>{
    src.style.border="2px solid aqua";
}
li.onclick=()=>{
    src.style.border="2px solid transparent";
}


let body=document.querySelector(".section");

body.onclick=()=>{
   src.style.border="2px solid transparent";
}