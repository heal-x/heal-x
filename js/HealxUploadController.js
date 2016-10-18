

angular.module('HealxApp').controller('HealxUploadController', function () {
    this.inputDnaSequenceText = null;
    this.clearDnaSequence = function () {
        this.inputDnaSequenceText = null;
    }

    this.loadFileDnaSequence = function ($fileContent) {
        this.inputDnaSequenceText = $fileContent;
    }
});

 
