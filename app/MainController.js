angular.module('app')
    .controller('MainController', function($scope, $timeout, RiotService) {

        $scope.servers = [
            {
                'real': 'EUW',
                'fake': 'EUW1'
            },
            {
                'real': 'EUNE',
                'fake': 'EUN1'
            },
            {
                'real': 'NA',
                'fake': 'NA1'
            },
            {
                'real': 'BR',
                'fake': 'BR1'
            },
            {
                'real': 'JP',
                'fake': 'JP1'
            },
            {
                'real': 'KR',
                'fake': 'KR'
            },
            {
                'real': 'LAN',
                'fake': 'LA1'
            },
            {
                'real': 'LAS',
                'fake': 'LA2'
            },
            {
                'real': 'OCE',
                'fake': 'OC1'
            },
            {
                'real': 'RU',
                'fake': 'RU'
            },
            {
                'real': 'TR',
                'fake': 'TR1'
            }
        ];

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
        };
        
        $scope.checkStatus = function (server) {
            if ($scope.servers.indexOf(server) < 0) return;

            $scope.server = server;
            RiotService.checkStatus(server.toLowerCase()).then(function(response) {
                console.log(response);
                $scope.serverStatus = response.data;
            })
        }
    });