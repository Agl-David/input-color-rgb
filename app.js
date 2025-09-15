// 1ro obtenemos los inputs.

const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

// 2do obtenemos los textos.

const textRed = document.getElementById('text-red');
const textGreen = document.getElementById('text-green');
const textBlue = document.getElementById('text-blue');

// 3ro Variables para especificar el color RGB 0-255.

let red = inputRed.value; //23
let green = inputGreen.value; //41
let blue = inputBlue.value; //56

// 4to Actualizamos el texto de lo parrafos.

textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;

// 5to Funcion para actualizar color de fondo.

const actualizarColor = (red, green, blue) => {
  const colorRGB = `rgb(${red}, ${green}, ${blue})`
  document.body.style.background = colorRGB
}

// 6to funcion para escuchar los eventos

// Para actualizar red.

inputRed.addEventListener('change', (e) => {
  let red = e.target.value;
  textRed.innerText = red;  
  actualizarColor(red,green,blue);  
});

inputGreen.addEventListener('change', (e) => {
  let green = e.target.value;
  textGreen.innerText = green;  
  actualizarColor(red,green,blue);  
});

inputBlue.addEventListener('change', (e) => {
  let blue = e.target.value;
  textBlue.innerText = blue;  
  actualizarColor(red,green,blue);  
});