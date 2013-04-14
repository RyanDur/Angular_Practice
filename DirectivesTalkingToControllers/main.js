var app = angular.module('twitterApp', []);

app.controller('AppCtrl', function($scope) {
    $scope.loadMoreTweets = function() {
        alert("Loading tweets!");
    };
});

app.directive('logtweet', function() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function() {
            console.log('tweet');
        });
    };
});

app.directive('scopemoretweets', function() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function() {
	    scope.loadMoreTweets();
        });
    };
});

app.directive('applymoretweets', function() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function() {
	    scope.$apply("loadMoreTweets()");
        });
    };
});

app.directive('enter', function() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function() {
	    scope.$apply(attrs.enter);
        });
    };
});