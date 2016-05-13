angular.module('app')
    .controller('TestController', function($scope, $timeout, RiotService) {

        $scope.servers = ['EUW', 'EUNE', 'NA'];

        $scope.loading = false;
        $scope.error = undefined;
        $scope.summoner = undefined;
        $scope.RiotVM = {
            server: 'EUW',
            summoner: undefined
        };

        $scope.iconLink = function (profileIconId) {
            return 'http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/' + profileIconId + '.png';
        };

        $scope.changeServer = function(server) {
            $scope.RiotVM.server = server;
        };

        $scope.getInfo = function(server, summoner) {
            if ($scope.servers.indexOf(server) < 0 || !this.RiotVM.summoner) return;

            $scope.loading = true;
            delete $scope.summoner;
            delete $scope.RiotVM.summoner;
            delete $scope.error;

            RiotService.getInfo(encodeURIComponent(server), encodeURIComponent(summoner))
                .then(function(response) {
                    $timeout(function() {
                        $scope.summoner = response.data[Object.keys(response.data)[0]];
                        delete $scope.error;
                        $scope.loading = false;
                    }, 1000);

                }, function() {
                    $timeout(function() {
                        $scope.error = 'No summoner found.';
                        delete $scope.summoner;
                        $scope.loading = false;
                    }, 1000);
                });
        };

        $scope.getRunes = function(server, id) {
            if ($scope.servers.indexOf(server) < 0 || !this.summoner.id) return;


            RiotService.getRunes(encodeURIComponent(server), encodeURIComponent(id))
                .then(function(response) {
                    console.log(response);
                })
        }
    });