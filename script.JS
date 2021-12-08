$(document).ready(function (){
	$(document).on("click", "#btn-calcular",calcularRegraDeTres);
});


function calcularRegraDeTres(){
	var total = $("#total").val();
	var valor = $("#valor").val();
	
	var resultado = valor * 100 / total;
	resultado = +resultado.toFixed(2);
	
	$("#resultado").val(resultado +"%");	
}	
	