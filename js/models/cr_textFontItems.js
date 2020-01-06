angular.module('cr_Customify').factory('cr_textFontItems', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            title: '',
            url: ''
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);