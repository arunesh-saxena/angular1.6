var temp = '../app/templates/';
app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: temp + 'home.html',
            controller: 'homeCtrl',
            controllerAs: "homeCtrlAs",
            resolve: {
                resolveMsg: function () {
                    return 'this is resolve homemsg';
                }
            }
        })
        .state('home.child1', {
            url: '/child1',

            resolve: {
                resolveMsg: function () {
                    return 'this is resolve child1';
                }
            },
            views: {
                '': {
                    templateUrl: temp + 'child.html',
                    controller: 'child1Ctrl',
                },
                'child2View': {
                    template: 'this is chlid2 templateing',
                }
            }
        })
        .state('home.child1.id', {
            url: '/:id',
            views: {
                '': {
                    template: temp + 'child.html',
                    controller: function ($scope, $state) {
                       console.log($state)
                    },
                    resolve: {
                        reolveMsg: ['$stateParams', function ($stateParams) {
                            console.log($stateParams)
                            return true;
                        }]
                    }
                }
            }
        })
        .state('red', {
            url: '/red',
            templateUrl: temp + 'red.html'
        });
});