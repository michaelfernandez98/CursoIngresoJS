//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");
	//no usar while no validar
	var numero1;
	var numero2;
	var multiplicacion;
	var resta;
	var concatenar;
	var total;
	var par;
	//se ingresan dos numeros si son iguales se concatenan si el mayor es el primero se multiplica de lo contrario  se restan 
	numero1=prompt("ingrese primer numero");
	numero2=prompt("ingrese segundo numero");

	if (numero1==numero2) 
	{
		concatenar=numero1+numero2;
		total=concatenar;
	}
	else
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);

		if (numero1>numero2) 
		{
			multiplicacion=numero1*numero2;
			total=multiplicacion;
			if (multiplicacion%2==0) 
			{
				par="es par";
			}
		}
		else
		{
			resta=numero1-numero2;
			total=resta;
		}
	}
	alert("el resultado es: "+total)

}

// si el resultado de la multiplicacion es par agregar la palabra es par al lado del resultado;