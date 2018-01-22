/**
 * page1控制器
 */
mainApp.controller('page1Ctrl', ['$scope','$rootScope','$cookieStore','$http', 'basePath', 'myAlert', function($scope, $rootScope, $cookieStore, $http, basePath, myAlert) {	
	$scope.$emit("tabChanged", 'page1');
	/*通知main控制器判断用户是否登陆*/
	$scope.$emit("login", 'login');

	$scope.config_save = function(){
	 /*保存配置*/
	 //	$http({
	 //        method: 'GET',
	 //        url:basePath+'',
	 //        params: {user_id:userId,pn:1,rn:$scope.size},
	 //        paramSerializer: '$httpParamSerializerJQLike'
	 //    }).success(function (data, status) {
	 //        if(data.code == '000000'){
	 //	 			
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
}]);