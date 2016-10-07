// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('AppCtrl', function($scope, $http) {
    $scope.data = {};

    $scope.submit = function(){
        var link = 'http://movil.gestsol.cl/plataformainstalacion/bd/app.php?op=save';

        $http.post(link+ '&cliente=' +$scope.data.nameclient + '&direccion=' +$scope.data.adress + '&fecha=' +$scope.data.date
            + '&proyecto=' +     $scope.data.nameproject +
            '&tipo=' +$scope.data.type + '&hora_inicio=' +$scope.data.timeini+ '&hora_fin='  + $scope.data.timeend + '&encargado_gestsol='
            + $scope.data.managergest + '&encargado_electrico=' +$scope.data.managerelect 
            + '$&encargado_cliente=' + $scope.data.managerclient + '&patente=' +$scope.data.patent
            + '&marca=' + $scope.data.brand  + '&carroceria=' +$scope.data.body + '&numero_vehiculo=' +$scope.data.numveh
            + '&modelo=' +$scope.data.model + '&flota=' +$scope.data.fleet).then(function (res){
            $scope.response = res.data;
            console.log($scope.response[0].desc);
        });
    };
});