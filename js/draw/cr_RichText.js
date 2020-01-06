(function () {

    fabric.cr_RichText = fabric.util.createClass(fabric.IText, {
        type: 'cr_rich_text',
        initialize: function (text, options) {
            var self = this;

            options = options || {};

            self.callSuper('initialize', text, options);
        }
    });

})();