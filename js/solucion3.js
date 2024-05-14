<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const txtTexto1 = document.getElementById('txtTexto1');
    const txtTexto2 = document.getElementById('txtTexto2');
    const txtNumero1 = document.getElementById('txtNumero1');
    const txtNumero2 = document.getElementById('txtNumero2');
    const answer = document.getElementById('answer');
  
    const buttonConcatenar = document.getElementById('Concatenar');
    buttonConcatenar.addEventListener('click', function() {
      const textoConcatenado = txtTexto1.value + ' ' + txtTexto2.value;
      const longitudTotal = textoConcatenado.length;
      const promedioLongitud = (txtTexto1.value.length + txtTexto2.value.length) / 2;
  
      let resultado = `Texto concatenado: ${textoConcatenado}\nLongitud: ${longitudTotal}`;
  
      if (longitudTotal > promedioLongitud) {
        resultado += '\nLongitud mayor que el promedio';
      } else if (longitudTotal < promedioLongitud) {
        resultado += '\nLongitud menor que el promedio';
      } else {
        resultado += '\nLongitud igual al promedio';
      }
  
      answer.value = resultado;
    });
  
    // Agregar eventos click para los otros botones (Promediar y Obtener)
    const buttonPromediar = document.getElementById('Promediar');
    buttonPromediar.addEventListener('click', function() {
      // Implementar la lógica para el botón "Promediar"
      const numero1 = parseInt(txtNumero1.value);
      const numero2 = parseInt(txtNumero2.value);
  
      if (isNaN(numero1) || isNaN(numero2)) {
        resultado = 'Ingrese valores numéricos válidos';
      } else {
        const promedio = (numero1 + numero2) / 2;
        resultado = `Promedio de los números: ${promedio}`;
      }
  
      answer.value = resultado;
    });
  
    const buttonObtener = document.getElementById('Obtener');
    buttonObtener.addEventListener('click', function() {
      // Implementar la lógica para el botón "Obtener"
      const texto1 = txtTexto1.value;
      const texto2 = txtTexto2.value;
      const numero1 = parseInt(txtNumero1.value);
      const numero2 = parseInt(txtNumero2.value);
  
      if (isNaN(numero1) || isNaN(numero2)) {
        resultado = 'Ingrese valores numéricos válidos';
      } else {
        const primerLetra1 = texto1[0];
        const ultimaLetra1 = texto1[texto1.length - 1];
        const primerLetra2 = texto2[0];
        const ultimaLetra2 = texto2[texto2.length - 1];
        const sumaNumeros = numero1 + numero2;
        resultado = `Texto: ${primerLetra1}${ultimaLetra1}${primerLetra2}${ultimaLetra2}\nSuma: ${sumaNumeros}`;
      }
  
      answer.value = resultado;
    });
  });
  
=======
function operarForm() {
    var num1 = parseFloat(document.getElementById("val1").value);
    var num2 = parseFloat(document.getElementById("val2").value);
    var num3 = parseFloat(document.getElementById("val3").value);
    var num4 = parseFloat(document.getElementById("val4").value);
    // Suma de los 2 primeros valores
    var sumaPrimeros = num1 + num2;
    // Multiplicación de los dos últimos valores
    var multiplicacionUltimos = num3 * num4;
    // Comparación entre la suma de los dos primeros y la multiplicación de los dos últimos
    var comparacion = "";
    if (sumaPrimeros > multiplicacionUltimos) {
      comparacion = "La suma de los dos primeros valores es mayor que la multiplicación de los dos últimos.";
    } else if (sumaPrimeros < multiplicacionUltimos) {
      comparacion = "La suma de los dos primeros valores es menor que la multiplicación de los dos últimos.";
    } else {
      comparacion = "La suma de los dos primeros valores es igual que la multiplicación de los dos últimos.";
    }
    // Verificar si los valores son iguales o distintos
    var igualesODistintos = (num1 === num2 && num2 === num3 && num3 === num4) ? "Los números son iguales." : "Los números son distintos.";    
    // Calcular promedio de la suma de los números
    var promedio = (num1 + num2 + num3 + num4) / 4;
    // Mostrar números pares comprendidos entre 2 y el promedio de la suma de los números
    var numerosPares = "Números pares entre 2 y el promedio (" + promedio.toFixed(2) + "): ";
    for (var i = 2; i <= promedio; i++) {
      if (i % 2 === 0) {
        numerosPares += i + " ";
      }
    }
    // Mostrar resultados
    alert(comparacion + "\n" + igualesODistintos + "\n" + numerosPares);
  };
>>>>>>> 517627e6c3c933ddc2f1ec6be82e4375f9003ed3
