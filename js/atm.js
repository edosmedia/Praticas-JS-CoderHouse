let botones_pad = document.querySelectorAll('button');
let btn_enter1 = document.getElementById("btn-enter");
let btn_borrar = document.getElementById("btn-borrar");
let password = 1234;
let digitos = "";
let tecla = 0;

botones_pad.forEach(boton => {
   boton.addEventListener('click', () =>{

    digitos += boton.innerHTML; 
    console.log('variable digitos ' + digitos);
    tecla = Number(digitos); 
    console.log('variable tecla ' + tecla); //
  
  
    if (password === tecla) {  // hace la compracion variable password y tecla 
     console.log("entraste");
   }
      btn_enter1.addEventListener("click", () => {
        
      });

  
   })
});


// function borrar(){
//   tecla = 0;
//   return tecla;
// }
//  switch (btn_enter1) {
//    default:
//    console.log('ejecutado');
// }
