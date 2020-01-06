angular.module('SafeApply', [])

    .factory('$safeApply', ['$rootScope', function ($rootScope) {
        $rootScope.$safeApply = function () {
            var $scope, fn, arg, force = false, args = arguments;

            if (args.length === 1) {
                arg = args[0];
                if (typeof arg === 'function') {
                    fn = arg;
                } else {
                    $scope = arg;
                }
            } else if (args.length > 0) {
                $scope = args[0];
                fn = args[1];
                if (args.length === 3) {
                    force = !!args[2];
                }
            }

            $scope = $scope || this || $rootScope;

            if ($scope === window) {
                $scope = $rootScope;
            }

            fn = fn || function () {
                };

            if (force || !($scope.$$phase || $scope.$root.$$phase)) {
                $scope.$apply ? $scope.$apply(fn) : $scope.apply(fn);
            } else {
                fn();
            }
        };

        return $rootScope.$safeApply;
    }])

    .run(['$safeApply', function () {
    }]);