(function () {
    var cr_AccessCtrl = function ($scope, $translate, $localStorage, $window) {
        var ctrl = this;

        return ctrl;
    };

    // ---

    cr_AccessCtrl.$inject = [
        '$scope',
        '$translate',
        '$localStorage',
        '$window'
    ];

    angular.module('cr_Customify').controller('cr_AccessCtrl', cr_AccessCtrl);
})();
