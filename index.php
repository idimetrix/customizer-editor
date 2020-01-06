<!DOCTYPE html>
<html data-ng-app="cr_Customify" data-ng-controller="cr_AppCtrl">
<head>
    <base href="/">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf_token" content="">
    <meta name="version" content="">
    <meta name="description" content=""/>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <title>@yield('appTitle')</title>

    <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,400italic,500,500italic,300italic,300,700,700italic'
          rel='stylesheet' type='text/css'>

    <!-- Vendor -->

    <link rel="stylesheet" href="vendor/jquery-ui-layout/source/stable/layout-default.css">
    <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="vendor/select2/dist/css/select2.min.css">
    <link rel="stylesheet" href="vendor/angular-bootstrap-colorpicker/css/colorpicker.min.css">
    <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.css">
    <link rel="stylesheet" href="vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css">
    <link rel="stylesheet" href="vendor/jstree/dist/themes/default/style.min.css">
    <link rel="stylesheet" href="vendor/jquery.scrollbar/jquery.scrollbar.css">
    <link rel="stylesheet" href="vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css">
    <link rel="stylesheet" href="vendor/chosen/chosen.min.css">
    <link rel="stylesheet" href="vendor/angular-xeditable/dist/css/xeditable.css">
    <link rel="stylesheet" href="vendor/jquery-minicolors/jquery.minicolors.css">
    <link rel="stylesheet" href="vendor/AngularJS-Toaster/toaster.min.css">
    <link rel="stylesheet" href="vendor/fotorama/fotorama.css">
    <link rel="stylesheet" href="vendor/bootstrap-social/bootstrap-social.css">
    <link rel="stylesheet" href="vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css">
    <link rel="stylesheet" href="vendor/metisMenu/dist/metisMenu.min.css">
    <link rel="stylesheet" href="vendor/css-spinners/css/spinners.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.10.4/themes/flick/jquery-ui.css">
    <!--!!! -->
    <link rel="stylesheet" href="vendor/jquery-ui-slider-pips/dist/jquery-ui-slider-pips.css">
    <link rel="stylesheet" href="vendor/textAngular/src/textAngular.css">
    <link rel="stylesheet" href="vendor/bootstrapvalidator/dist/css/bootstrapValidator.css">
    <link rel="stylesheet" href="vendor/cropper/dist/cropper.css">


    <!-- build:remove -->

    <!-- App -->
    <link rel="stylesheet" href="css/app.css?v=<?php // echo env('APP_VERSION'); ?>">
    <link rel="stylesheet" href="css/cr_animate.css?v=<?php // echo env('APP_VERSION'); ?>">
    <link rel="stylesheet" href="css/cr_helpers.css?v=<?php // echo env('APP_VERSION'); ?>">
    <link rel="stylesheet" href="css/cr_app.css?v=<?php // echo env('APP_VERSION'); ?>">

    <!-- /build -->

    <!-- build:style all -->
    <!-- /build -->
</head>
<body data-ng-controller="cr_EditorCtrl">

<div class="loader_wrap" ng-show="cr_LoaderFactory.loaderall">
    <div class="loader"></div>
    <div class="loader-content">
        <div class="dots-loader">
            Loading…
        </div>
    </div>
</div>

<div class="preloader">
    <div class="preloader_progress">
        <div class="preloader_progress_widget" data-ng-style="{width: cr_PreloaderFactory.progress + '%'}">

        </div>
        <div class="preloader_progress_title">Creator loading : <span
                data-ng-bind-html="cr_PreloaderFactory.progress">0</span> %
        </div>
    </div>
    <div class="preloader_content">

    </div>
    <div class="preloader_loader">

    </div>
</div>

<div class="app full-absolute" id="app" ui-view></div>

<!-- Contexts -->
<div ng-include="'tpl/contexts/layout-context.html'"></div>
<div ng-include="'tpl/contexts/workarea-context.html'"></div>
<div ng-include="'tpl/contexts/tree-context.html'"></div>

