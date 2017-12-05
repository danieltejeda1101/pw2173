

var inicia = function(){
	var entrada = function (){
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		var parametros = "opc=valida"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();
		$.ajax({
			url: 'php/entrada.php',
			dataType: 'json',
			type: 'post',
			data:parametros,
			success:function(result){
				console.log(result);
				if(result.respuesta){
					//alert("Bienvenido "+result.nombre);
					$("main").load("menu.html");
				}
				else{
					alert("Usuario incorrecto");
				}
				
			},
			error:function(a,b,c){
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}
	$("#btnEntrar").on("click",entrada);
}




$(document).ready(inicia);