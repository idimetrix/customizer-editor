(function () {
    var cr_DetailDialog = function ($scope, $modalInstance, parameters, cr_DataFactory, $timeout) {
        var self = this;

        // ---

        self.modal_title = parameters.title || '';
        self.modal_description = parameters.description || '';

        self.message = [];
        self.errors = [];
        self.loading = false;
        // ---

        $scope.product = cr_DataFactory.product;

        $scope.main_people = $scope.product.detail_product_img[0].name;

        // ---

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

        self.namePick = function (name, size) {
            jQuery('.main_character').html('<span class="name">' + name + '</span> <span class="small">' + size + '</span>');
        };

        self.showMenuList = function (menuList) {
            jQuery('.' + menuList).toggle();
        };

        $scope.preview = $scope.product.detail_product_img[0].photo[0].image;

        self.getImageByNameAndSize = function (name, size) {
            var url = null;

            $scope.product.detail_product_img.forEach(function (object) {
                if (object.name == name) {
                    object.photo.forEach(function (photo) {
                        if (photo.size == size) {
                            url = photo.image;
                            return;
                        }
                    });
                }

                if (url) {
                    return;
                }
            });
            $scope.preview = url;
        };

        self.selectPeople = function (name) {
            $scope.main_people = name;
            self.getImageByNameAndSize(name, $scope.main_size)
        };


        self.selectSize = function (size) {
            $scope.main_size = size;
        };

        self.reload_fotorama = function () {
            $timeout(function () {
                jQuery('.fotorama').fotorama({
                    data: [
                        {img: './img/000001/detail/galery/001.jpg', thumb: './img/000001/detail/galery/001.jpg'},
                        {img: './img/000001/detail/galery/002.jpg', thumb: './img/000001/detail/galery/002.jpg'},
                        {img: './img/000001/detail/galery/003jpg', thumb: './img/000001/detail/galery/003.jpg'},
                        {img: './img/000001/detail/galery/004jpg', thumb: './img/000001/detail/galery/004.jpg'},
                        {img: './img/000001/detail/galery/005.jpg', thumb: './img/000001/detail/galery/005.jpg'}
                    ]
                });
            }, 100);
        };

        $timeout(function () {
            jQuery('.fotorama').fotorama({
                data: [
                    {img: './img/000001/detail/galery/001.jpg', thumb: './img/000001/detail/galery/001.jpg'},
                    {img: './img/000001/detail/galery/002.jpg', thumb: './img/000001/detail/galery/002.jpg'},
                    {img: './img/000001/detail/galery/003jpg', thumb: './img/000001/detail/galery/003.jpg'},
                    {img: './img/000001/detail/galery/004jpg', thumb: './img/000001/detail/galery/004.jpg'},
                    {img: './img/000001/detail/galery/005.jpg', thumb: './img/000001/detail/galery/005.jpg'}
                ]
            });
        }, 100);


        return self;
    };

    // ---

    cr_DetailDialog.$inject = [
        '$scope',
        '$modalInstance',
        'parameters',
        'cr_DataFactory',
        '$timeout'
    ];

    angular.module('cr_Customify').controller('cr_DetailDialog', cr_DetailDialog);
})();
