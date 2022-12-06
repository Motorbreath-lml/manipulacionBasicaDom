const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const result=document.querySelector('#result');

const txt1=document.querySelector('#txt1');
const txt2=document.querySelector('#txt2');
const form=document.querySelector('form');
const resultConcatenar=document.querySelector('#resultConcatenar');

//agregar un evento al boton, ('evento',funcion) 
btn.addEventListener('click',calcularSuma);
//Ya que el btn de concatenar esta en un form y como es el unico que existe en el mismo sele asigna automaticamente el evento submit
//pero el evento corresponde al form y no al boton
form.addEventListener('submit',concatenar);

//Las variables const antes declaradas son objetos
console.log("EL typeof de un input:",(typeof input1),"\nEl type of del boton: ",(typeof btn));

//Funcion para concatenar los primeros dos cuadros
// de texto
function calcularSuma(){
    numero1=Number.parseFloat(input1.value);
    numero2=Number.parseFloat(input2.value);
    let text="";
    if(Number.isNaN(numero1) || Number.isNaN(numero2) ){
        text="Uno o ambos argumetos no son numeros: "+input1.value+" "+input2.value+" numero1:"+numero1+" numero2:"+numero2;
    }else{
        text="El resultado de la suma es: "+(numero1+numero2);
    }
    result.innerText=text;
}

//Ya que es un evento se puede pasar como parametro a la funcion y cancelar el comportamiento por default del form de recargar la pagina
function concatenar(event){
    console.log("Atributos y metodos del event:\n",{event});
    event.preventDefault();
    resultConcatenar.innerText="La concatenacion es: "+txt1.value+txt2.value;
}

/* para poder usar el btn de un fomulario como
en la primer funcion lo que hau que hacer es modificar los atributos del boton en HTML 
en el type="button"*/