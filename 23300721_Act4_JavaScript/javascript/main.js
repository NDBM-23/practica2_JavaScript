const input = document.getElementById("expresionAritmetica");

document.addEventListener("keydown", (event) => {
    input.focus();

    const permitidos = "0123456789+-*/().";

    if (event.key.length === 1 && !permitidos.includes(event.key)) {
        event.preventDefault();
    }

    if (event.key === "Enter") {
        input.value = evaluarExpr(input.value, 2);
    }
    else if (event.key === "Escape" || event.key === "Delete") {
        input.value = "";
    }
});

document.querySelectorAll(".boton button").forEach(function (boton) {

    boton.addEventListener("click", function () {

        const valor = boton.textContent;

        if (valor === "clr") {
            input.value = "";
        }
        else if (valor === "↵") {
            input.value = evaluarExpr(input.value, 2);
        }
        else {
            input.value += valor;
        }

        input.focus();

    });

});

function evaluarExpr(str, n) {

    if(sanitize(str) || str.length > 100){
        return "";
    }

    try{
        return roundtoDecimal(eval(str),n);
    }
    catch{
        return "";
    }
}

function sanitize(string) {
    if (!/^[0-9+\-*/().]+$/.test(string)) {
        return true;
    }
    return false;
}

function roundtoDecimal(n, precision) {

    n = Number(n);
    precision = Number(precision);

    n = n * 10 ** precision;
    n = Math.round(n);

    return (n / 10 ** precision).toString();
}