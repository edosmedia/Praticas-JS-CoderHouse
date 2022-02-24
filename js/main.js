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



// Desafio 2


      function calculo_credito(n) {
        resultado = (n * 0.05) / 36 + "coutas";
        return resultado;
      };

function simulador_de_credito() {
  //  Variable de Tipo de Creditos
  let credito_tipo1 = "Vehiculo";
  let credito_tipo2 = "Casa";
  let credito_tipo3 = "Credito de Consumo";

  // Vehiculos
  // let carros = ["Ford Fusion : 50.000.000", "Nissan Versa : 20.000.000 ", "Chevrolet Onix : 13.000.000"];
   let carros = [
     {
       modelo: "Ford Fusion",
       valor: "50.000.000",
     },
     {
       modelo: "Nissan Versa",
       valor: "20.000.000",
     },
     {
       modelo: "Chevrolet Onix",
       valor: "13.000.000",
     },
   ];

  let precios = [50000000, 20000000, 13000000];

  let nombreCarros = "";

  const opcion_credito = parseInt(prompt("Atención Elejir una de la Opciones del tipo de Credito: \n1 : " + credito_tipo1 + "\n2 : " + credito_tipo2 + "\n3 : " + credito_tipo3));

  switch (opcion_credito) {
    case 1:
      alert("Bienvenido al Simulador de Credito " + credito_tipo1);

      function calculo_credito(n) {
        resultado = ((n * 1.05) / 36).toFixed(0) + " En 36 Coutas \n"+
                    ((n * 1.10) / 48).toFixed(0) + " En 48 Coutas \n"+
                    ((n * 1.15) / 60).toFixed(0) + " En 60 Coutas \n";
        return resultado;
      }

      // for (i = 0; i < carros.length; i++) {
      //   temp = i+1 + ": " + carros[i] + "\n";
      //   nombreCarros += temp;
      // };

      // for (var i in carros) {
      //   temp = i + ") " + carros[i].modelo + " : " + carros[i].valor + "\n";
      //   nombreCarros += temp;
      // }

      // carros.forEach(carros.modelo, carros.valor, index); ()=> {
      //     console.log(`${modelo} ${valor}`)
      // };

      carros.forEach(function (valor, index) {
        temp = `${index + 1}- ${valor.modelo} El Precio Es: ${valor.valor} \n`;
        nombreCarros += temp;
      });

      elecion = parseInt(prompt(`Cual Carro deseas: \n${nombreCarros} `));

        if(elecion == 1) {
            alert(calculo_credito(precios[0]));
        }else if(elecion == 2){
            alert(calculo_credito(precios[1]));
        }else if(elecion == 3){
            alert(calculo_credito(precios[2]));
        }else {
          alert("La elecion no es valida");
        };
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