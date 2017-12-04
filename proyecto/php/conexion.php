<?php

	function conectaBD(){
		//Server, usuario, contraseña, bd
		$conexion = mysqli_connect("localhost","root","","pw2173");
		return $conexion;
	}


?>