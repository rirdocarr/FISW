/**
 * Created by rCasanueva on 12-09-2016.
 */

var con = require('./database_controller');

//--------------------------------------------
//           insertarUsuario
//--------------------------------------------
//   FUNCTION_IN_PARAMETERS_DEFINITION
//   nombre:        string
//   apellido:      string
//   rut:           string
//   email:         string
//   password:      string
//   clasificacion: integer
//   FUNCTION_OUT_PARAMETERS_DEFINITION
//   out:    string of resolution
//   FUNCTION_CODING
exports.insertarUsuario = function(nombre, apellido, rut, tipo, email, password, clasificacion){
    var connection = con.makeConnection();
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
//   FUNCTION_EXPLANATION
//   Through the connection, the code makes an
//   SQL query of INSERTION.
//--------------------------------------------

//--------------------------------------------
//           editarUsuario
//--------------------------------------------
//   FUNCTION_IN_PARAMETERS_DEFINITION
//   id:            integer
//   nombre:        string
//   apellido:      string
//   rut:           string
//   email:         string
//   password:      string
//   clasificacion: integer
//   FUNCTION_OUT_PARAMETERS_DEFINITION
//   out:    string of resolution
//   FUNCTION_CODING
exports.editarUsuario = function(id, nombre, apellido, rut, tipo, email, password, clasificacion){
    var connection = con.makeConnection();
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
//   FUNCTION_EXPLANATION
//   Through the connection, the code makes an
//   SQL query of UPDATE.
//--------------------------------------------

