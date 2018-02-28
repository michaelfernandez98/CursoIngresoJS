//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 8-iteraciones");
/*se ingresa hasta que el usuario quiera el nombre de un animal, 
el peso del mismo, validar q sea mayor a cero, 
la temperatura del habitat de ese animal, validar entre -40 y 40, 
informar la cantidad de temperaturas pares la cantidad de temperaturas impares, 
el nombre del animal mas pesado, el nombre del  animal menos pesado, 
la cantidad de animales que viven en habitat de temperatura menores a 0 inclusive, 
el promedio del peso de todos los animales,  la temperatura maxima y la minima.*/
	var peso;
	var nombre;
	var contador=0;
	var acumulador=0;
	var temperaturadelhabitat;
	var temperaturamaxima;
	var temperaturaminima;
	var respuesta="si";
	var promedio;
	var cantidadtemppar=0;
	var cantidadtempimpar=0

	while(respuesta!="no")
	{
		contador++;
		nombre=prompt("Ingrese el nombre el animal");
//#################################################################################################################
		peso=prompt("Ingrese el peso del animal");
		while(peso<1||isNaN(peso))
		{
			peso=prompt("ERROR Ingrese el peso del animal")
			acumulador=acumulador+peso;			
		}
//#################################################################################################################

		temperatura=prompt("Ingrese la temperatura del habitat del animal:");
		temperatura=parseInt(temperatura);
		while(temperatura>40||temperatura<-40)
		{
			temperatura=prompt("ERROR Ingrese correctamente la temperatura del habitat");
			temperatura=parseInt(temperatura);
		}
		if (temperatura%2==0&&numero!=0) 
		{
			cantidadtempimpar++;
		}
		else{
			if (temperatura%2!=0) 
			{
				cantidadtempimpar++;
			}
		}

     respuesta=prompt("si quiere continuar ingrese 'no' de lo contrario pulse enter")



	}

document.write(temperatura)


}