(function () {
    var cr_LayersCtrl = function ($rootScope, $scope, $timeout, $element, cr_URLManager, cr_UtilsManager, cr_CommandsManager) {
        $scope.sortableOptions = {
            axis: 'y',
            containment: 'parent',
            start: function (e, ui) {

            },
            stop: function (e, ui) {

            },
            update: function (e, ui) {
                //console.log('arguments', arguments, ui.item.sortable.model);
            }
        };

        $scope.layerClick = function (object) {

        };

        $scope.visibleClick = function (object) {

        };

        $scope.lockClick = function (object) {

        };


    };

    // ---

    cr_LayersCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$timeout',
        '$element',
        'cr_URLManager',
        'cr_UtilsManager',
        'cr_CommandsManager'
    ];

    angular.module('cr_Customify').controller('cr_LayersCtrl', cr_LayersCtrl);
})();

