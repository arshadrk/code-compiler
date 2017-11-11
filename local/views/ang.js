
var app = angular.module("compiler",['ngSanitize']);

app.controller('result',  function($scope,$http){
	$scope.output="";
	$scope.run=function() {
		
		var edv=editor.getValue();
		$scope.compilemsg="";
		$scope.runmsg="";
		$scope.output="Compiling....";
		var params={name:{ source:edv,lang: 5,testcases: '["Hello World"]'}};
		
		$http.post('http://localhost:3000/run',JSON.stringify(params)).success(function(res){
			
			$scope.compilemsg=res.compilemsg;
			$scope.runmsg=res.runmsg;
			$scope.output="compilation result : "+$scope.compilemsg+"<br>Output : "+$scope.runmsg;
			
		}).error(function(res){
			$scope.compilemsg="Network error";
			$scope.output=$scope.compilemsg;
		});
		

	}	
	$scope.compile=function() {
		// body...
		var edv=editor.getValue();
	$scope.compilemsg="";
	$scope.output="Compiling....";
	var params={name:{ source:edv,lang: 5,testcases: '["Hello World"]'}};
	$http.post('http://localhost:3000/compile',JSON.stringify(params)).success(function(response){
		console.log(response);
		$scope.compilemsg=response.compilemsg;
		$scope.output="compilation result : "+$scope.compilemsg;

	}).error(function(response){
		
		$scope.compilemsg="Network error";
		$scope.output=$scope.compilemsg;
	});
	
	}

})
