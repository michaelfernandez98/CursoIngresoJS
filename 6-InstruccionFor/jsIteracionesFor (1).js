function Mostrar()
{
	//var contador=0
	var interacciones=10;
	var contadorDePares=0;
	var contadorDeImpares=0;
	var contadorDeCeros=0;
	var contadorDePositivos=0;
	var contadorDeNegativos=0

	for(contador=-10;contador<interacciones;contador++)
	{
		//document.write("<br>"+contador);
		if (contador==0) 
		{
			contadorDeCeros++;
		}
		else
		{
			if (contador%2==0) 
			{
				contadorDePares++;
			}
			else
			{
				contadorDeImpares++;
			}
			if(contador>0)
			{
				contadorDePositivos++;
			}
			else
			{
				contadorDeNegativos++;
			}
		}
	}
		document.write("<br> La cantidad de ceros: "+contadorDeCeros);
		document.write("<br> La cantidad de pares: "+contadorDePares);
		document.write("<br> La cantidad de impares: "+contadorDeImpares);
		document.write("<br> La cantidad de negativos: "+contadorDeNegativos);
		document.write("<br> La cantidad de positivos: "+contadorDePositivos);
}		