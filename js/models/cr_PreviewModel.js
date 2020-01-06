angular.module('cr_Customify').factory('cr_PreviewModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            url: ''
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);