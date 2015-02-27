// public/core.js
var reminderNote = angular.module('reminderNote', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all notes and show them
    $http.get('/api/notes')
        .success(function(data) {
            $scope.notes = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createNote = function() {
        $http.post('/api/notes', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.notes = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a note after checking it
    $scope.deleteNote = function(id) {
        $http.delete('/api/notes/' + id)
            .success(function(data) {
                $scope.notes = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}


