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
}

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
        resultado = ((n * 1.05) / 36).toFixed(0) + " En 36 Coutas \n" + ((n * 1.1) / 48).toFixed(0) + " En 48 Coutas \n" + ((n * 1.15) / 60).toFixed(0) + " En 60 Coutas \n";
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

      if (elecion == 1) {
        alert(calculo_credito(precios[0]));
      } else if (elecion == 2) {
        alert(calculo_credito(precios[1]));
      } else if (elecion == 3) {
        alert(calculo_credito(precios[2]));
      } else {
        alert("La elecion no es valida");
      }
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

// Desafio 3

function metodos_array() {
  alert("Todo sale en la consola");

  const personajes = ["goku", "vegeta", "gohan", "trunk", "broly", "frezzer"];

  numero = [1, 2, 3, 4, 5];

  personajes.push("krilin"); // Agregar al Final del Array
  console.log(`Agregado Krilin con Push  ${personajes}`);

  personajes.pop(); // Eliminar al Final del Array
  console.log(`Eliminar Krilin con pop  ${personajes}`);

  personajes.shift(); // Eliminar al Principio del Array
  console.log(`Eliminar al principio del array con shift del array ${personajes}`);

  personajes.unshift("goku"); // Agrega al Principio del Array
  console.log(`Agrega al principio del array con unshift del array ${personajes}`);

  personajes.concat("Picolo"); // Agrega al Final  concadenado del Array
  console.log(`Agrega al Final concadenado del array con concat del array ${personajes}`);

  console.log("Con JOIN " + personajes.join("---------"));

  conteo = personajes.length;

  console.log("Cuanto personajes con length " + conteo);

  console.log("Metodo slice " + personajes.slice(2));

  console.log("Metodo IndexOf Buscador por array ubicado en " + personajes.indexOf("trunk"));

  console.log("Metodo includes Buscador por array si trunk existe?  " + personajes.includes("trunk"));

  console.log("Metodo reverse todo ordena todo arrevez los array " + personajes.reverse);
}



// Desafio Pre-Entrega



function calculo_credito_carro(montocredito, coutas) {
  let interes = 3 / 100;
  let resultado = (montocredito * (interes * Math.pow(1 + interes, coutas))) / (Math.pow(1 + interes, coutas) - 1);
  return `${resultado.toFixed(0)} en ${coutas} Coutas`;
}

// Vehiculos
let carros = [
  {
    modelo: "Ford Fusion",
    valor: 50000000,
  },
  {
    modelo: "Nissan Versa",
    valor: 20000000,
  },
  {
    modelo: "Chevrolet Onix",
    valor: 13000000,
  },
];
let nombreCarros = "";

function simulador_de_credito_pe1() {
  //  Variable de Tipo de Creditos
  let credito_tipo1 = "Vehiculo";
  let credito_tipo2 = "Casa";
  let credito_tipo3 = "Credito de Consumo";

  let nombreCarros = "";

  const opcion_credito = parseInt(prompt("Atención Elejir una de la Opciones del tipo de Credito: \n1 : " + credito_tipo1 + "\n2 : " + credito_tipo2 + "\n3 : " + credito_tipo3));

  switch (opcion_credito) {
    case 1:
      alert("Bienvenido al Simulador de Credito " + credito_tipo1);

      carros.forEach(function (valor, index) {
        temp = `${index + 1}- ${valor.modelo} El Precio Es: ${valor.valor} \n`;
        nombreCarros += temp;
      });
      let elecion = parseInt(prompt(`Cual Carro deseas: \n${nombreCarros} `));
      if (elecion == 1 || elecion == 2 || elecion == 3) {
        let coutas = parseInt(prompt(`Cuanta Coutas deseas?`));
        let vehiculo_valor = carros[elecion-1].valor;
        alert(calculo_credito_carro(vehiculo_valor, coutas));
      } else {
        alert("La Opcion no es Valida");
      }

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
// END Desafio Pre-Entrega


// Desafio Complemnetario Class 8


// END Desafio Complemnetario Class 8

export function calculo_credito(montocredito, coutas) {
  let interes = 3 / 100;
  let resultado = (montocredito * (interes * Math.pow(1 + interes, coutas))) / (Math.pow(1 + interes, coutas) - 1);
  return `<b>$ ${resultado.toFixed(0)} </b> en ${coutas} Coutas`;
}
export function validate() {
  var element = document.getElementById('nombre');
  element.value = element.value.replace(/[^a-zA-Z]+/, '');
};