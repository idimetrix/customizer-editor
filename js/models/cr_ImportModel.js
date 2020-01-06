angular.module('cr_Customify').factory('cr_ImportModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            id: '',
            title: '',
            description: '',
            price: '',
            count: '',
            currency_symbol: '',
            image: '',
            gender: [],
            colors: [],
            sizes: [
                {width: '', length: '', weight: '', size: '', count: 0}
            ],
            material: '',
            category: '',
            brand: '',
            preview_img: {
                front: '',
                back: '',
                right: '',
                left: ''
            }
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);