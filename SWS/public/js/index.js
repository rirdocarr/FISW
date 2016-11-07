/**
 * Created by rCasanueva on 22-08-2016.
 */
/*
connection.insertarUsuario('Ricardo','Carrasco','',2,'ricardo.carrasco.12@sansano.usm.cl','ricardo',2);

connection.editarUsuario(4, 'Ricardo','Carrasco','',2,'ricardo.carrasco.12@sansano.usm.cl','ricardo1234',2);
*/

$('div.modal').click(function() {
	$('div.modal').hide();
});

var app = angular.module('app', ['ui.router']);


app.config(function($interpolateProvider, $stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('main',{
		url: '',
		views:{
			'header': {
				templateUrl: '/header',
	   			controller: 'headerCtrl'	      
			},
		}
	});


app.controller('MenuController', function($scope, $location) {
	$scope.url = $location.path();

   $scope.$on('actualizar', function (event, data) {
      console.log("data"); // 'Data to send'
   });
});
