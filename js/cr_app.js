angular.module('cr_Customify', [
    'ui.bootstrap',

    // ng
    //'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ng-context-menu',
    'ngDragDrop',

    // ui
    'ui.router',
    'ui.bootstrap',
    'ui.sortable',
    //'ui.jq',

    // modules
    'SafeApply',

    // translate
    'pascalprecht.translate',

    // other

    'xeditable',


    'colorpicker.module',

    //'ui.select',

    'validation',
    'validation.rule',

    //'textAngular',

    'angularFileUpload',

    'ngJsTree',

    'jQueryScrollbar',

    'angular-images-loaded',

    'cfp.hotkeys',

    'nsPopover',
    'ngPatternRestrict',
    'ngMap',
    'tseed.eventManager',

    'textAngular',
    'infiniteScroll'
]);

jQuery(function () {
    setTimeout(function () {

        jQuery(".js-example-placeholder-single").select2({
            placeholder: "Select a state",
            allowClear: true
        });


        jQuery('.userPrint').on('click', function () {
            jQuery('.motifs_search').toggle();
            jQuery('.motifs_select').toggle();
            jQuery('.motifs_saveLoadPanel').toggle();
            jQuery('.motifs_content-row').toggle();
            jQuery('.wrap_myPrint').toggle();


        });

        jQuery('.upload_date').on('click', function () {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active');
                jQuery(this).children('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
                jQuery(this).parents('.upload_dateGroup').children('.upload_content-listItem').css({'display': 'none'})
            } else {
                jQuery(this).addClass('active');
                jQuery(this).children('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
                jQuery(this).parents('.upload_dateGroup').children('.upload_content-listItem').css({'display': 'block'})
            }

        });

        jQuery('.center_viewItem').eq(0).addClass('center_active');
        jQuery('.center_viewItem').on('click', function () {
            jQuery('.center_viewItem').removeClass('center_active');
            jQuery(this).addClass('center_active');
        });

        jQuery('.gender li').on('click', function () {
            jQuery('.gender li').removeClass('active');
            jQuery(this).addClass('active');
        });

        jQuery('.toggleBar').on('click', function () {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active');
                jQuery(this).children('span').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
                jQuery('.gTContainer').css({'top': '410px'})
            } else {
                jQuery(this).addClass('active');
                jQuery(this).children('span').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
                jQuery('.gTContainer').css({'top': '35px'})
            }

        });

        $('.loader_wrap').show();

    }, 1000);

    jQuery(".chosen-select-deselect").chosen({
        allow_single_deselect: true
    });
});