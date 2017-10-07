app.directive('evenNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attr, mCtrl) {
            function checkForEven(value) {
                if (parseInt(value) % 2 === 0) {
                    mCtrl.$setValidity('evenNumber', true);
                    $(elm).addClass('valid-evenNumber').removeClass('invalid-evenNumber');
                } else {
                    mCtrl.$setValidity('evenNumber', false);
                    $(elm).addClass('invalid-evenNumber').removeClass('valid-evenNumber');
                }
                return value;
            }
            mCtrl.$parsers.push(checkForEven)
        }
    };
});