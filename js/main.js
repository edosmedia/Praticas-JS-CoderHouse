function desafio_1() {
  const opcion = prompt("Atención Elije una de la Opciones: \nA : Tabla de Multiplicar \nB : Para Hasta cuanto quieres contar ").toUpperCase();
  switch (opcion) {
    case "A":
      alert("Hola esto es un app Tabla de multiplicar");
      let tabla = parseInt(prompt("Dime numero cual Tabla de multiplicar quieres?"));
      let mensajefinal = "";
      if (tabla) {
        for (i = 1; i <= 10; i++) {
          let resultado = tabla * i;
          let mensaje = `${tabla} * ${i} = ${resultado} \n`;
          let temp = `${mensaje}\n`;
          mensajefinal += temp;
        }
        alert(mensajefinal);
      } else {
        alert("Atencion! Debes introducir un numero para multiplicar!");
        return desafio_1();
      }
      break;

    case "B":
      alert("Hola esto es un app contador, hasta donde quieres contar");
      let contador = 1;
      let numero_hasta = parseInt(prompt("Hasta que numero"));
      let resultado_contador = "";
      let resultado_final = "";
      do {
        resultado_contador = contador++ + "\n";
        resultado_final += resultado_contador;
      } while (contador <= numero_hasta);
      alert(resultado_final);
      console.log(resultado_final);
      break;

    default:
      alert("Debe Elejir una opcion Valida!");
      break;
  }
}

function simulador_de_credito() {
  //  Variable de Tipo de Creditos
  let credito_tipo1 = "Vehiculo";
  let credito_tipo2 = "Casa";
  let credito_tipo3 = "Credito de Consumo";

  // Vehiculos
  let carros = ["Ford Fusion", "Nissan Versa", "Chevrolet Onix"];
  let nombreCarros = "";

  const opcion_credito = parseInt(prompt("Atención Elejir una de la Opciones del tipo de Credito: \n1 : " + credito_tipo1 + "\n2 : " + credito_tipo2 + "\n3 : " + credito_tipo3));

  switch (opcion_credito) {
    case 1:
      alert("Bienvenido al Simulador de Credito " + credito_tipo1);
        for (i = 0; i < carros.length; i++) {
          temp = carros[i] + "\n";
          nombreCarros += temp;
        };
      prompt(`Cual Carro deseas: \n${nombreCarros} `)

      break;

    case 2:
      alert("Bienvenido al Simulador de Credito " + credito_tipo2);
      alert("Este Momento Simulador de Credito " + credito_tipo2 + "no esta disponible disculpa molestia ocasionada.");
      break;

    case 3:
      alert("Bienvenido al Simulador de Credito " + credito_tipo3);
      alert("Este Momento Simulador de Credito " + credito_tipo2 + "no esta disponible disculpa molestia ocasionada.");
      break;

    default: {
      alert("Debe Elejir una de la opciones Valida");
      return simulador_de_credito;
    }
  }
}