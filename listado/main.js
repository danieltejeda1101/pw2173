//Necesitamos estas cosas
const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
//Otra manera de hacerlo
//const {app, BrowserWindow} = require('electron');
const path = require('path'); //Muestra la ruta del archivo
const url = require('url');//Carga una url
//Constantes para PDF
const electron = require('electron');
const fs = require('fs');//Sistema de archivos
const os = require('os');//Acceso al sistema operativo
const ipc = electron.ipcMain;//Para declarar una función remota
const shell = electron.shell;//Acceso a terminal o línea de comandos


// ECMASCRIPT = 6
// Constante sin valor inicial
let PantallaPrincipal;
//Objeto global para compartir datos entre pantallas
global.infoUsuarios = {
	nombre: '',
	genero: '',
	foto: '',
	direccion: '',
	telefono: ''
}

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

//Evento para PDF (declaración)
ipc.on('print-to-pdf',function(event){
	const pdfPath = path.join(os.tmpdir(),'print.pdf')
	const win = BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if(error){
				throw error
			}
			shell.openExternal('file://'+pdfPath)
			win.close()
		})
	})
});

//Encender la aplicación
app.on('ready', muestraPantallaPrincipal)


