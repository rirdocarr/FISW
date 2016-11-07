/**
 * Created by rCasanueva on 22-08-2016.
 */


var path = process.cwd();

module.exports = function(app){

// Ruteo
app.get('/', function(req, res){
    res.sendfile(__dirname + '/views/main.html');
});

app.get('/index', function(req, res){
	res.sendfile(__dirname + '/views/index.html');
})

app.get('/login', function(req, res){
    res.sendfile(__dirname + '/views/login.html'); 
});

app.get('/registro', function(req, res){
    res.sendfile(__dirname + '/views/registro.html');
});

app.get('/home', function(req, res){
    res.sendfile(__dirname + '/views/inicio.html');
});

app.get('/cursos', function(req, res){
	res.sendfile(__dirname + '/views/menucursos.html');
});

app.get('/asignatura', function(req, res){
	res.sendfile(__dirname + '/views/curso.html');
});

};
