angular.module('cr_Customify').filter('cr_TrimFilter', function () {
    return function (value) {
        if (!value) return '';

        return jQuery.trim(value);
    };
});