$(document).ready(function (){
	$(document).on("click", "#btn-calcular",calcularRegraDeTres);
	$(document).on("click", "#btn-converter",converterGb);
});



function calcularRegraDeTres(){
	var total = $("#total").val();
	var valor = $("#valor").val();
	
	var resultado = valor * 100 / total;
	resultado = +resultado.toFixed(2);
	
	$("#resultado").val(resultado +"%");	
}	

function converterGb(){
	var gb = $("#gb").val();
	
	var mb = gb * 1000;
	mb = mb.toLocaleString('pt-BR');
	$("#gb").val(gb+"GB");
	$("#mb").val(mb+"MB");	
}	
	