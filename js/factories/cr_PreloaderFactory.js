angular.module('cr_Customify').factory('cr_PreloaderFactory', function () {
    return new function Loading() {
        var self = this;

        // ---

        var inUse = false;

        var element = jQuery('.preloader');

        // ---

        self.progress = 0;

        // ---

        self.isLoading = function isLoading() {
            return inUse === true;
        };

        self.show = function show() {
            inUse = true;

            element.fadeIn('fast')
        };

        self.hide = function hide() {
            inUse = false;

            element.fadeOut('fast')
        };
    };
});