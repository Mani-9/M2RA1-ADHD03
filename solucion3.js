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