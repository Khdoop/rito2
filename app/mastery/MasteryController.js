angular.module('app')
    .controller('MasteryController', function($scope, RiotService) {

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
        
        $scope.checkMastery = function(real, fake, summoner) {
            RiotService.getInfo(real, summoner).then(function (response) {
                console.log(response);
                RiotService.checkMastery(real, fake, response.data.khdoop.id).then(function (res) {
                    console.log(res);
                    $scope.mastery = res.data;
                })
            })
        }
        
    });