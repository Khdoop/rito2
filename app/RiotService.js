angular.module('app')
    .factory('RiotService', function($http) {

        var key = '?api_key=3233a03a-f567-4952-a677-391808e14626';

        return {
            getInfo: function(server, summoner) {
                return $http.get('https://' + server + '.api.pvp.net/api/lol/' + server + '/v1.4/summoner/by-name/' + summoner + key);
            },
            getRunes: function(server, id) {
                return $http.get('https://' + server + '.api.pvp.net/api/lol/' + server + '/v1.4/summoner/' + id + '/runes' + key);
            },
            getItems: function() {
                return $http.get('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item' + key);
            },
            checkStatus: function (server) {
                return $http.get('http://status.leagueoflegends.com/shards/' + server);
            },
            checkMastery: function (real, fake, id) {
                return $http.get('https://' + real + '.api.pvp.net/championmastery/location/' + fake + '/player/' + id + '/champions' + key);
            }
        }
    });