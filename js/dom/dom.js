// const personajes = [
//   {
//     nombre: "Goku",
//     transformaciones: 10,
//     raza: "Sayayin",
//   },
//   {
//     nombre: "Vegeta",
//     transformaciones: 10,
//     raza: "Sayayin",
//   },
//   {
//     nombre: "Gohan",
//     transformaciones: 10,
//     raza: "Humano",
//   },
// ];

// const tabladepersonaje = document.getElementById("listaPersonaje");

// let cuerpoTabla = document.createElement("tbody");

function agregarpersonaje() {
      let nombre_personaje = prompt("Cual nombre del personaje");
      let transformaciones_personaje = prompt("Cuantas transformaciones");
      let nivel_personaje = prompt("Cuantas transformaciones");
      personajeExtra = {
        nombre: nombre_personaje,
        transformaciones: transformaciones_personaje,
        raza: nivel_personaje,
      };
      let celdas = "";
      for (let dato in personajeExtra){
        celdas = celdas + '<td>'+personajeExtra[dato]+'</td>';
      }
      document.getElementById("listaPersonaje").insertRow(-1).innerHTML = celdas;

};


  // function agregarpersonaje() {
  //     let nombre_personaje = prompt("Cual nombre del personaje");
  //     let transformaciones_personaje = prompt("Cuantas transformaciones");
  //     let nivel_personaje = prompt("Cuantas transformaciones");
  //     let celdas = + '<td>'+nombre_personaje+'</td>'+ '<td>'+transformaciones_personaje+'</td>'+ '<td>'+nivel_personaje+'</td>';
  //     document.getElementById("listaPersonaje").insertRow(-1).innerHTML = celdas;
  // };

// personajes.forEach((p) => {
//   let fila = document.createElement("tr");

//   td = document.createElement("td");
//   td.innerText = p.nombre;
//   fila.append(td);

//   td = document.createElement("td");
//   td.innerText = p.transformaciones;
//   fila.append(td);

//   td = document.createElement("td");
//   td.innerText = p.raza;
//   fila.append(td);

//   cuerpoTabla.append(fila);
// });

// tabladepersonaje.append(cuerpoTabla);

const personajes = [
  {
    nombre: "Goku",
    transformaciones: 10,
    raza: "Sayayin",
  },
  {
    nombre: "Vegeta",
    transformaciones: 10,
    raza: "Sayayin",
  },
  {
    nombre: "Gohan",
    transformaciones: 10,
    raza: "Humano",
  },
];

const tabladepersonaje = document.getElementById("listaPersonaje");

let cuerpoTabla = document.createElement("tbody");
  
class personaje {
    constructor(nombre, transformaciones, raza) {
      this.nombre = nombre;
      this.transformaciones = transformaciones;
      this.raza = raza;
    }
  }

  const listaPersonaje = () =>
    personajes.forEach((p) => {
      let fila = document.createElement("tr");

      td = document.createElement("td");
      td.innerText = p.nombre;
      fila.append(td);

      td = document.createElement("td");
      td.innerText = p.transformaciones;
      fila.append(td);

      td = document.createElement("td");
      td.innerText = p.raza;
      fila.append(td);

      cuerpoTabla.append(fila);
    });

  tabladepersonaje.append(cuerpoTabla);
  listaPersonaje();

function agregarpersonaje() {
  const nombre_personaje = prompt("Cual nombre del personaje");
  const transformaciones_personaje = prompt("Cuantas transformaciones");
  const nivel_personaje = prompt("Cuantas transformaciones");
  let nombre = nombre_personaje;
  let transformaciones = transformaciones_personaje;
  let nivel = nivel_personaje;
  // console.log(nombre);
  nuevopersonajes = new personaje (nombre, transformaciones, nivel);
  // console.log(nuevopersonajes);

    personajes.push(nuevopersonajes);
    let fila = document.createElement("tr");

    td = document.createElement("td");
    td.innerText = nuevopersonajes.nombre;
    fila.append(td);

    td = document.createElement("td");
    td.innerText = nuevopersonajes.transformaciones;
    fila.append(td);

    td = document.createElement("td");
    td.innerText = nuevopersonajes.raza;
    fila.append(td);

    cuerpoTabla.append(fila);
}


function eliminar() {
  let el = document.getElementsByTagName("tr");
  el.push(1, 1, 1);

}

// function agregar(nuevopersonajes) {
//   personajes.push(nuevopersonajes);
//   let fila = document.createElement("tr");

//   td = document.createElement("td");
//   td.innerText = nuevopersonajes.nombre;
//   fila.append(td);

//   td = document.createElement("td");
//   td.innerText = nuevopersonajes.transformaciones;
//   fila.append(td);

//   td = document.createElement("td");
//   td.innerText = nuevopersonajes.raza;
//   fila.append(td);

//   cuerpoTabla.append(fila);
// }
