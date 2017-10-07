app.directive("myDirective", function () {
    return {
        template:  "<div>my dir Your name is : {{name}} and country {{country}}</div>"+
        "Change your name : <input type='text' ng-model='name' />",
        scope: {
            name: "@",
            country: "="
        },
        link: function (scope, elm, attr) {

            console.log('postlink', scope.name);
        }
    };
});

app.directive('someDirective', function () {
    return {
        scope: {
            name: '='
        },
        template: "<div>some dir <br> <input type='text' ng-model='name' />  {{name}}" +
        "Ctr: {{ctrl.name}}</div>",
        controller: function () {
            this.name = 'Pascal';
        },
        controllerAs: 'ctrl',
        bindToController: {
            // name: "="
        }
    };
});
