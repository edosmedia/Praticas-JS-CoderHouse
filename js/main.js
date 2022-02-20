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
      alert("Hola esto es un app contador, hasta donde quieres contar")
      let contador = 1;
      let numero_hasta = prompt("Hasta que numero");
      let resultado_contador = '';
      let resultado_final = '';
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