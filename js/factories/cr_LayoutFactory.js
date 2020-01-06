angular.module('cr_Customify')
    .factory('cr_LayoutFactory', [function () {
        var self = this;

        self.useHeaderPanel = true;
        self.useLeftSidebarPanel = true;
        self.useRightSidebarPanel = true;
        self.useFooterPanel = true;

        self.useWorkareaHeaderPanel = false;
        self.useWorkareaLeftSidebarPanel = false;
        self.useWorkareaRightSidebarPanel = false;
        self.useWorkareaFooterPanel = false;

        self.headerPanelOptions = {
            size: 50,
            maxSize: 50,
            spacing_open: 0,
            spacing_closed: 0
        };
        self.leftSidebarPanelOptions = {
            spacing_open: 4,
            spacing_closed: 0,
            size: 300,
            minSize: 200,
            maxSize: 500
        };
        self.centerPanelOptions = {};
        self.rightSidebarPanelOptions = {
            spacing_open: 4,
            spacing_closed: 0,
            size: 350,
            minSize: 300,
            maxSize: 800
        };
        self.footerPanelOptions = {
            size: 50,
            minSize: 50,
            maxSize: 100,
            spacing_open: 4,
            spacing_closed: 0
        };

        self.workareaHeaderPanelOptions = {
            size: 60,
            maxSize: 60,
            spacing_open: 0,
            spacing_closed: 0
        };
        self.workareaLeftSidebarPanelOptions = {
            size: 200,
            maxSize: 300,
            spacing_open: 4,
            spacing_closed: 0
        };
        self.workareaCenterPanelOptions = {
            spacing_open: 4,
            spacing_closed: 0
        };
        self.workareaRightSidebarPanelOptions = {
            spacing_open: 4,
            spacing_closed: 0,
            size: 350,
            minSize: 250,
            maxSize: 500
        };
        self.workareaFooterPanelOptions = {
            size: 70,
            maxSize: 70,
            spacing_open: 0,
            spacing_closed: 0
        };

        return self;
    }]);