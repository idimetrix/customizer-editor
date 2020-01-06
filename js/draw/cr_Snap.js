(function () {

    fabric.cr_Snap = fabric.util.createClass(fabric.Line, {
        type: 'cr_snap',
        initialize: function (points, options) {
            var self = this;

            options = options || {};

            self.callSuper('initialize', points, options);
        }
    });

})();