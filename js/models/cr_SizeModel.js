angular.module('cr_Customify').factory('cr_SizeModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            size: '',
            length: '',
            width: '',
            count: 0
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);