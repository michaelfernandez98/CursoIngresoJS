function Mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

	precio1=document.getElementById('precioUno').value;
	precio1=parseInt(precio1);

	precio2=document.getElementById('precioDos').value;
	precio2=parseInt(precio2);

	precio3=document.getElementById('precioTres').value;
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3;

	promedio=suma/3;

	alert("La suma de estos precios es: "+suma);
	alert("El promedio de los precio es: "+promedio);


}
