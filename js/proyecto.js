// Variable del DOM
const input_nombre = document.getElementById("nombre");
const input_montocredito = document.getElementById("monto_credito");
const input_coutas = document.getElementById("coutas");
const boton = document.getElementById("simulacion");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");
const inputall = document.getElementsByTagName('input');


// END Variable del DOM

// Funciones
function validate() {
  var element = document.getElementById("nombre");
  element.value = element.value.replace(/[^a-zA-Z]+[^a-zA-Z]/, "");
}

function calculo_credito_carro(montocredito, coutas) {
  let interes = 3 / 100;
  let resultado = (montocredito * (interes * Math.pow(1 + interes, coutas))) / (Math.pow(1 + interes, coutas) - 1);
  return resultado.toFixed(0);
}

function formatonumeroclp(valor){
   const moneda = { style: "currency", currency: "CLP" };
   const numberFormat1 = new Intl.NumberFormat("es-CL", moneda);
   return numberFormat1.format(valor);
}

function formatonumerodolar(valor) {
  const moneda = { style: "currency", currency: "USD" };
  const numberFormat1 = new Intl.NumberFormat("en-US", moneda);
  return numberFormat1.format(valor);
}

function errorcampos(e, mensajes) {
  for (i = 0; i < e.length; i++) {
    // console.log(inputall[i]);
    e[i].classList.toggle("is-invalid"); 
  }
    // e.classList.toggle("is-invalid");
  mensaje.innerHTML += `<div id="alerta" class="alert alert-danger d-block" role="alert">
                        ${mensajes}
                        </div`;
  // console.log("ejecutando");
}

function clearmensaje() {
    for (i = 0; i < inputall.length; i++) {
      // console.log(inputall[i]);
      inputall[i].classList.remove("is-invalid");
    }
  mensaje.innerHTML = "";
  // inputall.classList.remove('hide');
}
// END Funciones

// API 
fetch("https://mindicador.cl/api")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (indicadores) {
    valorufActual = indicadores.uf.valor;
    valordolarActual = indicadores.dolar.valor;
  })
  .catch(function (error) {
    console.log("Peticion Fallida", error);
  });
// END API 

// EVENTO
boton.addEventListener("click", () => {
  clearmensaje();
  if (input_montocredito.value == "" || input_coutas.value == "" || input_nombre.value == "") {
    errorcampos(inputall, "Tiene que llenar todos los campos");
  }if (input_montocredito.value < 100000) {
    errorcampos(input_montocredito, "El monto del credito tiene que ser superior a 100.000");
  }if (input_coutas.value < 12) {
    errorcampos(input_coutas, "La cantidad de Coutas tiene que ser superior a 12");
  } else {
      //  let msj_erro = document.getElementById("alerta");
      //  if (msj_erro) {
      //    msj_erro.className = "d-none";
      //  }
    resultado_op = calculo_credito_carro(input_montocredito.value, input_coutas.value);

    resultadouf = resultado_op / valorufActual;
    resultadodolar = resultado_op / valordolarActual;
    resultado.innerHTML = `<h2 class="text-center">Resultado de Tu Simulacion</h2>
                        <div class="my-5">
                        <div class="my-2"> Solicitante: <b>${input_nombre.value}</b>  </div>
                        <div class="my-2"> Monto Solicitado : ${input_montocredito.value}</div>
                        <div class="my-2">Coutas: ${input_coutas.value} </div>
                        <div class="my-4" style="font-size: 1.5rem"> Monto del Credito Total: ${formatonumeroclp(resultado_op)} </div>
                        <div class="my-4" style="font-size: 1.5rem" id="uf"> Monto del Credito Total en UF: ${resultadouf.toFixed(2)} </div>
                        <div class="my-4" style="font-size: 1.5rem" id="uf"> Monto del Credito Total en Dolares:  ${formatonumerodolar(resultadodolar.toFixed(0))} </div>
                        </div>
                        </div>`;

  }
});

// END EVENTO
