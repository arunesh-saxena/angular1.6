app.controller('child1Ctrl', [
    '$scope', 'resolveMsg', '$stateParams', '$state',
    function ($scope, resolveMsg, $stateParams, $state) {
    $scope.msg = 'this is child1Ctrl msg';
    $scope.resolveMsg = resolveMsg;
    console.log($stateParams,$state.current.name)
}]);