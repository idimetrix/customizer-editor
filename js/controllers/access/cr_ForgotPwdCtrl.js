(function () {
    var cr_ForgotPwdCtrl = function ($scope, $state, cr_RequestService, cr_ScreenLockerFactory) {
        var ctrl = this;

        ctrl.user = {
            name: ''
        };

        ctrl.useDescription = true;
        ctrl.useSignin = true;
        ctrl.useSignup = true;

        ctrl.authSuccess = [];
        ctrl.authError = [];

        ctrl.send = function () {
            cr_ScreenLockerFactory.lock();

            ctrl.authSuccess = [];
            ctrl.authError = [];

            /*
             cr_RequestService.forgotpwd($scope.user.email).then(function (result) {
             if (result) {
             $scope.authSuccess = 'Forgot pwd success!';

             $state.go('access.signin');
             } else {
             $scope.authError = 'Forgot pwd error!';
             }

             cr_ScreenLockerFactory.unlock();
             });
             */
        };

        return ctrl;
    };

    // ---

    cr_ForgotPwdCtrl.$inject = [
        '$scope',
        '$state',
        'cr_RequestService',
        'cr_ScreenLockerFactory'
    ];

    angular.module('cr_Customify').controller('cr_ForgotPwdCtrl', cr_ForgotPwdCtrl);
})();
