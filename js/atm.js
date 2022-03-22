let botones_pad = document.querySelectorAll('button');
let btn_enter1 = document.getElementById('btn_enter');
let password = 1234;
let digitos = "";
let programa = "";

botones_pad.forEach(boton => {
   boton.addEventListener('click', () =>{
    digitos += boton.innerHTML;  
   })
});

 switch (btn_enter1) {
   default:
   console.log('ejecutado');
}
