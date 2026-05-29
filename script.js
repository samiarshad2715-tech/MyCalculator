const button = document.querySelectorAll("button");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".opeartor");
const displaybar = [];


button.forEach((btn)=>{
     let value = btn.innerText;

    btn.addEventListener("click",()=>{

        if (display.innerText==="0"){
            display.innerText=value;
        }

        if (value === "AC"){
            display.innerText="0";
        }
        else{
        display.innerText=display.innerText + value;
        }

        
       
        
        
        
    })
})
