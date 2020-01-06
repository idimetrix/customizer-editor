var resizedTimer = null;
var resized = false;

var text = 'IDCreator';

var productImage = null;
var productText = new fabric.IText(text, {
    fontFamily: 'Ubuntu',
    angle: 0,
    fontSize: 70,
    fill: '#000000',
    fontWeight: '',
    originX: 'left',
    hasRotatingPoint: true,
    centerTransform: true
});
var productSvg = null;

// ---

// http://all-free-download.com/free-vector/

fabric.Image.fromURL(cr_URLManager.application + '/img/tshirt.jpg', function (img) {
    productImage = img;

    productImage.selectable = false;

    cr_DrawFactory.fabric.add(productImage);
    cr_DrawFactory.fabric.centerObject(productImage);

    cr_DrawFactory.fabric.add(productText);
    cr_DrawFactory.fabric.centerObject(productText);

    fabric.loadSVGFromURL(cr_URLManager.application + '/img/svg/christmas_mhl17.svg', function (objects, options) {
        productSvg = fabric.util.groupSVGElements(objects, options);
        productSvg.scaleX = 0.5;
        productSvg.scaleY = 0.5;

        cr_DrawFactory.fabric.add(productSvg);

        cr_DrawFactory.fabric.centerObject(productSvg);

        productSvg.top += 50;

        productSvg.setCoords();

        cr_DrawFactory.fabric.renderAll();
    }, function (item, object) {
        object.set('id', item.getAttribute('id'));
    });

    productText.top -= 100;

    productImage.setCoords();
    productText.setCoords();

    cr_DrawFactory.fabric.renderAll();
});


// ---

$scope.$on('resize', function (event, w, h) {
    if (productImage && productSvg && !resized) {
        clearTimeout(resizedTimer);
        resizedTimer = setTimeout(function () {
            resized = true;

            cr_DrawFactory.fabric.centerObject(productImage);
            cr_DrawFactory.fabric.centerObject(productText);
            cr_DrawFactory.fabric.centerObject(productSvg);

            productText.top -= 100;
            productSvg.top += 50;

            productImage.setCoords();
            productText.setCoords();
            productSvg.setCoords();

            cr_DrawFactory.fabric.renderAll();
        }, 500);
    }
});