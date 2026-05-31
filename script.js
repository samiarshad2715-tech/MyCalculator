const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const operators = ["+", "-", "*", "/", "%"];
const MAX_LENGTH = 18;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        if (value === "AC") {
            display.innerText = "0";
            return;
        }

        if (value === "DEL") {
            if (
                display.innerText === "0" ||
                display.innerText.length === 1 ||
                display.innerText === "Error" ||
                display.innerText === "Infinity" ||
                display.innerText === "-Infinity" ||
                display.innerText === "NaN"
            ) {
                display.innerText = "0";
            } else {
                display.innerText = display.innerText.slice(0, -1);
            }
            return;
        }

        if (value === "=") {
            try {
                const result = eval(display.innerText);

                if (!isFinite(result)) {
                    display.innerText = "Error";
                } else {
                    display.innerText = result;
                }
            } catch {
                display.innerText = "Error";
            }
            return;
        }


        if (display.innerText === "Error") {
            display.innerText = value;
            return;
        }

        if (
            display.innerText === "0" &&
            operators.includes(value) &&
            value !== "-"
        ) {
            return;
        }


        const lastChar = display.innerText.slice(-1);
        if (
            operators.includes(lastChar) &&
            operators.includes(value)
        ) {
            return;
        }

        if (value === ".") {
            const parts = display.innerText.split(/[\+\-\*\/%]/);
            const currentNumber = parts[parts.length - 1];
            if (currentNumber.includes(".")) {
                return;
            }
        }


        if (display.innerText.length >= MAX_LENGTH) {
            return;
        }

        if (display.innerText === "0") {
            if (value === "-") {
                display.innerText = "-";
            } else {
                display.innerText = value;
            }
        } else {
            display.innerText += value;
        }
    });
});
