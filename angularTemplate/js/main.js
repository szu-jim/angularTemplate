var mainApp = angular.module('mainApp', [
        'ngRoute',
        'ngCookies'
])
.constant('basePath', '/api/')
.factory('myAlert', function () {
    return function (type, text) {
        // type = success info warning danger
        var allClass = ['alert-success', 'alert-info', 'alert-warning', 'alert-danger'];
        var alertEle = $('#main-alert');
        var className = 'alert-' + type;
        if(type=='danger'){
        	 alert(text);  
        }
        allClass.forEach(function (item) {
            // if (alertEle.hasClass(item)) {
            // }
            alertEle.removeClass(item);
        });
        alertEle.find('.content-text').html(text);
        alertEle.addClass(className);
        alertEle.fadeIn();
        setInterval(function () {
            alertEle.fadeOut();
            alertEle.addClass(className);
        }, 10000);
    };
})
.config(['$routeProvider','$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '../view/home.html',
        controller: 'homeCtrl'
    })
    .when('/page1', {
    	templateUrl: '../view/page1.html',
        controller: 'page1Ctrl'
    }).when('/page2', {
    	templateUrl: '../view/page2.html',
        controller: 'page2Ctrl'
    }).when('/page3', {
    	templateUrl: '../view/page3.html',
        controller: 'page3Ctrl'
    }).otherwise({redirectTo: '/'});
     

    /*$http模块POST请求request payload转form data,解决PHP中获取不到request payload请求的参数问题*/
    $httpProvider.defaults.transformRequest = function(obj){  
        var str = [];  
        for(var p in obj){  
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
        }  
        return str.join("&");  
     }  
     
     $httpProvider.defaults.headers.post = {  
          'Content-Type': 'application/x-www-form-urlencoded'  
     } 


}])
.directive('pageSelect', function () {
    return {
        restrict: 'E',
        template: '<input type="text" class="select-page" ng-model="inputPage" ng-change="selectPage(inputPage)">',
        link: function (scope, element, attrs) {
            scope.$watch('currentPage', function (c) {
                scope.inputPage = c;
            });
        }
    };
})
.directive('contenteditable',function (){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl){
            // 阻止输出log
            wangEditor.config.printLog = false;
            //创建编辑器
            var editor = new wangEditor('editor-trigger');
            // 插入代码时的默认语言
            editor.config.codeDefaultLang = 'json';
            editor.config.menuFixed = false;
            // 普通的自定义菜单
            editor.config.menus =     [
                'source',
                '|',
                'bold',
                'underline',
                'italic',
                'strikethrough',
                'eraser',
                'forecolor',
                'bgcolor',
                '|',
                'quote',
                'fontfamily',
                'fontsize',
                'head',
                'unorderlist',
                'orderlist',
                'alignleft',
                'aligncenter',
                'alignright',
                '|',
                'link',
                'unlink',
                'table',
                'emotion',
                '|',
                'img',
                'video',
                'insertcode',
                '|',
                'undo',
                'redo',
                'fullscreen'
            ];
            editor.create();
            scope.editor = editor;
        }
    };
})
.directive('onFinishRenderFilters', function ($timeout) {
	/*使用该指令可以在循环执行完成之后执行代码，相当于一个后置处理器，这里用于解决接口列表页面显示JSON格式问题*/
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
})
.controller('mainCtrl', ['$scope', '$http', 'basePath','$cookieStore',function($scope,$http, basePath,$cookieStore) {
    /*标题栏切换背景选择*/
	$scope.$on("tabChanged",function (event, msg) {
        $scope.curTab = msg;
    });
    
    /*判断是否登陆，由其他控制器中调用$scope.$emit("login", 'login')通知*/
    $scope.$on("login",function (event, msg) {        
        if(typeof($scope.userId)=='undefined'||$scope.userId==null||$scope.userId==""){
        	location.href = 'sign.html#/in';
        }
    });
    
    
    var userId =  $cookieStore.get("userId");
    
    if(typeof(userId)=='undefined'||userId==null||userId==""){
    	location.href = 'sign.html#/in';
    }else{
    	$scope.userId=userId;
    }
    
    $scope.loginout = function(){
    	$cookieStore.put('userId',"");
    	location.href = 'sign.html#/in';
    }
    
}]);
