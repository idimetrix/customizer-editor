angular.module('cr_Customify')
    .factory('cr_ScrollbarFactory', ['$rootScope', function ($rootScope) {
        var self = this;


        /**
         * http://gromo.github.io/jquery.scrollbar/
         *
         * @type {{autoScrollSize: boolean, autoUpdate: boolean, disableBodyScroll: boolean, duration: number, ignoreMobile: boolean, ignoreOverlay: boolean, scrollStep: number, showArrows: boolean, stepScrolling: boolean, scrollx: string, scrolly: string, onDestroy: "onDestroy", onInit: "onInit", onScroll: "onScroll", onUpdate: "onUpdate"}}
         */
        self.options = {
            autoScrollSize: true,
            autoUpdate: true,
            disableBodyScroll: true,
            duration: 200,
            ignoreMobile: false,
            ignoreOverlay: false,
            scrollStep: 50,
            showArrows: false,
            stepScrolling: true,
            scrollx: 'simple',
            scrolly: 'simple',
            "onDestroy": function () {

            },
            "onInit": function () {

            },
            "onScroll": function (y, x) {
                if (y.scroll == y.maxScroll) {

                }
            },
            "onUpdate": function () {

            }
        };

        return self;
    }]);