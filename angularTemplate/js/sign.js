'use strict';

var signApp = angular.module('signApp', [
    'ngRoute',
    'angular-md5',
    'ngCookies'
])
.constant('basePath', '/api/')
.factory('signAlert', function () {
    return function (text) {
        if (text) {
            $('.sign-alert').html(text);
        }
        else {
            $('.sign-alert').html('');
        }
    };
})
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/in', {
            templateUrl: '../view/signin.html',
            controller: 'signinCtrl'
        }).when('/up', {
            templateUrl: '../view/signup.html',
            controller: 'signupCtrl'
        })
        .otherwise({redirectTo: '/in'});
}]);