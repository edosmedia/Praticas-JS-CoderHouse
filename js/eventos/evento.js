const input_nombre = document.getElementById("nombre");
const input_montocredito = document.getElementById("monto_credito");
const input_coutas = document.getElementById("coutas");
const boton = document.getElementById("simulacion");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

function validate() {
  var element = document.getElementById('nombre');
  element.value = element.value.replace(/[^a-zA-Z]+[^a-zA-Z]/, "");
};

function calculo_credito_carro(montocredito, coutas) {
  let interes = 3 / 100;
  let resultado = (montocredito * (interes * Math.pow(1 + interes, coutas))) / (Math.pow(1 + interes, coutas) - 1);
  return `<b>$ ${resultado.toFixed(0)} </b> en ${coutas} Coutas`; 
}

boton.addEventListener("click", () => {
 if (input_montocredito.value == "" | input_coutas.value == "" | input_nombre.value == "" ) {
   mensaje.innerHTML = `<div id="alerta" class="alert alert-danger d-block" role="alert">
                        Tiene que llenar todos los campos
                        </div>`;
 }else {
   let resultado_op = calculo_credito_carro(input_montocredito.value, input_coutas.value);
   console.log(resultado_op);
   resultado.innerHTML = `<h2 class="text-center">Resultado de Tu Simulacion</h2>
                         <div class="my-5">
                        <div class="my-2"> Solicitante: <b>${input_nombre.value}</b>  </div>
                        <div class="my-2"> Monto Solicitado : ${input_montocredito.value}</div>
                        <div class="my-2">Coutas: ${input_coutas.value} </div>
                        <div class="my-4" style="font-size: 1.5rem"> Monto del Credito Total: ${resultado_op} </div>
                        </div>
                        </div>`;
                         let msj_erro = document.getElementById("alerta");
                         if (msj_erro) {
                            msj_erro.className = "d-none";
                         }
 }
  });
