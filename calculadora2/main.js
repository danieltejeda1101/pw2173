//Necesitamos estas cosas
const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const path = require('path'); //Muestra la ruta del archivo
const url = require('url');//Carga una url

// ECMASCRIPT = 6
// Constante sin valor inicial
let PantallaPrincipal;

//Función
function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:320,height:425});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.webContents.openDevTools();
	PantallaPrincipal.show();
}


//Encender la aplicación
app.on('ready', muestraPantallaPrincipal)