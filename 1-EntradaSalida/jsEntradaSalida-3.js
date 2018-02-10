/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var dato;
	var dato=document.getElementById('elNombre').value;

	alert(dato);
}


/*en este caso con el: document.getElementById('elNombre').value; te toma el dato a ingresar en el cuadro de la pantalla
que indica: "elNombre" y luego por medio del alert te devuelve el dato ingresado anteriormente*/

/*IMPORTANTE: el "document.getElementById('elNombre').value;" tiene dos modos de uso 
si adelante se le pone en este caso: 
          
          var dato=document.getElementById('elNombre').value;

   te toma el dato en el cuadro al que se refiere.

   en el caso del otro modo:

     	  document.getElementById('elNombre').value;=dato   

    si el dato a ingresar se encuentra despues, quiere decir que el dato a ingresar 
    va aparaecer en el cuadro del getElementById

    en otras palabras va a hacer lo contrario a lo anterior*/   