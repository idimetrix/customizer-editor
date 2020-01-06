(function () {
    var cr_AddBasketDialog = function ($scope, $modalInstance, parameters, cr_DataFactory, cr_DialogsManager, cr_LoginFactory) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        // ---

        $scope.product = cr_DataFactory.product;
        $scope.listItemSize = cr_DataFactory.listItemSize;

        // ---

        self.message = [];
        self.errors = [];
        self.loading = false;

        self.ok = function () {
            $modalInstance.close();
        };

        self.cancel = function () {
            $modalInstance.dismiss();
        };

        self.Basket = function () {
            cr_DialogsManager.create(cr_DialogsManager.type.BASKET, {
                'title': 'Basket',
                'description': ''
            }).then(function (args) {
                console.log('ok', args);
            }, function (args) {
                console.log('CLOSE', args);
            });
        };

        self.add_basket = function () {
            var sizes = [];
            cr_DataFactory.product.sizes.forEach(function (element) {
                sizes.push({"size": element.size, "count": element.count});
            });
            cr_LoginFactory.user.basket.items.push(
                {
                    id: (cr_LoginFactory.user.basket.items).length + 1,
                    title: cr_DataFactory.product.title,
                    mini_img: cr_DataFactory.product.image,
                    sizes: sizes,
                    price: cr_DataFactory.product.price

                }
            );
            cr_LoginFactory.user.basket.items.count = cr_LoginFactory.user.basket.items.length;
            self.Basket();
            self.ok();
        };


        return self;
    };

    // ---

    cr_AddBasketDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DataFactory',
        'cr_DialogsManager',
        'cr_LoginFactory'
    ];

    angular.module('cr_Customify').controller('cr_AddBasketDialog', cr_AddBasketDialog);
})();
