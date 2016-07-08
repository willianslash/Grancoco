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

.controller('AtletaDetailCtrl', function($scope, $stateParams, Elenco) {
  $scope.atleta = Elenco.get($stateParams.elencoId);
})

.controller('AccountCtrl', function($scope, $http, $ionicSlideBoxDelegate, Jogos) {

  $scope.$on('$ionicView.enter', function() {

    $scope.jogos = null;

  $scope.msgFalha = "";  
  $scope.msg = "Sincronizando...";
  $scope.msgShow = true;
  $scope.slideShow = false;

/*
  $scope.jogos = Jogos.getJogos();
  console.log($scope.jogos);
  $ionicSlideBoxDelegate.update();
*/

  
  $http.get("http://sergiorighini.com/2016/ws.php?__action=jogos").then(function(res,status){

    $scope.msg = '';
    $scope.msgShow = false;
    $scope.slideShow = true;
    $scope.jogos = res.data.jogos;

    //atualiza os jogos localmente
    localStorage.setItem( "jogos_local", JSON.stringify(res.data.jogos) );

    $ionicSlideBoxDelegate.update();

  }, function(err){
    $scope.msg = '';
    $scope.msgFalha = "Não foi possível sincronizar";
    var jogos_locais = localStorage.getItem( "jogos_local" );

    if(jogos_locais !== 'undefined'){
        
        $scope.slideShow = true;
        $scope.jogos = JSON.parse(jogos_locais);
        $ionicSlideBoxDelegate.update();
    }

  });
  

  });
  
});
