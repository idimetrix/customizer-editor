(function () {
    var cr_BasketDialog = function ($scope, $modalInstance, parameters, cr_DialogsManager) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;

        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        self.Checkout = function () {

        };

        self.CreditCard = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.CREDIT, {
                'title': 'Credit',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        self.showMenuList = function (menuList, index) {
            jQuery('.' + menuList).toggle();
        };

        self.show_size_info = function (el) {
            console.log(jQuery(el.currentTarget).parents('.basket_tab_content-item').position())
            jQuery(el.currentTarget).parents('.basket_tab_content-item').find('.sizeAmount_hover').css({'top': jQuery(el.currentTarget).parents('.basket_tab_content-item').position().top + 130});
        };

        return self;
    };

    // ---

    cr_BasketDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DialogsManager'
    ];

    angular.module('cr_Customify').controller('cr_BasketDialog', cr_BasketDialog);
})();
