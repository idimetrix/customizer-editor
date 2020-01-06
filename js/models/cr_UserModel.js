angular.module('cr_Customify').factory('cr_UserModel', ['cr_BaseModel', function (BaseModel) {
    return function (data) {
        var model = {
            id: '',
            title: '',
            description: '',
            firstName: '',
            lastName: '',
            count: '',
            image: ''
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);