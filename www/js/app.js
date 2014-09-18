var app = angular.module('App', ['ionic']);

// app.service('FreshlyPressed', ['$http', '$log', FreshlyPressed]);
// app.controller('AppCtrl', ['$scope', 'FreshlyPressed', '$log', AppCtrl]);

app.controller('AppCtrl', ['$scope', '$http', '$log', AppCtrl]);

function AppCtrl($scope, $http, $log) {

    $scope.posts = [];
    // var loader = element(by.css('loader'));

    $scope.refresh = function() {
        // alert('button pressed');
        // FreshlyPressed.getBlogs($scope);
        // alert('1rst step');
        // loader.getCssValue('display').toBe('block');
        $http.jsonp('http://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK').success(function(result) {
            // alert(result);
            // $log.info(JSON.stringify(result.posts));
            $scope.posts = result.posts;
            $scope.$broadcast('scroll.refreshComplete');
        });
    }

}

// function FreshlyPressed($http, $log) {
//     this.getBlogs = function($scope) {
//         alert('1rst step');
//         $http.jsonp('http://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK').success(function(result) {
//             alert(result);
//             $log.info(JSON.stringify(result.posts));
//             $scope.posts = result.posts;
//         });
//     }
// }
