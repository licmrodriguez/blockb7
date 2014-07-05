// IMPORTAMOS LA LIBRERIA DE EXPRESS
// MODELO VISTA CONTROLADOR
var express = require("express");
var nunjucks = require("express");
// ESTO NO ERA NECESARIO EN LA VERSION 3
// ES OBIGATORIA EN LA VERSION 4
var serveIndex = require("serve-index");
var serveStatic = require()"serve-static";

// CREAMOS AL SERVIDOR WEB
var app = express();

// CONFIGURAMOS NUNJUCKS PARA TRABAJAR CON EXPRESS
// __dirname == ES LA RUTA ACTUAL DONDE SE ENCUENTRA ESTE ARCHIVO
nunjucks.configure(__dirname + "/vistas",{
	express:app
});

// MUESTRA LOS RECURSOS DE LA CARPETA /estaticos
app.use("/estaticos", serveStatic(__dirname + "/estaticos"));
app.use("/estaticos", serveIndex(__dirname + "/estaticos"));

app.listen(8081); // Levanta el puerto 8081

// CUANDO ALGUIEN ESCRIBA http://localhost:8081/

app.get("/",function(request, response){
	//response.send("bienvenido");
	response.render("index.html",{
		saludo:"saludo dinamico",
		parametro2:"otro valor"
	});
});

app.get("/contacto",function(request, response){
	response.render("contacto.html");
});

app.get("/blog",function(request, response){
	response.render("blog.html");
});

console.log("hola mundo node.js");
