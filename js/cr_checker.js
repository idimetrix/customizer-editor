(function () {
    /** jQuery
     *
     * @type {Function|*}
     */
    window.cr_jQueryChecker = window.cr_jQueryChecker || cr_Class({
            checked: false,
            loaded: false,
            callback: function () {
            },

            initialize: function (callback) {
                this.callback = callback;

                this.check();
            },
            check: function () {
                var self = this;

                if (typeof(jQuery) == 'undefined') {
                    if (typeof $ == 'function') {

                    }

                    if (!self.checked) {
                        self.checked = true;

                        document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>');
                    }
                    setTimeout(function () {
                        self.check();
                    }, 50);
                } else {
                    self.loaded = true;

                    self.callback.call(jQuery);
                }
            }
        });

    /*
     var jQueryChecker = new cr_jQueryChecker(function () {

     });
     jQueryChecker.check();
     */

    /** Angular
     *
     * @type {Function|*}
     */
    window.cr_AngularChecker = window.cr_AngularChecker || cr_Class({
            checked: false,
            loaded: false,
            callback: function () {
            },

            initialize: function (callback) {
                this.callback = callback;

                this.check();
            },
            check: function () {
                var self = this;

                if (typeof(angular) == 'undefined') {
                    if (!self.checked) {
                        self.checked = true;

                        document.write('<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>');
                    }
                    setTimeout(function () {
                        self.check();
                    }, 50);
                } else {
                    self.loaded = true;

                    self.callback.call(angular);
                }
            }
        });

    /*
     var AngularChecker = new cr_AngularChecker(function () {

     });
     AngularChecker.check();
     */

})();