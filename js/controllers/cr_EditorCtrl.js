(function () {
    var cr_EditorCtrl = function ($rootScope, $scope, $timeout, $element, cr_RequestService, $state) {
        $scope.init = function () {

        };

        // ---

        /*
        var key = 'testkey';

        cr_RequestService.user(key).then(function (data) {
        }, function (data) {
            $state.go('access.signin');
        });
        */

    };

    // ---

    cr_EditorCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_RequestService',
        '$state'
    ];

    angular.module('cr_Customify').controller('cr_EditorCtrl', cr_EditorCtrl);
})();

