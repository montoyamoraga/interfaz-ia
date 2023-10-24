
/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// intento json 20 octubre
// referencia https://www.easydevguide.com/posts/electron_json
/*const path = require('path')


const filePath = path.join(app.getPath('userData'), 'assets/sliders.json')

function saveData(data) {
  const text = JSON.stringify(data)
  fs.writeFile(filePath, text, err => {
      if (err) {
          console.error(err)
      }
  })
}

function readData() {
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          return;
      }
    const parsedData = JSON.parse(data);
      // handle the json data here
      console.log(parsedData)
  });
}*/

// slider horizontal
let sliderHorizontal = document.getElementById("sliderH");
let number = document.getElementById("number");
let buttonH = document.getElementById("cargar");
let buttongH = document.getElementById("guardar");
let buttonrH = document.getElementById("random");


// cuando hay un cambio desde el slider va cambiar el valor 1,2... callback es cuando un elemento ocurre 
sliderHorizontal.oninput = function() {
  number.value = this.value;
}

//cuando hay un cambio desde el input el slider cambiara 
//number.oninput = function(){
//  sliderHorizontal.value = this.value;
//}

buttonH.onclick = function (){
  if (number.value>100 | number.value<0){
    alert("Ingrese un valor entre 0 y 100");
  }else{
  sliderHorizontal.value = number.value;
  }
}

buttongH.onclick = function(){
  alert("JSON pendiente jijijijijiiiii");
}

buttonrH.onclick = function(){
  let random = Math.floor((Math.random() * 100) + 1);
  number.value = random;
  sliderHorizontal.value = random;
}

let input = document.getElementById("number");
input.addEventListener("keypress", function(event) {
  //Valida que la tecla presionada sea "enter"
  if (event.key === "Enter") {
  // Cancel the default action, if needed
  event.preventDefault();
  //Valida que el valor ingresado sea entre 0 y 100 
  if (input.value>100 | input.value<0){
    alert("Ingrese un valor entre 0 y 100");
  }else{
  //Simula interacción de click con el botón "cargar"
  document.getElementById("cargar").click();
  }
}
});

//slider vertical
let sliderVertical = document.getElementById("sliderV");
let numbertwo = document.getElementById("numbertwo");
let buttonV = document.getElementById("cargarV");
let buttongV = document.getElementById("guardarV");
let buttonrV = document.getElementById("randomV");


// cuando hay un cambio desde el slider va cambiar el valor 1,2...
sliderVertical.oninput = function() {
  numbertwo.value = this.value;
}
// //cuando hay un cambio desde el input el slider cambiara 
// numbertwo.oninput = function(){
//   sliderVertical.value = this.value;
// }
buttonV.onclick = function(){
  sliderVertical.value = numbertwo.value;
}
buttonV.onclick = function (){
  if (numbertwo.value>100 | numbertwo.value<0){
    alert("Ingrese un valor entre 0 y 100");
  }else{
  sliderVertical.value = numbertwo.value;
  }
}
buttongV.onclick = function(){
  // alert("JSON pendiente jijijijijiiiii");
  readData();
}


// referencia:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_random3
buttonrV.onclick = function(){
  let random = Math.floor((Math.random() * 100) + 1);
  numbertwo.value = random;
  sliderVertical.value = random;
}
// referencia de https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
  //   let input = document.getElementById("numbertwo");
  //   input.addEventListener("keypress", function(event) {
  //     //Valida que la tecla presionada sea "enter"
  //     if (event.key === "Enter") {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //     //Valida que el valor ingresado sea entre 0 y 100 
  //     if (input.value>100 | input.value<0){
  //       alert("Ingrese un valor entre 0 y 100");
  //     }else{
  //     //Simula interacción de click con el botón "cargar"
  //     document.getElementById("cargarV").click();
  //     }
  //   }
  // });