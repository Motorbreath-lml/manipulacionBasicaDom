/* usar la palabra reservada 'document' hace referencia al HTML que usa el script
document tiene diversos metodos para conseguir la informacion del HTML
En este ejemplo se usara 'querySelector' que como argumento se pasa el
nombre de la etiqqueta h1,p,etc o el nombre de la clase .unaClase
el nombre del id #unID, justo como en el CSS
*/

const h1=document.querySelector('h1');
const p=document.querySelector('p');
const pClase=document.querySelector('.clase');
const pID=document.querySelector('#id');
const input=document.querySelector('input');

console.log("Imprimir los elementos como se renderizar en el navegador\n",
    h1,
    p,
    pClase,
    pID,
    input
);

console.log("Imprimir los elementos como objetos notese las llaves en el console.log/n la consola del navegador mostrara propiedades y metodos de estos\n",
    {h1,
    p,
    pClase,
    pID,
    input}
);

console.log("Imprimir el contenido del input, en este caso imprimira el value que le di en el HTML, para mejorar esta funcion hay que hacerlo con eventos\n",
    input.value
);