<!-- Popovers -->
<script type="text/ng-template" id="image-popover">
    <div class="triangle"></div>
    <div class="ns-popover-tooltip">
        <div style="width: 100px; height: 100px;">
            <img ng-src={{cr_PopoverFactory.data.url}} style="max-width: 100px; max-height: 100px;">
        </div>
    </div>
</script>

<!-- Accordion -->

<script type="text/ng-template" id="accordion.html">
    <div class="panel-group" ng-transclude></div>
</script>

<script type="text/ng-template" id="accordion-group.html">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4 class="panel-title">
                <a class="accordion-toggle" ng-click="toggleOpen()" ca-accordion-transclude="heading"><span
                        ng-class="{'text-muted': isDisabled}">{{heading}}</span></a>
            </h4>
        </div>
        <div class="panel-collapse" collapse="!isOpen">
            <div class="panel-body" ng-style="styles" ng-transclude></div>
        </div>
    </div>
</script>

<!-- Vendor -->

<script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="vendor/jquery-ui/jquery-ui.min.js"></script>
<script src="vendor/jquery-mousewheel/jquery.mousewheel.min.js"></script>
<script src="vendor/jquery-ui-layout/source/stable/jquery.layout_and_plugins.js"></script>
<script src="vendor/jstree/dist/jstree.min.js"></script>
<script src="vendor/jq-fullscreen/release/jquery.fullscreen.min.js"></script>
<script src="vendor/select2/dist/js/select2.full.min.js"></script>
<script src="vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
<script src="vendor/chosen/chosen.jquery.min.js"></script>
<script src="vendor/angular/angular.min.js"></script>
<script src="vendor/angular-xeditable/dist/js/xeditable.min.js"></script>
<script src="vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="vendor/angular-bootstrap/ui-bootstrap.min.js"></script>
<script src="vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script src="vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js"></script>
<script src="vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
<script src="vendor/angular-images-loaded/angular-images-loaded.js"></script>
<script src="vendor/jquery.scrollbar/jquery.scrollbar.js"></script>
<script src="vendor/fabric/dist/fabric.js"></script>
<script src="vendor/angular-file-upload/dist/angular-file-upload.min.js"></script>
<script src="vendor/angular-translate/angular-translate.min.js"></script>
<script src="vendor/angular-translate-storage-local/angular-translate-storage-local.min.js"></script>
<script src="vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js"></script>
<script src="vendor/angular-translate-loader-partial/angular-translate-loader-partial.min.js"></script>
<script src="vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js"></script>
<script
    src="vendor/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.min.js"></script>
