function calcularPromedio() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const valor4 = parseFloat(document.getElementById('valor4').value);

    const promedio = (valor1 + valor2 + valor3 + valor4) / 4;

    document.getElementById('resultado').innerHTML = `Promedio: ${promedio.toFixed(2)}`;
}

function compararValores() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const valor4 = parseFloat(document.getElementById('valor4').value);

    if (valor1 === valor2 && valor2 === valor3 && valor3 === valor4) {
        document.getElementById('resultado').innerHTML = 'Los valores son iguales';
    } else {
        document.getElementById('resultado').innerHTML = 'Los valores son distintos';
    }
}

function mostrarMayor() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const valor4 = parseFloat(document.getElementById('valor4').value);

    const mayor = Math.max(valor1, valor2, valor3, valor4);

    document.getElementById('resultado').innerHTML = `Valor mayor: ${mayor}`;
}
