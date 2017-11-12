
var app = angular.module("compiler",['ngSanitize']);

app.controller('result',  function($scope,$http){
	$scope.lanarray=["c","cpp","java","python","perl","php","ruby","csharp","mysql","oracle","haskell","clojure","bash","scala","erlang","lua","javascript","go","d","ocaml","r","pascal","sbcl","python3","groovy","objectivec","fsharp","cobol","visualbasic","lolcode","smalltalk","tcl","whitespace","tsql","java8","db2","octave","xquery","racket","rust","swift","fortran"];
	$scope.output="";
	var lanjson={"c":1,"cpp":2,"java":3,"python":5,"perl":6,"php":7,"ruby":8,"csharp":9,"mysql":10,"oracle":11,"haskell":12,"clojure":13,"bash":14,"scala":15,"erlang":16,"lua":18,"javascript":20,"go":21,"d":22,"ocaml":23,"r":24,"pascal":25,"sbcl":26,"python3":30,"groovy":31,"objectivec":32,"fsharp":33,"cobol":36,"visualbasic":37,"lolcode":38,"smalltalk":39,"tcl":40,"whitespace":41,"tsql":42,"java8":43,"db2":44,"octave":46,"xquery":48,"racket":49,"rust":50,"swift":51,"fortran":54};
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
	var lan=$scope.lang;
	var num=lanjson[lan];
	var params={name:{ source:edv,lang: num,testcases: '["Hello World"]'}};
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
