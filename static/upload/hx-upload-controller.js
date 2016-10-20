angular.module('hxApp').controller('HealxUploadController', ['$location', '$timeout', 'HealxDataFactory',
    function ($location, $timeout, healxDataFactory) {

    this.inputDnaSequenceText = null;
    this.hasParsed = healxDataFactory.hasParsed;

    this.clearDnaSequence = function () {
        this.inputDnaSequenceText = null;
        this.inputValue = null;
    };

    this.clear = function () {
        angular.element("input[type='file']").val(null);
    };

    this.uploadFile = function (event) {
        var files = event.target.files;
    };

    this.loadFileDnaSequence = function ($fileContent) {
        this.inputDnaSequenceText = $fileContent.trim();
    };

    this.parse = function () {
        $location.path('/dnaLoading');

        // scroll into view
        var divPosition = $('#bottom').offset();
        var headerSize = $('#navBar').height() + 10;
        $('html, body').animate({ scrollTop: (divPosition.top - headerSize) }, "slow");

        var uploadedData = this.inputDnaSequenceText;
        $timeout(function () { 
            console.log('Parsing..');

            healxDataFactory.uploadData(
                { dnaSequence: uploadedData })
                .then(display);
        }, 7000);
    };

    function display(response) {
        $location.path('/dnaResult/' + response.data.id);

        // mark parsed
        healxDataFactory.setParsed(true);
    }
}]);