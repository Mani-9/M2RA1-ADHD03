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
  

    const buttonPromediar = document.getElementById('Promediar');
    buttonPromediar.addEventListener('click', function() {

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
 