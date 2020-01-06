angular.module('cr_Customify').factory('cr_db_FontpicModel', ['cr_BaseModel', function (cr_BaseModel) {
    return function (data) {
        var model = {
            id: '',
            name: '',
            linespacing: '',
            letterspacing: '',
            url: '',
            letters: '',
            type: '',
            data: '',
            created_at: '',
            updated_at: '',
            active: ''
        };

        model = angular.extend(new cr_BaseModel(), model, data || {});
        model.clone = function () {
            return angular.copy(model);
        };

        return model;
    };
}]);