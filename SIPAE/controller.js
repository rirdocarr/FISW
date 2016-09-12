/**
 * Created by rCasanueva on 11-09-2016.
 */
var mysql   = require('mysql');

exports.makeConnection = function(){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'CDUC-Futbol.10',
        database: 'fisw'
    });
    return con;
}

/* Usuario */
exports.insertarUsuario = function(nombre, apellido, rut, tipo, email, password, clasificacion){
    var connection = this.makeConnection();
    connection.connect();
    var usuario = {
        Nombre: nombre,
        Apellido: apellido,
        Rut: rut,
        Tipo: tipo,
        Mail: email,
        Password: password,
        Clasificacion_idU: clasificacion
    }
    connection.query('INSERT INTO `fisw`.`usuario` SET ?', usuario, function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Success');
        }
    });
    connection.end();
}

exports.editarUsuario = function(id, nombre, apellido, rut, tipo, email, password, clasificacion){
    var connection = this.makeConnection();
    connection.connect();
    var usuario = {
        Nombre: nombre,
        Apellido: apellido,
        Rut: rut,
        Tipo: tipo,
        Mail: email,
        Password: password,
        Clasificacion_idU: clasificacion
    }
    connection.query('UPDATE `fisw`.`usuario` SET ? WHERE `idUsuario` = ?', [usuario, id], function(error) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Success');
        }
    });
    connection.end();
}

/* Material */

exports.insertarMaterial = function(nombre, tipo, tamanio, ruta){
    var connection = this.makeConnection();
    connection.connect();
    var material = {
        Nombre: nombre,
        Tipo: tipo,
        Tamanio: tamanio,
        Ruta: ruta
    }
    connection.query('INSERT INTO `fisw`.`material` SET ?',material, function(error)){
        if (error) {
            console.log(error.message);
        } else {
            console.log('Success');
        }
    });
}

exports.editarMaterial = function(id, nombre, tipo, tamanio, ruta){
    var connection = this.makeConnection();
    connection.connect();
    var material = {
        Nombre: nombre,
        Tipo: tipo,
        Tamanio: tamanio,
        Ruta: ruta
    }
    connection.query('UPDATE `fisw`.`material` SET ? WHERE `idMaterial` = ?', [material, id],function(error)){
        if (error) {
            console.log(error.message);
        } else {
            console.log('Success');
        }
    });
}

exports.eliminarMaterial = function(id){
    var connection = this.makeConnection();
    connection.connect();
    connection.query('DELETE FROM `fisw`.`material` WHERE `idMaterial` = ?', id, function(error)){
        if (error) {
            console.log(error.message);
        } else {
            console.log('Success');
        }
    });
}

