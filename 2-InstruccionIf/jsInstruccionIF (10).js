function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor((Math.random()*(10))+1);
	console.log(nota);

	if (nota>8) 
	{
		alert("La nota es: "+nota+" ¡Excelente!");
	}
	else
	{
		if (nota>3) 
		{
			alert("La nota es: "+nota+" ¡Aprobó!");
		}
		else 
		{
			alert("La nota es: "+nota+" Vamos la proxima se puede");
		}
		
	}
}//FIN DE LA FUNCIÓN