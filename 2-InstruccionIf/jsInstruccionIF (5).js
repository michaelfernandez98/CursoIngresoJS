function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if(edad<13||edad>17)
	{
		alert("Lo sentimos usted no es adolescente");
	}



}//FIN DE LA FUNCIÓN