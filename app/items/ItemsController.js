angular.module('app').controller('ItemsController', function($scope, RiotService) {
    function getData() {
        RiotService.getItems().then(function(response) {
            $scope.items = response.data.data;
        })
    }

    getData();
});