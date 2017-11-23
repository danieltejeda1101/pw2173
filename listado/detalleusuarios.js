const {BrowserWindow} = require('electron').remote;
const app = require('electron').app;
const $ = require('jquery');
//Constantes para llamar al PDF
const ipc = require('electron').ipcRenderer; //Render es la pantalla
const botonPDF = document.getElementById('btnPDF');
//Activamos el evento click del botón btnPDF
botonPDF.addEventListener('click',function(event){
	botonPDF.style.display = "none"
	ipc.send('print-to-pdf')
});

var nombre = require('electron').remote.getGlobal('infoUsuarios').nombre
var genero = require('electron').remote.getGlobal('infoUsuarios').genero
var foto = require('electron').remote.getGlobal('infoUsuarios').foto
var direccion = require('electron').remote.getGlobal('infoUsuarios').direccion
var telefono = require('electron').remote.getGlobal('infoUsuarios').telefono

$("#idNombre").html(nombre);
$("#idGenero").html(genero);
$("#idTelefono").html(telefono);
$("#idDireccion").html(direccion);
$("#idFoto").attr("src",foto);