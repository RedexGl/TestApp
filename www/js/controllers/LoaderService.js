angular.module('starter')

    .factory('LoaderService', function ($rootScope, $ionicLoading) {

        return {
            show: function () {
                $rootScope.loading = $ionicLoading.show({
                    template: '<h1><i class="icon ion-looping"></i> Loading...</h1>',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 500,
                    showDelay: 500
                });
            },
            hide: function () {
                $ionicLoading.hide();
            }
        }
    })
