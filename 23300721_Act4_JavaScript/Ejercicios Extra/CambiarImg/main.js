let state = false;
const btn = document.getElementById("bulbButton");
const img = document.getElementById("img");
function toogleImg(){
    if(state)
    {
        btn.textContent = "Prender"
        img.src = "focoApagado.png";
    }
    else{
        btn.textContent = "Apagar"
        img.src = "focoPrendido.png";
    }
    state = !state;
}