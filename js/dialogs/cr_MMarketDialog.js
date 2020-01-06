(function () {
    var cr_MMarketDialog = function ($scope, $modalInstance, parameters, cr_DataFactory) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        $scope.market_items = cr_DataFactory.market_items;

        self.ok = function () {
            $modalInstance.close();
        };

        self.detail_tab = function (tab, allClass) {
            jQuery('.' + allClass).removeClass('active');
            jQuery('.' + tab).addClass('active');
        };

        self.showMenuList = function (menuList) {
            jQuery('.' + menuList).toggle();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };
        setTimeout(function () {
            $("#side-menu").metisMenu();
        }, 100);

        return self;
    };

    // ---

    cr_MMarketDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DataFactory'
    ];

    angular.module('cr_Customify').controller('cr_MMarketDialog', cr_MMarketDialog);
})();
