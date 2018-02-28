function Mostrar()
{
	var numero1;
	var numero2;
	var suma;
	var total;

	numero1=prompt("ingrese numero:");
	numero1=parseInt(numero1);

	numero2=prompt("ingrese numero:");
	numero2=parseInt(numero2);

	suma=numero1+numero2;

	total=suma

	if (suma<-1) 
	{
		suma="Negativo";
	}
	else{
		if (suma>1) 
		{
			suma="Positivo";
		}
		else{
			suma="Cero";
		}
	}

	document.write("El resultado es: "+total);
	document.write("<br>El resultado es: "+suma);

}
