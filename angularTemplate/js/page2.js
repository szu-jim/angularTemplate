/**
 * page2控制器
 */
mainApp.controller('page2Ctrl', ['$scope','$rootScope','$cookieStore','$http','$location', 'basePath', function($scope,$rootScope,  $cookieStore, $http, $location, basePath) {	
	$scope.$emit("tabChanged", 'page2');
	/*通知main控制器判断用户是否登陆*/
	$scope.$emit("login", 'login');
	
	/*获取cookie中保存的userId,然后在当前页面作用域设置userId*/
	var userId =  $cookieStore.get("userId");
	$scope.userId=userId;
	//获取url内的参数
	$scope.proId=$location.search()["proId"];


	//测试数据
	$scope.dateList = [{date_val:'2017-12-06',date_id:2}, {date_val:'2017-12-05',date_id:1}];
	$scope.pageList = [1];

	/*页码大小*/
	$scope.size=10;
	init();

	/*初始化页面*/
	function init(){
		/*从服务器端获取当前的用户*/
		/*初始化获取产品列表*/
		// $http({
	 //        method: 'GET',
	 //        url:basePath+'',
	 //        params: {user_id:userId,pn:1,rn:$scope.size},
	 //        paramSerializer: '$httpParamSerializerJQLike'
	 //    }).success(function (data, status) {
	 //        if(data.code == '000000'){
	 //        	$scope.productList = data.data;
	 //        	$scope.pageList = new Array();
	 //        	$scope.pageNumber=1;
	 //        	$scope.pageSize = data.page;
	 //        	if($scope.pageSize>=5){
	 //        		for(var i=0;i<5;i++){
		//         		$scope.pageList.push(i+1);
		//         	}
	 //        	}else{
	 //        		for(var i=0;i<$scope.pageSize;i++){
		//         		$scope.pageList.push(i+1);
		//         	}
	 //        	}
	        	
	 //        }else{
	 //        	alert("系统异常");
	 //        }
	        
	 //    }).error(function (data, status) {
	 //    });
	}

	//实现分页
	$scope.prev = function(){
		if($scope.pageNumber<=1){
			return;
		}
		var pageNumber = $scope.pageNumber-1;
		$http({
	        method: 'GET',
	        url:basePath+'web/index.php?r=site/getprolist',
	        params: {user_id:userId,pn:pageNumber,rn:$scope.size},
	        paramSerializer: '$httpParamSerializerJQLike'
	    }).success(function (data, status) {
	        if(data.code == '000000'){
	        	$scope.productList = data.data;
	        	$scope.pageNumber = pageNumber;
	        	var size = data.page;
	        	$scope.pageSize = size;
	        	var length = pageNumber+5;
	        	$scope.pageList = new Array();
	        	if(size-pageNumber>=5){
	        		for(var i=pageNumber;i<length;i++){
	        			$scope.pageList.push(i);
	        		}
	        	}else{
	        		size=size+1;
	        		for(var i=pageNumber;i<size;i++){
	        			$scope.pageList.push(i);
	        		}
	        	}
	        }else{
	        	alert("系统异常");
	        }
	        
	    }).error(function (data, status) {
	    });
	}

	$scope.next = function(){
		var pageNumber = $scope.pageNumber+1;
		if($scope.pageNumber>=$scope.pageSize){
			return;
		}
		$http({
	        method: 'GET',
	        url:basePath+'web/index.php?r=site/getprolist',
	        params: {user_id:userId,pn:pageNumber,rn:$scope.size},
	        paramSerializer: '$httpParamSerializerJQLike'
	    }).success(function (data, status) {
	        if(data.code == '000000'){
	        	$scope.productList = data.data;
	        	$scope.pageNumber = pageNumber;
	        	var size = data.page;
	        	$scope.pageSize = size;
	        	var length = pageNumber+5;
	        	$scope.pageList = new Array();
	        	if(size-pageNumber>=5){
	        		for(var i=pageNumber;i<length;i++){
	        			$scope.pageList.push(i);
	        		}
	        	}else{
	        		size=size+1;
	        		for(var i=pageNumber;i<size;i++){
	        			$scope.pageList.push(i);
	        		}
	        	}
	        }else{
	        	alert("系统异常");
	        }
	        
	    }).error(function (data, status) {
	    });
	}	

	$scope.page = function(pageNumber){
		$scope.pageNumber=pageNumber;
		$http({
	        method: 'GET',
	        url:basePath+'web/index.php?r=site/getprolist',
	        params: {user_id:userId,pn:pageNumber,rn:$scope.size},
	        paramSerializer: '$httpParamSerializerJQLike'
	    }).success(function (data, status) {
	        if(data.code == '000000'){
	        	$scope.productList = data.data;
	        	$scope.pageNumber = pageNumber;
	        	var size = data.page;
	        	$scope.pageSize = size;
	        	var length = pageNumber+5;
	        	$scope.pageList = new Array();
	        	if(size-pageNumber>=5){
	        		for(var i=pageNumber;i<length;i++){
	        			$scope.pageList.push(i);
	        		}
	        	}else{
	        		size=size+1;
	        		for(var i=pageNumber;i<size;i++){
	        			$scope.pageList.push(i);
	        		}
	        	}
	        }else{
	        	alert("系统异常");
	        }
	        
	    }).error(function (data, status) {
	    });
	}
}]);