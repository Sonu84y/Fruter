// Search box functions


let src=document.querySelector("input");

src.onclick=()=>{
    src.style.border="2px solid aqua";
    src.style.backgroundColor="gray";
}


let body=document.querySelector(".body_section");

body.onclick=()=>{
   src.style.border="2px solid transparent";
}