angular.module('hxApp').factory('HealxDataFactory', function ($http) {
    var parsedCompleted = false;

    return {
        uploadData: function (newData) {
            console.log('Called data factory upload data');                    
            return $http.post('/uploadDna', newData);

        },
        getDnaSequence: function (id) {
            return $http.get('/dnaSequence/' + id);
        },
        hasParsed: parsedCompleted,
        setParsed: function (value) {
            console.log('set parsed to: ' + value);
            parsedCompleted = value;
        }
    };
});