/**
 * Created by rCasanueva on 22-08-2016.
 */
/*
connection.insertarUsuario('Ricardo','Carrasco','',2,'ricardo.carrasco.12@sansano.usm.cl','ricardo',2);

connection.editarUsuario(4, 'Ricardo','Carrasco','',2,'ricardo.carrasco.12@sansano.usm.cl','ricardo1234',2);
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;