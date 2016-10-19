angular.module('hxApp').controller('HealxResultController', ['$location', '$routeParams', 'HealxDataFactory', 
    function ($location, $routeParams, healxDataFactory) {

        this.dnaSequenceData = null;

        var result = healxDataFactory.getDnaSequence($routeParams.id)
                .then(display.bind(this), displayError.bind(this));

        function display(response) {
            console.log(response);
            this.dnaSequenceData = response.data;
        }

        function displayError(err) {
            this.errorMessage = err;
        }
}]);