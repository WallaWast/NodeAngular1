
angular.module('primeiraApp').constant('consts', {
    appName: 'MEAN - Primeira Aplicação',
    version: '1.0',
    owner: 'Wast',
    year: '2019',
    site: 'https://www.linkedin.com/in/wallacewast/',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
}])