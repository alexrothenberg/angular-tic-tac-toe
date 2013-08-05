describe('Controller: TicTacToeCtrl', function () {
  var scope;

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('TicTacToeCtrl', {
      $scope: scope
    });
  }));

  it('plays my move', function() {
    scope.play(4);
    scope.markAt(4).should.eql('X')
  });

});