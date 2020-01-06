angular.module('cr_Customify').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/app/home");

    $stateProvider
        // App
        .state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'tpl/app.html'
        })
        .state('app.home', {
            url: '/home',
            templateUrl: 'tpl/home.html',
            controller: 'cr_HomeCtrl as ctrl'
        })

        // Access
        .state('access', {
            url: '/access',
            abstract: true,
            templateUrl: 'tpl/access.html'
        })
        .state('access.lockme', {
            url: '/lockme',
            templateUrl: 'tpl/access/lockme.html',
            controller: 'cr_LockMeCtrl as ctrl'
        })
        .state('access.signin', {
            url: '/signin',
            templateUrl: 'tpl/access/signin.html',
            controller: 'cr_SigninCtrl as ctrl'
        })
        .state('access.signup', {
            url: '/signup',
            templateUrl: 'tpl/access/signup.html',
            controller: 'cr_SignupCtrl as ctrl'
        })
        .state('access.forgotpwd', {
            url: '/forgotpwd',
            templateUrl: 'tpl/access/forgotpwd.html',
            controller: 'cr_ForgotPwdCtrl as ctrl'
        })
        .state('access.404', {
            url: '/404',
            templateUrl: 'tpl/access/404.html'
        })
}]);