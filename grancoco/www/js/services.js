angular.module('Grancoco.services', [])

.factory('Jogos', function($rootScope, $http){

  return{
    getJogos: function(){
      $http.get("http://sergiorighini.com/2016/ws.php?__action=jogos").then(function(res){
        return res.data.jogos;
      },function(err){
        return err;
      });
    }
  }
})

.factory('Elenco', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var elenco = [{
    id: 0,
    name: 'Tom',
    lastText: 'Goleiro',
    face: 'img/tom.jpg',
    fullface: 'img/tom_full.jpg'
  }, {
    id: 1,
    name: 'Vilson',
    lastText: 'Zagueiro',
    face: 'img/vilson.jpg',
    fullface: 'img/vilson_full.jpg'
  }, {
    id: 2,
    name: 'Naldinho',
    lastText: 'Zagueiro',
    face: 'img/naldinho.jpg',
    fullface: 'img/naldinho_full.jpg'
  }, {
    id: 3,
    name: 'Edílson',
    lastText: 'Zagueiro e Dirigente',
    face: 'img/edilson.jpg',
    fullface: 'img/edilson_full.jpg'
  }, {
    id: 4,
    name: 'Cleiton',
    lastText: 'Lateral',
    face: 'img/cleiton.jpg',
    fullface: 'img/cleiton_full.jpg'
  }, {
    id: 5,
    name: 'Chiquinho',
    lastText: 'Lateral e Dirigente',
    face: 'img/chiquinho.jpg',
    fullface: 'img/chiquinho_full.jpg'
  }, {
    id: 6,
    name: 'Binho',
    lastText: 'Volante',
    face: 'img/binho.jpg',
    fullface: 'img/binho_full.jpg'
  }, {
    id: 7,
    name: 'Mateus',
    lastText: 'Volante',
    face: 'img/mateus.jpg',
    fullface: 'img/mateus_full.jpg'
  }, {
    id: 8,
    name: 'Vanderlei',
    lastText: 'Volante',
    face: 'img/vanderlei.jpg',
    fullface: 'img/vanderlei_full.jpg'
  }, {
    id: 9,
    name: 'Pablo',
    lastText: 'Meio Campo',
    face: 'img/pablo.jpg',
    fullface: 'img/pablo_full.jpg'
  }, {
    id: 10,
    name: 'Washington',
    lastText: 'Meio Campo',
    face: 'img/washington.jpg',
    fullface: 'img/washington_full.jpg'
  }, {
    id: 11,
    name: 'Thiago',
    lastText: 'Atacante',
    face: 'img/thiago.jpg',
    fullface: 'img/thiago_full.jpg'
  }, {
    id: 12,
    name: 'Paulo',
    lastText: 'Atacante',
    face: 'img/paulo.jpg',
    fullface: 'img/paulo_full.jpg'
  }, {
    id: 13,
    name: 'Marcelinho',
    lastText: 'Atacante',
    face: 'img/marcelinho.jpg',
    fullface: 'img/marcelinho_full.jpg'
  }, {
    id: 14,
    name: 'Pedrinho',
    lastText: 'Atacante',
    face: 'img/pedrinho.jpg',
    fullface: 'img/pedrinho_full.jpg'
  }, {
    id: 15,
    name: 'Neto',
    lastText: 'Atacante e Dirigente',
    face: 'img/neto.jpg',
    fullface: 'img/neto_full.jpg'
  }, {
    id: 16,
    name: 'Maurício',
    lastText: 'Atacante da base',
    face: 'img/mauricio.jpg',
    fullface: 'img/mauricio_full.jpg'
  }, {
    id: 17,
    name: 'Elenco',
    lastText: '',
    face: 'img/elenco.jpg',
    fullface: 'img/elenco_full.jpg'
  }];

  return {
    all: function() {
      return elenco;
    },
    get: function(elencoId) {
      for (var i = 0; i < elenco.length; i++) {
        if (elenco[i].id === parseInt(elencoId)) {
          return elenco[i];
        }
      }
      return null;
    }
  };
});
