angular.module('myApp', []);

angular.module('myApp').controller('TicTacToeController', TicTacToeController);

TicTacToeController.$inject = ['$interval'];

function TicTacToeController($interval) {
    console.log('in the controller');

    var vm = this;


    
}