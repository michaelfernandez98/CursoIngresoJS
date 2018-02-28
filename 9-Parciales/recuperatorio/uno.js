
function Mostrar()
{
	var base;
	var perimetro;

	base=document.getElementById('laBase').value;
	base=parseInt(base);

	perimetro=base*3;

	alert("El perimetro de este triangulo equilatero es: "+perimetro+"cm");
}
