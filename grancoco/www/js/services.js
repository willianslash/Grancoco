angular.module('Grancoco.services', [])

.factory('Elenco', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var elenco = [{
    id: 0,
    name: 'Maurício',
    lastText: 'Atacante da base',
    face: 'img/mauricio.png'
  }, {
    id: 1,
    name: 'Neto',
    lastText: 'Atacante',
    face: 'img/neto.png'
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
