$( document ).ready(function() {
	$(".mostrar-ojo").click(function(){
		$(this).parent().find(".faltas").toggle();
		$(this).parent().find(".promedio").toggle();
		$(this).hide();
	});
	$(".faltas").click(function(){
		$(this).parent().find(".mostrar-ojo").toggle();
		$(this).parent().find(".promedio").toggle();
		$(this).hide();
	});
	$(".promedio").click(function(){
		$(this).parent().find(".mostrar-ojo").toggle();
		$(this).parent().find(".faltas").toggle();
		$(this).hide();
	});


	$(".open-ojo").click(function(){
		$(this).parent().find(".fecha").toggle();
		$(this).parent().find(".mostrar").toggle();
		$(this).hide();
	});
	$(".fecha").click(function(){
		$(this).parent().find(".open-ojo").toggle();
		$(this).parent().find(".mostrar").toggle();
		$(this).hide();
	});
	$(".mostrar").click(function(){

		$(this).parent().find(".open-ojo").toggle();
		$(this).parent().find(".fecha").toggle();
		$(this).hide();
	});
	
});
