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


function agregarpersonaje() {
    class personaje {
    constructor(nombre, transformaciones, nivel) {
      this.nombre = nombre;
      this.transformaciones = transformaciones;
      this.nivel = nivel;
    }    
  }  
      const nombre_personaje = prompt("Cual nombre del personaje");
      const transformaciones_personaje = prompt("Cuantas transformaciones");
      const nivel_personaje = prompt("Cuantas transformaciones");
  let nombre = nombre_personaje;
  let transformaciones = transformaciones_personaje;
  let nivel = nivel_personaje;
  // console.log(nombre);
  nuevopersonajes = new personaje("Picolo", 4, "Namekiano" );
  console.log(nuevopersonajes);
  agregar();
};

function agregar () {
  var resultado = personajes.push(nuevopersonajes);
  
};

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