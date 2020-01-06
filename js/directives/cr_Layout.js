angular.module('cr_Customify')
    .directive('crLayout', ['$timeout', function ($timeout) {

        return {
            restrict: 'AC',
            scope: {
                layoutUseHeaderPanel: '=',
                layoutUseLeftSidebarPanel: '=',
                layoutUseRightSidebarPanel: '=',
                layoutUseFooterPanel: '=',

                layoutHeaderPanelOptions: '=',
                layoutLeftSidebarPanelOptions: '=',
                layoutCenterPanelOptions: '=',
                layoutRightSidebarPanelOptions: '=',
                layoutFooterPanelOptions: '=',

                layoutHeaderPanelResize: '=',
                layoutLeftSidebarPanelResize: '=',
                layoutRightSidebarPanelResize: '=',
                layoutFooterPanelResize: '=',
                layoutCenterPanelResize: '='
            },
            link: function ($scope, $element, $attrs) {
                var layout = $element.layout({
                    togglerLength_open: 0,
                    togglerLength_closed: 0,
                    effects: {
                        slide: {
                            all: {duration: 0}
                        },
                        drop: {
                            all: {duration: 0}
                        },
                        scale: {
                            all: {duration: "fast"}
                        }
                    },
                    zIndexes: {
                        pane_normal: 'auto'
                    },
                    inset: {
                        top: 0, bottom: 0, left: 0, right: 0
                    },
                    panes: {
                        resizerDblClickToggle: true,
                        enableCursorHotkey: false,
                        spacing_open: 4,
                        spacing_closed: 4
                    },
                    west: jQuery.extend($scope.layoutLeftSidebarPanelOptions || {}, {
                        onopen: function () {
                            $scope.layoutUseLeftSidebarPanel = true;
                        },
                        onclose: function () {
                            $scope.layoutUseLeftSidebarPanel = false;
                        },
                        onresize: function () {
                            if (angular.isFunction($scope.layoutLeftSidebarPanelResize)) {
                                $scope.layoutLeftSidebarPanelResize();
                            }
                        }
                    }),
                    east: jQuery.extend($scope.layoutRightSidebarPanelOptions || {}, {
                        onopen: function () {
                            $scope.layoutUseRightSidebarPanel = true;
                        },
                        onclose: function () {
                            $scope.layoutUseRightSidebarPanel = false;
                        },
                        onresize: function () {
                            if (angular.isFunction($scope.layoutRightSidebarPanelResize)) {
                                $scope.layoutRightSidebarPanelResize();
                            }
                        }
                    }),
                    north: jQuery.extend($scope.layoutHeaderPanelOptions || {}, {
                        onopen: function () {
                            $scope.layoutUseHeaderPanel = true;
                        },
                        onclose: function () {
                            $scope.layoutUseHeaderPanel = false;
                        },
                        onresize: function () {
                            if (angular.isFunction($scope.layoutHeaderPanelResize)) {
                                $scope.layoutHeaderPanelResize();
                            }
                        }
                    }),
                    south: jQuery.extend($scope.layoutFooterPanelOptions || {}, {
                        onopen: function () {
                            $scope.layoutUseFooterPanel = true;
                        },
                        onclose: function () {
                            $scope.layoutUseFooterPanel = false;
                        },
                        onresize: function () {
                            if (angular.isFunction($scope.layoutFooterPanelResize)) {
                                $scope.layoutFooterPanelResize();
                            }
                        }
                    }),
                    center: jQuery.extend($scope.layoutCenterPanelOptions || {}, {
                        onresize: function () {
                            if (angular.isFunction($scope.layoutCenterPanelResize)) {
                                $scope.layoutCenterPanelResize();
                            }
                        }
                    })
                });

                // --- Watch

                $scope.$watch('layoutUseHeaderPanel', function (newValue, oldValue) {
                    if (newValue) {
                        layout.open('north');
                    } else {
                        layout.close('north');
                    }

                    return newValue;
                });

                $scope.$watch('layoutUseLeftSidebarPanel', function (newValue, oldValue) {
                    if (newValue) {
                        layout.open('west');
                    } else {
                        layout.close('west');
                    }

                    return newValue;
                });

                $scope.$watch('layoutUseRightSidebarPanel', function (newValue, oldValue) {
                    if (newValue) {
                        layout.open('east');
                    } else {
                        layout.close('east');
                    }

                    return newValue;
                });

                $scope.$watch('layoutUseFooterPanel', function (newValue, oldValue) {
                    if (newValue) {
                        layout.open('south');
                    } else {
                        layout.close('south');
                    }

                    return newValue;
                });

                $scope.$watch('layoutHeaderPanelOptions', function (newValue, oldValue) {


                    return newValue;
                });

                $scope.$watch('layoutLeftSidebarPanelOptions', function (newValue, oldValue) {


                    return newValue;
                });

                $scope.$watch('layoutCenterPanelOptions', function (newValue, oldValue) {


                    return newValue;
                });

                $scope.$watch('layoutRightSidebarPanelOptions', function (newValue, oldValue) {


                    return newValue;
                });

                $scope.$watch('layoutFooterPanelOptions', function (newValue, oldValue) {


                    return newValue;
                });

                // ---

                layout.initPanes();
                layout.resizeAll();

                $timeout(function () {
                    layout.initPanes();
                    layout.resizeAll();
                }, 1);

                $timeout(function () {
                    layout.initPanes();
                    layout.resizeAll();
                }, 500);

                $timeout(function () {
                    layout.initPanes();
                    layout.resizeAll();
                }, 1000);
            }
        }
    }]);