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
	    console.log("I'm inside");
	});
    };
});

app.directive('leave', function(){
    return function(scope, element) {
	element.bind('mouseleave', function() {
	    console.log("I left");
	});
    };
});
