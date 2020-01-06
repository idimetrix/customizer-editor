(function () {
    if (typeof String.prototype.endsWith !== 'function') {
        String.prototype.endsWith = function (suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }

    if (typeof String.prototype.startsWith !== 'function') {
        String.prototype.startsWith = function (searchString, position) {
            return this.indexOf(searchString, position) === position;
        };
    }

    fabric.cr_Image = fabric.util.createClass(fabric.Rect, fabric.Observable, {
        type: 'cr_image',
        image: null,
        fill: '#ffffff',
        crop: false,
        offsetX: 0,
        offsetY: 0,
        maxWidth: '100%',
        maxHeight: '100%',
        imageWidth: '100%',
        imageHeight: 'auto',
        imageScaleX: 1,
        imageScaleY: 1,
        cropVertical: 'right', // left, center, right
        cropHorizontal: 'bottom', // top, center, bottom
        initialize: function (url, options, image) {
            var self = this;

            options = options || {};

            self.callSuper('initialize', options);

            if (image) {
                self.image = image;
                self.width = self.width || self.image.width;
                self.height = self.height || self.image.height;
                self.loaded = true;
                self.setCoords();
                self.fire('image:loaded');
                self.setCoords();
            } else {
                self.image = new Image();
                self.image.src = url;
                self.image.onload = (function () {
                    self.width = self.width || self.image.width;
                    self.height = self.height || self.image.height;
                    self.loaded = true;
                    self.setCoords();
                    self.fire('image:loaded');
                    self.setCoords();
                });
            }

            //self.set('image', self.image);
            self.set('url', url);
            self.set('crop', self.crop);
            self.set('offsetX', self.offsetX);
            self.set('offsetY', self.offsetY);
            self.set('maxWidth', self.maxWidth);
            self.set('maxHeight', self.maxHeight);
            self.set('imageWidth', self.imageWidth);
            self.set('imageHeight', self.imageHeight);
            self.set('imageScaleX', self.imageScaleX);
            self.set('imageScaleY', self.imageScaleY);
            self.set('cropVertical', self.cropVertical);
            self.set('cropHorizontal', self.cropHorizontal);
        },
        clone: function () {
            return this.fromObject(this);
        },
        fromObject: function (object) {
            console.log('options', object.toObject());

            return new fabric.cr_Image(object.url, object.toObject(), object.image);
        },
        toObject: function () {
            return fabric.util.object.extend(this.callSuper('toObject'), {
                //image: this.get('image'),
                url: this.get('url'),
                crop: this.get('crop'),
                offsetX: this.get('offsetX'),
                offsetY: this.get('offsetY'),
                maxWidth: this.get('maxWidth'),
                maxHeight: this.get('maxHeight'),
                imageWidth: this.get('imageWidth'),
                imageHeight: this.get('imageHeight'),
                imageScaleX: this.get('imageScaleX'),
                imageScaleY: this.get('imageScaleY'),
                cropVertical: this.get('cropVertical'),
                cropHorizontal: this.get('cropHorizontal')
            });
        },
        _set: function (key, value) {
            this.callSuper('_set', key, value);

            switch (key) {
                case 'url':
                    if (this.image && this.image.src != value) {
                        this.image.src = value;
                    }
                    break;
                default :
                    break;
            }
        },
        _render: function (ctx) {
            this.callSuper('_render', ctx);

            if (this.loaded) {
                if (this.crop) {
                    var sx = 0;
                    var sy = 0;

                    var imageWidth = null;
                    var imageHeight = null;

                    var k = this.image.width / this.image.height;

                    if (this.imageWidth == 'auto') {
                        imageWidth = this.image.width * this.imageScaleX;
                    } else if ((this.imageWidth + '').endsWith('%')) {
                        imageWidth = imageWidth * (parseFloat(this.imageWidth) / 100) * this.imageScaleX;
                    } else {
                        imageWidth = this.imageWidth * this.imageScaleX;
                    }

                    if (this.imageHeight == 'auto') {
                        imageHeight = this.image.height * this.imageScaleY;
                    } else if ((this.imageHeight + '').endsWith('%')) {
                        imageHeight = imageHeight * (parseFloat(this.imageHeight) / 100) * this.imageScaleY;
                    } else {
                        imageHeight = this.imageHeight * this.imageScaleY;
                    }

                    var cropX = 0;
                    var cropY = 0;

                    var cropWidth = 100;
                    var cropHeight = 100;

                    switch (this.cropVertical) {
                        case 'left':
                            break;
                        case 'center':
                            sx = (this.image.width - this.width) / 2;
                            break;
                        case 'right':
                            sx = this.image.width - this.width;
                            break;
                    }

                    switch (this.cropHorizontal) {
                        case 'top':
                            break;
                        case 'center':
                            sy = (this.image.height - this.height) / 2;
                            break;
                        case 'bottom':
                            sy = this.image.height - this.height;
                            break;
                    }

                    ctx.drawImage(this.image, cropX, cropY, cropWidth, cropHeight, -this.width / 2, -this.height / 2, this.width, this.height);
                } else {
                    ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
                }
            }
        }
    });
})();

