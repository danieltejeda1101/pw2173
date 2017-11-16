//Constantes de electron
const {BrowserWindow} = require('electron').remote;
const app = require('electron').app;
const path = require('path');
const url = require('url');

//Otra ventana
let ventanaCC;

function calculadoraCientifica(){
	ventanaCC = new BrowserWindow({width:380, height:380});
	ventanaCC.loadURL(url.format({
		pathname: path.join(__dirname,'calcientifica.html'),
		protocol: 'file',
		slashes: true
	}))
	ventanaCC.webContents.openDevTools();
	ventanaCC.show();
}

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

function igual(){
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}

function borrar(){
	document.calculadora.resultado.value = "";
	document.calculadora.operando1.value = "";
	document.calculadora.operando2.value = "";
	operador = "";
}










