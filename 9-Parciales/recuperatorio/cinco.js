function Mostrar()
{
	var mes=prompt("Ingrese el mes: ");

	switch(mes)
	{
		case "diciembre":
			alert("Se vienen las fiestas!!!");
				break;
		case"enero":
			alert("Comienza el año!!!")
				break;
		default:
			alert("No es Enero, ni Diciembre.");
	}

}
