(function () {

    fabric.cr_QRCode = fabric.util.createClass(fabric.Rect, fabric.Observable, {
        type: 'cr_qrcode',
        fill: 'rgba(0, 0, 0, 0)',
        qrcode: null,
        modules: null,
        initialize: function (text, options) {
            var self = this;

            options = jQuery.extend({
                size: 4,
                colorDark: '#000000',
                colorLight: 'rgba(255, 255, 255, 0)'
            }, options);

            self.qrcode = new QRCode(0, 2, '8BIT_BYTE');
            self.qrcode.dataList = [];
            self.qrcode.addData(text);
            self.qrcode.make();

            self.callSuper('initialize', options);
            self.set('text', text);
            self.set('size', options.size);
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
                case 'size':
                case 'colorDark':
                case 'colorLight':
                    if (this.text) {
                        this.qrcode.dataList = [];
                        this.qrcode.addData(this.text);
                        this.qrcode.make();

                        this.modules = this.qrcode.getModuleCount();

                        this.width = this.size * this.modules;
                        this.height = this.size * this.modules;
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
            return new fabric.cr_QRCode(object.text, object.toObject());
        },
        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                text: this.get('text'),
                colorDark: this.get('colorDark'),
                colorLight: this.get('colorLight')
            });
        },

        _render: function (ctx) {
            this.callSuper('_render', ctx);

            if (this.text && this.modules) {
                for (var row = 0; row < this.modules; row++) {
                    for (var col = 0; col < this.modules; col++) {
                        ctx.beginPath();
                        ctx.rect(row * this.size - this.width / 2, col * this.size - this.height / 2, this.size + 0.5, this.size + 0.5);
                        ctx.fillStyle = this.qrcode.isDark(row, col) ? this.colorDark : this.colorLight;
                        ctx.fill();
                    }
                }
            }
        }
    });

})();