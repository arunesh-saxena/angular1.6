app.controller('homeCtrl', [
    '$scope', 'resolveMsg', '$timeout',
    function ($scope, resolveMsg, $timeout) {
        this.msg = 'Home controller';
        $scope.name = 'Arunesh';
        $scope.country = "India";
        $scope.reverseName = function () {
            $scope.name = $scope.name.split('').reverse().join('');
            $scope.country = $scope.country.split('').reverse().join('');

        };
        $scope.rHello = resolveMsg;
        
        this.count = 3;
        // return this;

    }])