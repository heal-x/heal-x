angular.module('hxApp').factory('HealxDataFactory', function () {
    // todo: store array of last parsed data in local storage?
    var lastParsedData = null;

    return {
        uploadData: function (newData) {
            console.log('Called data factory upload data');
            // TODO: parse the DNA data here
            
            // save
            lastParsedData = newData;
        },
        dnaSequence: lastParsedData
    };
});