var app = angular.module('superhero', []);

app.directive('superman', function() {
    return {
        restrict:'E',
        link: function() {
            alert("I'm an element\n"
                  + "<superman></superman>");
        }
    };
});

app.directive('superman2', function() {
    return {
        restrict:'A',
        link: function() {
            alert("I'm an attribute\n"
                  + "<div superman2></div>");
        }
    };
});


app.directive('superman3', function() {
    return {
        restrict:'C',
        link: function() {
            alert("I'm a class\n"
                  + "<div class='superman3'></div>");
        }
    };
});

app.directive('superman4', function() {
    return {
        restrict:'M',
        link: function() {
            alert("I'm a comment\n"
                  + "<!-- directive:superman4 -->");
        }
    };
});

app.directive('hulk', function() {
    return {
        restrict:'A',
        link: function() {
            alert("Hulk work sronger\n"
                  + "<div flash hulk></div>");
        }
    };
});

app.directive('flash', function() {
    return {
        restrict:'A',
        link: function() {
            alert("Flash is working faster\n"
                  + "<div flash hulk></div>");
        }

    };
});
