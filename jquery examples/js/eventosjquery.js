// jquery() = $


var inicia = function(){
	
	var nuevo = function(){
		//JSON = JavaScript Object Notation
		$.ajax({
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data) {
				//Llenar información
				$("#nombre").html(data.results[0].name.first+" "+data.results[0].name.last);
				$("#email").html(data.results[0].email);
				$("#cumpleaños").html(data.results[0].dob);
				$("#foto").attr("src",data.results[0].picture.large);
			}
		});
	}

	nuevo();
	$("#btnNuevo").on("click",nuevo);

}




$(document).ready(inicia);

