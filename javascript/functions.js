$(document).ready(function (){
	$(document).on("click", "#btn-calcular",calcularRegraDeTres);
	$(document).on("click", "#btn-calcular-1",calcularRegraDeTres1);
	$(document).on("click", "#btn-converter",converterGb);
	$(document).on("click", "#btn-converter-2",converterMoeda);
	$(document).on("click", "#btn-addRow",addRow);
	$(document).on("click", "#btn-somarHoras",somarHoras);
});



function calcularRegraDeTres(){
	var total = $("#total").val();
	var valor = $("#valor").val();
	
	var resultado = valor * 100 / total;
	resultado = +resultado.toFixed(2);
	
	$("#resultado").val(resultado +"%");	
}

function calcularRegraDeTres1(){
	var total = $("#total-1").val();
	var percentual = $("#resultado-1").val();
	
	var resultado = percentual * total / 100;
	resultado = +resultado.toFixed(2);
	$("#resultado-1").val(percentual);
	$("#valor-1").val(resultado);	
}	

function converterGb(){
	var gb = $("#gb").val();
	var mb = gb * 1024;
	mb = mb.toLocaleString('pt-BR');
		
	$("#mb").val(mb+" MB");	
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
			$("#brl").val(brl+" U$");
			
			
			var USD = BRL * brlEquDol;
			USD = USD.toFixed(2);
			$("#USD").val(USD+" R$");
			
			
		}
	});
		
		
		
		
}		
	
		function somarHoras(){
			var horasMinutos = [];
			
			for(var qntInputs = 0; qntInputs < 30; qntInputs ++){
				var horas = "horas-" + qntInputs;
				var mins = "mins-" + qntInputs;
				
				horasMinutos.push({
					Horas: $("#"+horas).val(),
					Minutos: $("#"+mins).val()
				})
			}
			
			console.log(horasMinutos);

			var contador = 0;
			for (var i = 0; i < horasMinutos.length; i++ ){
				if( !(typeof horasMinutos[i].Horas === 'undefined') && ! (typeof horasMinutos[i].Minutos === 'undefined')){
					contador++;
				}
				
			}
			console.log(contador);
			
			console.log(horasMinutos);
			var totalHoras = 0;
			var totalMinutos = 0;
			for (var i = 0; i < contador ; i++){
				totalHoras += horasMinutos[i].Horas * 1;
				totalMinutos += horasMinutos[i].Minutos* 1;
			}
			console.log("Horas: " + totalHoras);
			console.log("Minutos: " + totalMinutos);
			 
			while(totalMinutos >= 60){ 
				totalMinutos -= 60;
				totalHoras += 1;
			}
			 
			$("#resultado").val(totalHoras+" hrs " + totalMinutos+" min"); 
			 
		}
		
	var count = 1;
		
	function addRow(){
		count ++;
			$("#input-horas").append(
				"</br>" +
					"<div class='row '>"+
						"<div class='col-md-5'>" +
							"<input class='form-control' type='number' id='horas-"+count+"' placeholder='horas' />"+
						"</div>"+
						"<div class='col-md-1'>"+
							"<span>:</span>"+
						"</div>"+
						"<div class='col-md-5'>"+
							"<input class='form-control' type='number' id='mins-"+count+"' placeholder='minutos' />"+
						"</div>"+
					"</div>");
			
	}