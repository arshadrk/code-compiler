
var app = angular.module("compiler",['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/compile',{
		templateUrl: './compile.html',
		controller: 'Compiler'
	}).
	when('/',{
		templateUrl: './nolog.html',
		//controller: 'logg'
	}).
	when('/run',{
		templateUrl: './run.html',
		controller: 'runc'
	}).
	otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
}]);
var datas={ source:'print "Hello"',
	lang: 5,
  testcases: '["Hello World"]'
	};
	
app.controller('Compiler', function($scope,$http){
	var edv=editor.getValue();
	$scope.compilemsg="Compiling....";
	var params={name:{ source:edv,lang: 5,testcases: '["Hello World"]'}};
	$http.post('http://localhost:3000/compile',JSON.stringify(params)).success(function(response){
		console.log(response);
		$scope.compilemsg=response.compilemsg;

	}).error(function(response){
		
		$scope.compilemsg="Network error";
	});
	
});

app.controller('runc', function($scope,$http){
	var edv=editor.getValue();
	$scope.compilemsg="Compiling....";
	$scope.runmsg="";
	
	var params={name:{ source:edv,lang: 5,testcases: '["Hello World"]'}};
	
	$http.post('http://localhost:3000/run',JSON.stringify(params)).success(function(res){
		
		$scope.compilemsg=res.compilemsg;
		$scope.runmsg=res.runmsg;
		
	}).error(function(res){
		$scope.compilemsg="Network error";
	});

});
