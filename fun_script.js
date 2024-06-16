 

 let table=document.querySelector(".table_container");
 let add_btn=document.querySelector(".add_btn");
 let num=4;
 add_btn.addEventListener("click",()=>{
     for(let i=1;i<=num;i++){
        if(i==1){
            let tr=document.createElement("tr");
            table.append(tr);
             for(let i=1;i<=4;i++){
                let td=document.createElement("td");
                let input=document.createElement("input");
                tr.append(td);
                td.append(input);
            }
        }
    
    
     }
 })

 let save_btn=document.querySelector(".save_btn");
 
 save_btn.addEventListener("click",()=>{
     let input1=document.querySelectorAll("input").value;
     console.log(input1);
   
 })

 localStorage.clear();
