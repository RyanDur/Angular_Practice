var app = angular.module('behaviorApp', []);

//////////////////////////////////////////////////
// restrict defaults to attribute unless stated //
// otherwise                                    //
//                                              //
// app.directive('example1', function(){        //
//     return {				        //
// 	restrict: 'A'			        //
//     };				        //
// });					        //
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// return a function will automagicly return a  //
// link function                                //
//                                              //
// app.directive('example2', function(){        //
//     return {				        //
//      link: function(){                       //
//                                              //
//      }                		        //
//     };				        //
// });					        //
//////////////////////////////////////////////////

app.directive('enter', function(){
    return function(scope, element) {
	element.bind('mouseenter', function() {
	    element.addClass('panel');
	});
    };
});

app.directive('leave', function(){
    return function(scope, element) {
	element.bind('mouseleave', function() {
	    element.removeClass('panel');
	});
    };
});

app.directive('menter', function(){
    return function(scope, element, attrs) {
	element.bind('mouseenter', function() {
	    element.addClass(attrs.menter);
	});
    };
});

app.directive('mleave', function(){
    return function(scope, element, attrs) {
	element.bind('mouseleave', function() {
	    element.removeClass(attrs.menter);
	});
    };
});
