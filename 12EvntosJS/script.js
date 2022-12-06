const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const resultConcatenar=document.querySelector('#resultConcatenar');

//Funcion para concatenar los primeros dos cuadros
// de texto
function btnConcatenar(){
    resultConcatenar.innerText="El resultado de concatenar: "+input1.value+input2.value;
}