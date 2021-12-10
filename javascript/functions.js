$(document).ready(function (){
	$(document).on("click", "#btn-calcular",calcularRegraDeTres);
	$(document).on("click", "#btn-converter",converterGb);
	$(document).on("click", "#btn-converter-2",converterMoeda);
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


function converterMoeda(){
	
	var brlEquDol; //valor em dolar de 1 real
	var dolEquBrl; //valor em real de 1 dolar
	var usd = $("#usd").val();
	var BRL = $("#BRL").val();

	
	$.ajax({
		url:"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json",
		type:"GET",
		dataType:"JSON",
		data: JSON.stringify({ }),
		success:function(data){
			var usdValEur = data.eur.usd;
			var brlValEur = data.eur.brl;
			
			console.log("1EUR = " + usdValEur +" U$ & "+ brlValEur+ " R$" );
			
			brlEquDol = brlValEur / usdValEur;
			dolEquBrl = usdValEur / brlValEur;
			
			
			var brl = usd * dolEquBrl;
			brl = brl.toFixed(2) ;
			$("#brl").val(brl+" R$");
			
			
			var USD = BRL * brlEquDol;
			USD = USD.toFixed(2);
			$("#USD").val(USD+" U$");
			
			
		}
	});
		
		
		
		
}		
	