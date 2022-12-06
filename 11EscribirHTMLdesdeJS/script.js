const h1=document.querySelector('h1');
const p=document.querySelector('p');
const pClase=document.querySelector('.clase');
const pID=document.querySelector('#id');
const input=document.querySelector('input');

/*el metodo innerHTML permite modificar el contenido
de las etiquetas HTML y que este sea renderizado como HTML
Es peligroso ya que puede mandar a llamar codigo JS de 
otra fuente*/
h1.innerHTML='Codigo HTML<br>Injectado desde el JS con innerHTML';

/* EL metodo innerText tambien permite introducir contenido
entre las etiqeutas, pero este contenito es interpretado
como texto y por lo tanto ya no existe tanto riesgo */
h1.innerText='Texto plano<br>Injectado desde el JS con innerText';

/* Con getAttribute puedes obtener el valor de un atrinuto de
un elemento del HTML, por ejemplo de puede obtener la clase o el ID o cualquier otro atributo que tenga el HTML*/
console.log("Atributo class del h1:",h1.getAttribute('class'));

/*Con setAttribute puedes cambiar el valor de un attributo */
h1.setAttribute('class','rojo')
console.log("Nuevo valor del attributo class del h1: ",h1.getAttribute('class'));

/*con classList puedes agregar o quiatr clases al atributo class*/
h1.classList.add('verde');
console.log("Los valores de h1 en el atributo class: ",h1.getAttribute('class'));

//Removiendo algunos attributos
h1.classList.remove('rojo');
console.log("Los valores de h1 en el atributo class: ",h1.getAttribute('class'));

//Modificar el valor del input
input.value='Este texto se modifico desde JS';

//Crear elementos HTML
const img=document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/9225867/pexels-photo-9225867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log('LA etiqueta HTML creada:',img);

//Para colocar el img en el HTML hay que usar etiqeutas que ya
// esten en el HTML y permitan agregar una etiqueta img
// Se puede agregar al final de la etiqueta p o borrar el contenido de esta
pID.innerHTML="";
//Despues se agrega la nueva etiqueta
pID.appendChild(img);