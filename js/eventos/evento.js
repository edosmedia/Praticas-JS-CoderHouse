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
 if (input_montocredito.value == "" || input_coutas.value == "" || input_nombre.value == "" ) {
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



  // let btnGirarIzqMetodologia = document.getElementById("btnGirarIzqMetodologia");
  // let btnGirarDerMetodologia = document.getElementById("btnGirarDerMetodologia");
  // let ruedaSVGMetodologia = document.getElementById("ruedaSVGMetodologia");
  // let metodologiaTextTitulo = document.getElementById("metodologiaTextTitulo");
  // let metodologiaTextDescripcion = document.getElementById("metodologiaTextDescripcion");
  // let divPosition = document.getElementById("divPosition");

  // let anguloActual = 0;
  // let pos = 0;

  // const metodologiaINVD = {
  //   branding: {
  //     suma: 48,
  //     resta: 50,
  //     tituloSuma: "investigacion",
  //     tituloResta: "estrategia",
  //     titulo: "Branding",
  //     descripcion: "La creaci??n de una marca es el factor m??s importante en el posicionamiento, es el factor visual y emocional con el cual te identificaran tus clientes, debes elegir una l??nea grafica que represente tu marca, tus valores, tu experiencia y lo que deseas transmitir como propuesta de valor diferencial en el mercado. A veces crear una marca disruptiva puede ser el inicio de un gran viaje!.",
  //   },
  //   estrategia: {
  //     suma: 50,
  //     resta: 49,
  //     tituloSuma: "branding",
  //     tituloResta: "paginaWeb",
  //     titulo: "Estrat??gia",
  //         descripcion: "Este proceso buscar?? que tu marca o empresa se centre en los recursos que tiene a la mano y los utilic?? de la mejor manera posible. Nos enfocamos en garantizar que el objetivo se cumpla, mediante la implementaci??n de las conocidas 4P: producto, precio, plaza y promoci??n.",
  //   },
  //   investigacion: {
  //     suma: 47,
  //     resta: 48,
  //     tituloSuma: "conversion",
  //     tituloResta: "branding",
  //     titulo: "Investigaci??n",
  //     descripcion: "Desarrollar un buen plan de investigaci??n permitir?? estar bien preparado para cubrir los dem??s aspectos de tu plan de marketing. La funci??n principal es conectar directamente al consumidor o al cliente con el vendedor, mediante la informaci??n. Esta ayudar?? a identificar y definir las oportunidades o problemas del marketing de tu marca.",
  //   },
  //   conversion: {
  //     suma: 50,
  //     resta: 47,
  //     tituloSuma: "ecommerce",
  //     tituloResta: "investigacion",
  //     titulo: "Conversi??n",
  //     descripcion: "La estrategia digital que planteamos ayudar?? a definir cu??l es el objetivo de conversi??n a conseguir, para ello las acciones de los clientes en tu p??gina web deber??n estar alineadas con tus objetivos. Se logra midiendo la tasa de conversiones, optimizando resultados, definiendo los indicadores, pero siempre con el fin de establecer objetivos claros.",
  //   },
  //   ecommerce: {
  //     suma: 52,
  //     resta: 50,
  //     tituloSuma: "contenido",
  //     tituloResta: "conversion",
  //     titulo: "E-commerce",
  //     descripcion: "Millones de clientes optan actualmente por realizar sus compras de manera online. Es por esto que el e-commerce hace crecer tu negocio desarrollando acciones de mercado, ventas, gesti??n de cartera y de negocio, adem??s de una buena gesti??n log??stica. Sin duda, es una fuente de ingresos atractiva.",
  //   },
  //   paginaWeb: {
  //     suma: 49,
  //     resta: 64,
  //     tituloSuma: "estrategia",
  //     tituloResta: "contenido",
  //     titulo: "P??gina Web",
  //     descripcion: "Para lograr la tan anhelada conexi??n entre marca y cliente, es necesario tener una p??gina web porque esta ser?? el instrumento para el marketing de tu negocio; es decir, darle visibilidad online a tu marca y ofrecer a trav??s de esa v??a tus productos o servicios a mayor cantidad de personas.",
  //   },
  //   contenido: {
  //     suma: 64,
  //     resta: 52,
  //     tituloSuma: "paginaWeb",
  //     tituloResta: "ecommerce",
  //     titulo: "Contenido",
  //     descripcion: "Lograr captar la atenci??n de tus clientes es vital para el crecimiento de tu marca. Un buen contenido en sus m??ltiples facetas, ayudar?? a lograr la conexi??n necesaria entre la marca y tus clientes. Esto, ayudar?? a reforzar la visibilidad y la autoridad de la marca posicion??ndola como la principal referencia para el cliente.",
  //   },
  // };

  // const girarDerMetodologia = () => {
  //   posActual = divPosition.dataset.pos;
  //   proximaPos = anguloActual + metodologiaINVD[posActual].suma;
  //   divPosition.dataset.pos = metodologiaINVD[posActual].tituloSuma;
  //   ruedaSVGMetodologia.style.transform = `rotate(${proximaPos}deg)`;
  //   metodologiaTextTitulo.innerHTML = metodologiaINVD[divPosition.dataset.pos].titulo;
  //   metodologiaTextDescripcion.innerHTML = metodologiaINVD[divPosition.dataset.pos].descripcion;
  //   anguloActual = proximaPos;
  //   /*
  //    */
  // };
  // const girarIzqMetodologia = () => {
  //   posActual = divPosition.dataset.pos;
  //   proximaPos = anguloActual - metodologiaINVD[posActual].resta;
  //   divPosition.dataset.pos = metodologiaINVD[posActual].tituloResta;
  //   ruedaSVGMetodologia.style.transform = `rotate(${proximaPos}deg)`;
  //   metodologiaTextTitulo.innerHTML = metodologiaINVD[divPosition.dataset.pos].titulo;
  //   metodologiaTextDescripcion.innerHTML = metodologiaINVD[divPosition.dataset.pos].descripcion;
  //   anguloActual = proximaPos;
  //   /*
  //    */
  // };
  // btnGirarIzqMetodologia.addEventListener("click", () => {
  //   girarIzqMetodologia();
  // });

  // btnGirarDerMetodologia.addEventListener("click", () => {
  //   girarDerMetodologia();
  // });