var myAppModule = angular.module('myApp', []);
myAppModule.controller("MainController", ['$scope', function($scope) {
    $scope.bootstrapData = { "buttons": [26, 14, -31, -15], "bars": [60, 69], "limit": 220 }
    $scope.btnList = $scope.bootstrapData['buttons'];
    $scope.barList = [];
    for (var i = 0; i < $scope.bootstrapData['bars'].length; i++) {
        $scope.barList.push({
            barWidth: $scope.bootstrapData['bars'][i],
            barId: ("progress" + (i + 1))
        });
    }
    $scope.barName = $scope.barList[0].barId;
    $scope.changeProgress = function(val) {
        for (var i = 0; i < $scope.barList.length; i++) {
            if ($scope.barName === $scope.barList[i].barId) {
                $scope.barList[i].barWidth += val;
                $scope.barList[i].barWidth = $scope.barList[i].barWidth <= 0 ? 0 : $scope.barList[i].barWidth;
            }
        }

    }
}]);