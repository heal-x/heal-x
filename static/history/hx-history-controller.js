angular.module('hxApp').controller('HealxHistoryController', ['$location', 'HealxDataFactory', 
    function ($location, healxDataFactory) {

        this.historicalData = null;

        var result = healxDataFactory.getPreviousSequences()
                .then(display.bind(this), displayError.bind(this));

        function display(response) {
            console.log(response);
            this.historicalData = response.data;
        }

        function displayError(err) {
            this.errorMessage = err;
        }
}]);