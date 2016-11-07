/**
 * Created by rCasanueva on 12-09-2016.
 */
var mysql   = require('mysql');


//--------------------------------------------
//           makeConnection
//--------------------------------------------
//   FUNCTION_IN_PARAMETERS_DEFINITION
//   NONE
//   FUNCTION_OUT_PARAMETERS_DEFINITION
//   out:    connection variable
//   FUNCTION_CODING
exports.makeConnection = function() {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'CDUC-Futbol.10',
        database: 'fisw'
    });
    return con;
}
//   FUNCTION_EXPLANATION
//   Use the DataBase information and link the
//   db with the sequence through a connection
//--------------------------------------------


