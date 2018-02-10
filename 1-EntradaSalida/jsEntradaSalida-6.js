/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	var numeroUno=document.getElementById("numeroUno").value;
	var numeroDos=document.getElementById("numeroDos").value;

	var numeroUno=parseInt(numeroUno);
	var numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert("El resultado es: "+resultado);


}

