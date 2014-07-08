var agenda = angular.module('agenda', []);

agenda.controller('ContatosController', ['$scope', '$http','$window', function ($scope, $http, $window){
        
        jQ = jQuery;
        
        $scope.gerarId = function(){
            return $scope.baseId++;
        };
        $scope.novo = function(contato){
            $scope.contato = {'id':'','nome': '', 'telefone': '', 'email': ''};
            jQ('#nome').focus();
        };
        $scope.select = function(contato){
            $scope.contato = contato;
        };
        $scope.salvar = function(){
            if($scope.contato.id === '' & $scope.contato.nome !== '' & $scope.contato.email !== ''){
                $scope.contato.id = $scope.gerarId();
                $scope.contatos.unshift($scope.contato);
            }
        };
        $scope.excluir = function(){
            index = $scope.contatos.indexOf($scope.contato);
            $scope.contatos.splice(index, 1);
        };
        $scope.limpar = function(){
            $scope.contato = {'id':'','nome': '', 'telefone': '', 'email': ''};
        };
        
        $scope.baseId = 0;
        
        function init(){
            $http.get("js/app/contatos.json").success(function(contatos){
               $scope.contatos = contatos; 
               $scope.baseId = ($scope.contatos[$scope.contatos.length-1].id + 1);
               $scope.contato = {'id':'','nome': '', 'telefone': '', 'email': ''};
            });
        }
        init();
}]);