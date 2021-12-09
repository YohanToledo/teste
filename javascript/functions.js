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
	
	if(gb == "" || gb == "0"){
		$("#gb").val("0");
		$("#mb").val(mb+"MB");
	}
	else if(gb.includes("GB")){
		$("#gb").val("0");
		$("#mb").val("0MB");
	}
	else{
		$("#gb").val(gb+"GB");
		$("#mb").val(mb+"MB");
	}
		
}	
	