<script src="vendor/angular-translate-loader-url/angular-translate-loader-url.min.js"></script>
<script src="vendor/angular-translate-handler-log/angular-translate-handler-log.min.js"></script>
<script src="vendor/angular-cookies/angular-cookies.min.js"></script>
<script src="vendor/angular-animate/angular-animate.min.js"></script>
<script src="vendor/ngstorage/ngStorage.min.js"></script>
<script src="vendor/angular-resource/angular-resource.min.js"></script>
<script src="vendor/angular-sanitize/angular-sanitize.min.js"></script>
<script src="vendor/angular-touch/angular-touch.min.js"></script>
<script src="vendor/ng-context-menu/dist/ng-context-menu.min.js"></script>
<script src="vendor/angular-dragdrop/src/angular-dragdrop.min.js"></script>
<script src="vendor/angular-ui-router/release/angular-ui-router.js"></script>
<script src="vendor/angular-ui-sortable/sortable.min.js"></script>
<script src="vendor/angular-validation/dist/angular-validation.min.js"></script>
<script src="vendor/angular-validation/dist/angular-validation-rule.min.js"></script>
<script src="vendor/ng-js-tree/dist/ngJsTree.min.js"></script>
<script src="vendor/jquery-minicolors/jquery.minicolors.js"></script>
<script src="vendor/AngularJS-Toaster/toaster.min.js"></script>
<script src="vendor/nsPopover/src/nsPopover.js"></script>
<script src="vendor/fotorama/fotorama.js"></script>
<script src="vendor/qrcode/lib/qrcode.js"></script>
<script src="vendor/jsbarcode/CODE128.js"></script>
<script src="vendor/jsbarcode/EAN_UPC.js"></script>
<script src="vendor/jsbarcode/ITF.js"></script>
<script src="vendor/jsbarcode/ITF14.js"></script>
<script src="vendor/jsbarcode/CODE39.js"></script>
<script src="vendor/jsbarcode/pharmacode.js"></script>
<script src="vendor/ng-pattern-restrict/src/ng-pattern-restrict.min.js"></script>
<script src="vendor/angular-hotkeys/build/hotkeys.min.js"></script>
<script src="vendor/canvas-toBlob.js/canvas-toBlob.js"></script>
<script src="vendor/FileSaver/FileSaver.min.js"></script>
<script src="vendor/jspdf/dist/jspdf.min.js"></script>
<script src="vendor/metisMenu/dist/metisMenu.min.js"></script>
<script src="vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js"></script>
<script src="vendor/jquery-ui-slider-pips/dist/jquery-ui-slider-pips.js"></script>
<script src="//maps.google.com/maps/api/js"></script>
<!-- !!! -->
<script src="vendor/ngmap/build/scripts/ng-map.min.js"></script>
<script src="vendor/tseed-angular-event-manager/dist/eventManager.min.js"></script>
<script src="vendor/textAngular/dist/textAngular-sanitize.min.js"></script>
<script src="vendor/textAngular/dist/textAngular-rangy.min.js"></script>
<script src="vendor/textAngular/dist/textAngular.min.js"></script>
<script src="vendor/bootstrapvalidator/dist/js/bootstrapValidator.js"></script>
<script src="vendor/underscore/underscore-min.js"></script>
<script src="vendor/caman/dist/caman.full.min.js"></script>
<script src="vendor/cropper/dist/cropper.js"></script>


<!-- App -->

<script src="js/cr_app.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- draw -->
<script src="js/draw/cr_Image.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_SVG.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_QRCode.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_BarCode.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_Snap.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_RichText.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_Star.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_Polygon.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<script src="js/draw/cr_CurveText.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/draw/cr_BridgeText.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- utils -->
<script src="js/cr_class.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/cr_checker.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/cr_utils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- config -->
<script src="js/config/cr_Config.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/config/cr_Router.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- modules -->
<script src="js/modules/SafeApply.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/modules/CanvasEx.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/modules/requestAnimationFrame.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- enums -->
<script src="js/enums/cr_Enums.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- data -->
<script src="js/data/cr_DataFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- directives -->
<script src="js/directives/cr_Fullscreen.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/directives/cr_Layout.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/directives/cr_Accordion.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/directives/cr_Slider.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/directives/cr_InfiniteScroll.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/directives/cr_MiniColors.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- dialogs -->
<script src="js/dialogs/cr_BaseDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_AlertDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_ConfirmDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_AddBasketDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_DetailDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_ProductsDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_SaveDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_LoginDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_RestorationDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_RestoreDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_Save_asDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_ImportDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_MMarketDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_JoinDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_VideoDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_InfoDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_FAQDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_AboutUsDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_ContactUsDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_ProfileDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_CreditCardDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_BasketDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_NotificationDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_LayersDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_SettingsDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_HistoryDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_TestApiDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/confirm/cr_ConfirmLibraryDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/dialogs/cr_EditorImageProDialog.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- factories -->
<script src="js/factories/cr_AppFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_EditorFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_DrawFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_LanguageFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_LayoutFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_LoaderFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_PreloaderFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_TreeFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_ContentFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_FullscreenFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_ScrollbarFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_DrawerFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_PopoverFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_ObjectsFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_LoginFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/factories/cr_ClipboardFactory.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- filters -->
<script src="js/filters/cr_CutFilter.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/filters/cr_TrimFilter.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- managers -->
<script src="js/managers/cr_KeysManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_MouseManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_DialogsManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_EventsManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_UtilsManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_CommandsManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_ModelsManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_URLManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_ResourcesManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_ToasterManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_SnapManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_StatesManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_ImportExportManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_AnimationManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/managers/cr_FontManager.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- models -->
<script src="js/models/cr_BaseModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_UserModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_ProductModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_ProjectModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_LibraryModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_MotifModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_SizeModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_UploadModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_ExtraFontModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_PreviewModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_PrintItems.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_LibraryItems.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_TypesPrint.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_textFontItems.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_ListColor.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_LoadImages.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_MarketItems.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_ImportModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<script src="js/models/db/cr_db_CategoryModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/db/cr_db_FontpicModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/db/cr_db_PicModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/db/cr_db_PictagModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/db/cr_db_ProductModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/db/cr_db_TemplateModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/db/cr_db_UploadpicModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/db/cr_db_UserModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<script src="js/models/draw/cr_CircleModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/draw/cr_ImageModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/draw/cr_RectModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/draw/cr_TextModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/draw/cr_LineModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/draw/cr_PolygonModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/draw/cr_SVGModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/models/cr_TemplateModel.js?v=<?php // echo env('APP_VERSION'); ?>"></script>


