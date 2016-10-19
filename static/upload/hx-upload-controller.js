angular.module('hxApp').controller('HealxUploadController', ['$location', 'HealxDataFactory',
    function ($location, healxDataFactory) {

    this.inputDnaSequenceText = null;

    this.clearDnaSequence = function () {
        this.inputDnaSequenceText = null;
    }

    this.loadFileDnaSequence = function ($fileContent) {
        this.inputDnaSequenceText = $fileContent;
    }

    this.parse = function () {
        $location.path('/dnaLoading');

        console.log('Parsing..');

        // use the factory to handle what to do with the data!
        healxDataFactory.uploadData({ dnaSequence: this.inputDnaSequenceText })
            .then(display);        
    };

    function display(response) {
        $location.path('/dnaResult/' + response.data.id);

        // scroll into view
        var divPosition = $('#bottom').offset();
        var headerSize = $('#navBar').height() + 10;
        $('html, body').animate({ scrollTop: (divPosition.top - headerSize) }, "slow");
    }
}]);

 
