angular.module('cr_Customify').factory('cr_ProjectModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            id: '',
            title: '',
            description: '',
            products: []
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);