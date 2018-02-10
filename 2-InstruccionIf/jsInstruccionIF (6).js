function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>17) 
		{
			alert("Usted es mayor de edad");
		}
		else if (edad<18&&edad>12)
		 {
		 	alert("Usted es adolescente");
		 }
		 else
		 {
		 	alert("Usted es niño");
		 }


}//FIN DE LA FUNCIÓN