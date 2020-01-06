(function () {

    fabric.cr_BarCode = fabric.util.createClass(fabric.Rect, fabric.Observable, {
        type: 'cr_barcode',
        fill: 'rgba(0, 0, 0, 0)',
        encoder: null,
        binary: null,
        initialize: function (text, options) {
            var self = this;

            options = jQuery.extend({
                lineWidth: 2,
                lineHeight: 100,
                format: 'CODE128',
                colorDark: '#000000',
                colorLight: 'rgba(255, 255, 255, 0)'
            }, options)

            self.barelement = jQuery('<canvas>').appendTo(document.body);

            self.callSuper('initialize', options);
            self.set('text', text);

            self.set('lineWidth', options.lineWidth);
            self.set('lineHeight', options.lineHeight);
            self.set('format', options.format);
            self.set('colorDark', options.colorDark);
            self.set('colorLight', options.colorLight);
        },
        /**
         *
         * @param key
         * @param value
         * @private
         */
        _set: function (key, value) {
            this.callSuper('_set', key, value);

            switch (key) {
                case 'text':
                case 'lineWidth':
                case 'lineHeight':
                case 'format':
                case 'colorDark':
                case 'colorLight':
                    if (this.text) {
                        this.encoder = new window[this.format](this.text);

                        if (this.encoder.valid()) {
                            this.binary = this.encoder.encoded();
                        }

                        this.width = this.binary.length * this.lineWidth;
                        this.height = this.lineHeight;
                    } else {

                    }

                    break;
                default :
                    break;
            }
        },

        /**
         *
         * @param key
         * @returns {*}
         * @private
         */
        _get: function (key) {
            return this.callSuper('_get', key);
        },
        clone: function () {
            return this.fromObject(this);
        },
        fromObject: function (object) {
            return new fabric.cr_BarCode(object.text, object.toObject());
        },
        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                text: this.get('text'),
                lineWidth: this.get('lineWidth'),
                lineHeight: this.get('lineHeight'),
                format: this.get('format'),
                colorDark: this.get('colorDark'),
                colorLight: this.get('colorLight')
            });
        },

        _render: function (ctx) {
            this.callSuper('_render', ctx);

            if (this.text && this.binary && this.binary.length) {
                for (var i = 0; i < this.binary.length; i++) {
                    ctx.beginPath();
                    ctx.rect(i * this.lineWidth - this.width / 2, 0 - this.height / 2, this.lineWidth + 0.5, this.lineHeight + 0.5);
                    ctx.fillStyle = this.binary[i] == "1" ? this.colorDark : this.colorLight;
                    ctx.fill();
                }
            }
        }
    });

})();