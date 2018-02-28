function Mostrar()
{
  var importe;
  var descuento=0.75;
  var importefinal;

  importe=document.getElementById('importeFinal').value;
  importe=parseInt(importe);

  importefinal=importe*descuento;

  alert("El importe final es: "+importefinal);
}
