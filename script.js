const button = document.querySelectorAll("button");
const display = document.querySelector(".display");
const operator = document.querySelectorAll(".operator");
const displaybar = [];


button.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.innerText;

        if (value === "AC") {
            display.innerText = "0";
        }
        else if (value === "DEL") {
            if (display.innerText === "" || display.innerText === "0" || display.innerText.length == 1) {
                display.innerText = "0";
            } else {
                display.innerText = display.innerText.slice(0, -1);
            }
        }

        else if (value==="="){
            
        }

        else {
            if (display.innerText === "0") {
                display.innerText = value;
            } else {
                // display.append(value);
                display.innerText = display.innerText + value;
            }
        }

    })
})
