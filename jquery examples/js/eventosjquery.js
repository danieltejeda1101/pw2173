// jquery() = $


var inicia = function(){
	//alert("Lista la página");
	//JSON = JavaScript Object Notation
	$.ajax({
		url: 'https://randomuser.me/api/',
		dataType: 'json',
		success: function(data) {
			alert(data.results[0].name.first +" "+ data.results[0].name.last);
		}
	});


}

$(document).ready(inicia);