<!-- services -->
<script src="js/services/cr_BaseService.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/services/cr_RequestService.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/services/cr_UploadService.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- utils -->
<script src="js/utils/cr_ArrayUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_DataUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_DateUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_LogUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_NumberUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_ObjectUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_StringUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_ColorUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_CustomUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/utils/cr_GeometryUtils.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- commands -->
<script src="js/commands/cr_BaseCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_MacroCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ClearWorkAreaCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ExportWorkAreaAsJPGCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ExportWorkAreaAsPDFCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ExportWorkAreaAsPNGCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ExportWorkAreaCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ImportWorkAreaCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ObjectAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ObjectSelectionCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ObjectManipulationCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ObjectRemoveCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_MoveWorkAreaCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ZoomWorkAreaCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ObjectBringToFrontCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ObjectSendToBackCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_ObjectExchangeCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/cr_GroupObjectsCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<script src="js/commands/objects/cr_BarCodeAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_BridgeTextAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_CircleAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_CurveTextAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_GraphicTextAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_ImageAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_ITextAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_LineAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_OvalAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_PolygonAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_QRCodeAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_RectAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_RichTextAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_StarAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_SVGAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_TextAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_TextboxAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/commands/objects/cr_TriangleAddCommand.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- controllers -->
<script src="js/controllers/cr_AppCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_EditorCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_DrawCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_ObjectsCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_HistoryCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_LayersCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_PropertiesCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_EffectsCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_MotifsCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_TestApiCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_UploadsCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_LibraryCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_TextCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/cr_HomeCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>


<script src="js/controllers/properties/cr_BarCodeCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_BridgeCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_CurverCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_ImageEditorCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_QrCodeCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_RichtextCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_ShapeCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_SVG1Ctrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_SVG2Ctrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_TemplateCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_TextCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_TextImageCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_StarCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_CircleCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_LineCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_OvalCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_PolygonCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_RectCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/properties/cr_TriangleCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>


<script src="js/controllers/access/cr_AccessCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/access/cr_ForgotPwdCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/access/cr_LockMeCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/access/cr_SigninCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/access/cr_SignoutCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>
<script src="js/controllers/access/cr_SignupCtrl.js?v=<?php // echo env('APP_VERSION'); ?>"></script>

<!-- /build -->

<!-- build:script all -->
<!-- /build -->

</body>
</html>
