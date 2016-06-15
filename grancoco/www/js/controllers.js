angular.module('Grancoco.controllers', [])


.controller('ElencoCtrl', function($scope, Elenco) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.elenco = Elenco.all();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Elenco) {
  $scope.atleta = Elenco.get($stateParams.elencoId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
