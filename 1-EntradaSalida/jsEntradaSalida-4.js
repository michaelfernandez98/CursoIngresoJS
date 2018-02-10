/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato;

	var dato=prompt("ingrese su nombre");

	document.getElementById("elNombre").value=dato;

}
/*en este caso con el uso del prompt, se pide el nombre del usuario con un alert,
  luego en el cuadro del getElementById va aparecer el dato anteriormente pedido
  con el Prompt*/ 
