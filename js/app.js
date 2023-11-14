function convertirMoneda() {
    const tipoCambioDolarEuro = 0.85;
    const tipoCambioDolarPesoArgentino = 97.5;
  
    const cantidadesInput = prompt(
      "Ingresa las cantidades de dólares a convertir separadas por coma:"
    );
    if (cantidadesInput.length === 0) {
      alert("Por favor, ingresa al menos una cantidad válida en dólares.");
    } else {
      let cantidadActual = "";
      for (let i = 0; i <= cantidadesInput.length; i++) {
        if (cantidadesInput[i] === "," || i === cantidadesInput.length) {
          const cantidadDolares = parseFloat(cantidadActual);
          if (!isNaN(cantidadDolares)) {
            const cantidadEuros = cantidadDolares * tipoCambioDolarEuro;
            const cantidadPesosArgentinos =
              cantidadDolares * tipoCambioDolarPesoArgentino;
            alert(`${cantidadDolares} dólares son ${cantidadEuros.toFixed(2)} euros.`);
            alert(`${cantidadDolares} dólares son ${cantidadPesosArgentinos.toFixed(2)} pesos argentinos.`);
          } else {
            alert(`"${cantidadActual}" no es una cantidad válida. Se omitirá.`);
          }
          cantidadActual = "";
        } else {
          cantidadActual += cantidadesInput[i];
        }
      }
    }
  }
  
  convertirMoneda();
  