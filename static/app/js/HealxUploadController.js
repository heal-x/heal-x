

angular.module('HealxApp').controller('HealxUploadController', ['HealxDataFactory', function (healxDataFactory) {
    this.inputDnaSequenceText = null;
    this.clearDnaSequence = function () {
        this.inputDnaSequenceText = null;
    }

    this.loadFileDnaSequence = function ($fileContent) {
        this.inputDnaSequenceText = $fileContent;
    }

    this.parse = function (newData) {
        console.log('Parsing..');

        // use the factory to handle what to do with the data!
        healxDataFactory.uploadData(newData);
    };
}]);

 
