/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
	var edad;

	var nombre=document.getElementById('elNombre').value;
	var edad=document.getElementById('laEdad').value;

	alert("Usted se llama "+nombre+" y tiene "+edad+" años.");
}

/*lo que se hizo aca fue el concatenado, en la parte de alert 
  pusimos parte de el texto que queremos que nos aparezca 
  siempre entre comillas seguido del simpolo "+" 
  para asi hacer la concatenacion de las palabras con el dato
  que se pidio anteriormente*/