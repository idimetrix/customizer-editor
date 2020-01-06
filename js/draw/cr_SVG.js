(function () {

    fabric.cr_SVG = fabric.util.createClass(fabric.Group, {
        type: 'cr_svg',
        initialize: function (url, options) {
            var self = this;

            options = options || {};

            self.callSuper('initialize', [], options);

            fabric.loadSVGFromURL(url, function (obj, opt) {
                var item = fabric.util.groupSVGElements(obj, opt);

                self.addWithUpdate(item);

                self.setCoords();
                self.fire('svg:loaded');
                self.setCoords();
            }, function (item, object) {
                object.set('id', item.getAttribute('id'));
            });

            self.set('url', url);
        },
        clone: function () {
            return this.fromObject(this);
        },
        fromObject: function (object) {
            return new fabric.cr_SVG(object.url, object.toObject());
        },
        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                url: this.get('url')
            });
        },
        _set: function (key, value) {
            this.callSuper('_set', key, value);

            switch (key) {
                case 'url':
                    if (this.image.src != value) {
                        fabric.loadSVGFromURL(url, function (obj, opt) {
                            var item = fabric.util.groupSVGElements(obj, opt);

                            self.addWithUpdate(item);

                            self.setCoords();
                            self.fire('svg:loaded');
                            self.setCoords();
                        }, function (item, object) {
                            object.set('id', item.getAttribute('id'));
                        });
                    }
                    break;
                default :
                    break;
            }
        }
    });

})();