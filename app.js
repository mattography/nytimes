var myMovies = angular.module('movieapp', []);
myMovies.controller('movieController', function($scope, $http) {
  $http.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=xxx")
    .then(function(response) {
      console.log(response);
      $scope.results = response.data.results;
    });
});
