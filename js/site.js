var app = angular.module('instantsearch',[]);

app.controller('instantSearchCtrl',function($scope,$http){
    $http.get('formatted.json').success(function(data, status, headers, config) {
        $scope.items = data.list;
    }).error(function(data, status, headers, config) {
        console.log("No data found..");
  });
});

app.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
            result.push(item);
        }
        });
        document.getElementsByName('text')[0].placeholder=result[0];
        return result;
    };
});
