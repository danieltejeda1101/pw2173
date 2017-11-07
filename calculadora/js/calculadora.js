var operando1 = 0;
var operando2 = 0;
var operador = "";

function numeros(num){
	if(operador == ""){
		//Que valor inicial tiene nuestro campo de texto
		var valorInicial = document.calculadora.operando1.value
		if (valorInicial == 0){
			document.calculadora.operando1.value = ""
		}
		//Escribir en operando 1
		document.calculadora.operando1.value = document.calculadora.operando1.value + num
		return;
	}

	//Escribir en operando 2
	//Que valor inicial tiene nuestro campo de texto
	var valorInicial = document.calculadora.operando2.value
	if (valorInicial == 0){
		document.calculadora.operando2.value = ""
	}
	//Escribir en operando 2
	document.calculadora.operando2.value = document.calculadora.operando2.value + num

}

function operadores(ope){
	operador = ope
}