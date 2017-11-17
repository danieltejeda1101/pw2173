//Necesitamos estas cosas
const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
//Otra manera de hacerlo
//const {app, BrowserWindow} = require('electron');
const path = require('path'); //Muestra la ruta del archivo
const url = require('url');//Carga una url



// ECMASCRIPT = 6
// Constante sin valor inicial
let PantallaPrincipal;

//Función
function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:700,height:525});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	//PantallaPrincipal.webContents.openDevTools();
	PantallaPrincipal.show();
}


//Encender la aplicación
app.on('ready', muestraPantallaPrincipal)