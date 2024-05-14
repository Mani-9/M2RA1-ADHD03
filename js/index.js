function concatenar() {
    let Texto1 = document.getElementById("texto1").value;
    let Texto2 = document.getElementById("texto2").value;
    let Texto3 = document.getElementById("texto3").value;
    let Texto4 = document.getElementById("texto4").value;
    let Texto5 = document.getElementById("texto5").value;

    if (Texto1 === "" || Texto2 === "" || Texto3 === "" || Texto4 === "" || Texto5 === "") {
        alert("Ingrese todos los ingresos correctamente.");
        return;
    }

    let concatenado = `${Texto1} ${Texto2} ${Texto3} ${Texto4} ${Texto5}`;
    document.getElementById("resultado").textContent = concatenado;
}
function mayor() {
    let Texto1 = document.getElementById("texto1").value;
    let Texto2 = document.getElementById("texto2").value;
    let Texto3 = document.getElementById("texto3").value;
    let Texto4 = document.getElementById("texto4").value;
    let Texto5 = document.getElementById("texto5").value;

    if (Texto1 === "" || Texto2 === "" || Texto3 === "" || Texto4 === "" || Texto5 === "") {
        alert("Ingrese todos los ingresos correctamente.");
        return;
    }

    let textos = [Texto1, Texto2, Texto3, Texto4, Texto5];
    let maxLength = 0;
    let textosMax = [];

    textos.forEach(texto => {
        if (texto.length > maxLength) {
            maxLength = texto.length;
            textosMax = [texto];
        } else if (texto.length === maxLength) {
            textosMax.push(texto);
        }
    });
    if (textosMax.length > 1) {
        alert("Hay múltiples textos con la misma longitud máxima.");
    }
    document.getElementById("resultado").textContent = textosMax[0];
}
function ultimaLetra(){
    let Texto1 = document.getElementById("texto1").value;
    let Texto2 = document.getElementById("texto2").value;
    let Texto3 = document.getElementById("texto3").value;
    let Texto4 = document.getElementById("texto4").value;
    let Texto5 = document.getElementById("texto5").value;

    if (Texto1 === "" || Texto2 === "" || Texto3 === "" || Texto4 === "" || Texto5 === "") {
        alert("Ingrese todos los ingresos correctamente.");
        return;
    }
    let ultimaLetra1 = Texto1.slice(-1);
    let ultimaLetra2 = Texto2.slice(-1);
    let ultimaLetra3 = Texto3.slice(-1);
    let ultimaLetra4 = Texto4.slice(-1);
    let ultimaLetra5 = Texto5.slice(-1);
    
    let palabraFormada = ultimaLetra1 + ultimaLetra2 + ultimaLetra3 + ultimaLetra4 + ultimaLetra5;

    document.getElementById("resultado").textContent =palabraFormada;
}
