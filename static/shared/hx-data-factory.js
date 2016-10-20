angular.module('hxApp').factory('HealxDataFactory', function ($http) {
    return {
        uploadData: function (newData) {
            console.log('Called data factory upload data');                    
            return $http.post('/uploadDna', newData);

        },
        getDnaSequence: function (id) {
            return $http.get('/dnaSequence/' + id);
        },
        getPreviousSequences: function () {
            return $http.get('/previousSequences');
        }
    };
});