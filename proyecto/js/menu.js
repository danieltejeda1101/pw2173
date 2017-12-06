
var inicia = function(){
	var alta = function(){
		$("#altas").show("slow");
	}

	var altaAlumno = function(){
		var ncontrol = $("#txtNcontrol").val();
		var nombre = $("#txtNombre").val();
		var carrera = $("#txtCarrera").val();
		var clave = $("#txtClave").val();
		var parametros = "opc=altaalumno"+
						 "&ncontrol="+ncontrol+
						 "&nombre="+nombre+
						 "&carrera="+carrera+
						 "&clave="+clave+
						 "&id="+Math.random();

		$.ajax({
			url: 'php/altaalumno.php',
			dataType: 'json',
			type: 'post',
			data:parametros,
			success:function(result){
				console.log(result);
				if(result.respuesta){
					alert("Alumno dado de alta");
				}
				else{
					alert("No se pudo dar de alta");
				}
				
			},
			error:function(a,b,c){
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});


	}


	$("#btnAlta").on("click",alta);
	$("#btnAltaAlumno").on("click",altaAlumno);

}


$(document).ready(inicia);

