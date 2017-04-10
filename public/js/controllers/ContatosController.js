angular.module('contatooh').controller('ContatosController',
  function ($scope, $resource) {
  $scope.filtro = '';
  var Contato = $resource('/contatos');

  function buscaContatos() {
    Contato.query(function (contatos) {
      $scope.contatos = contatos;
    },
    function (erro) {
      console.log("Não foi possível obter a lista de contatos");
      console.log(err);
    }
  );
  }
  buscaContatos();
});
