(function () {
    var cr_ProductsDialog = function ($scope, $modalInstance, parameters, cr_DataFactory) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        //---

        $scope.product = cr_DataFactory.product;
        $scope.products_library = cr_DataFactory.products_library;

        //---

        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        self.detail_tab = function (tab, allClass) {
            jQuery('.' + allClass).removeClass('active');
            jQuery('.' + tab).addClass('active');
        };

        self.showMenuList = function (menuList) {
            jQuery('.' + menuList).toggle();
        };

        self.zoom_minus = function () {
            var wrap = jQuery('.products_scroll-content').width();
            var size = jQuery('.products_content-item').width();
            var index_minus = Math.round(wrap / size);
            if (index_minus != 8) {
                index_minus++;
                jQuery('.products_content-item').css({
                    'width': wrap / index_minus,
                    'height': wrap / index_minus
                });
            }
            jQuery('.plus').css({'opacity': '1'});
            index_minus == 8 ? jQuery('.minus').css({'opacity': '0.4'}) : '';
        };

        self.zoom_plus = function () {
            var wrap = jQuery('.products_scroll-content').width();
            var size = jQuery('.products_content-item').width();
            var index_plus = Math.round(wrap / size);
            if (index_plus != 4) {
                index_plus--;
                jQuery('.products_content-item').css({
                    'width': wrap / index_plus,
                    'height': wrap / index_plus
                });
            }
            jQuery('.minus').css({'opacity': '1'});
            index_plus == 4 ? jQuery('.plus').css({'opacity': '0.4'}) : '';
        };

        return self;
    };

    // ---

    cr_ProductsDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DataFactory'
    ];

    angular.module('cr_Customify').controller('cr_ProductsDialog', cr_ProductsDialog);
})();
