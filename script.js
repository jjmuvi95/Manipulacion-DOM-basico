const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');  
const pResult =document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues);
//btn.addEventListener('click', btnOnClick ) no es necesario ponrle '()' porque no se requiere para el addeventListener

function sumarInputValues (event) {
    event.preventDefault(); //esta parte desactiva la recarga de la pagina
    const sumaInputs = Number(input1.value)  + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
} 