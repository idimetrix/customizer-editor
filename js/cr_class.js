(function () {
    /**
     *
     * @type {Function|*}
     */
    window.cr_Class = window.cr_Class || function () {
            var parent;
            var methods;

            var constructor = function () {
                this.initialize.apply(this, arguments);
            };

            var extend = function (destination, source) {
                for (var property in source) {
                    destination[property] = source[property];
                }

                return destination;
            };

            if (typeof arguments[0] === 'function') {
                parent = arguments[0];
                methods = arguments[1];
            } else {
                methods = arguments[0];
            }

            if (parent !== undefined) {
                extend(constructor.prototype, parent.prototype);
                constructor.prototype.$parent = parent.prototype;
            }

            extend(constructor.prototype, methods);
            constructor.prototype.constructor = constructor;

            if (!constructor.prototype.initialize) constructor.prototype.initialize = function () {
            };

            return constructor;
        };
})();