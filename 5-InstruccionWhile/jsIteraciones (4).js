function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(!(numero<0||numero>10))
	{
		document.getElementById('Numero').value=numero;

		alert("Ingresaste bien el numero.");
			break;
	}	

}//FIN DE LA FUNCIÓN