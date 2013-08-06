describe('Controller: TicTacToeCtrl', function () {
  var scope;
  var fakeOtherPlayer;

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  beforeEach(function() {
    var myMocks = angular.module('MyAppMocks',[])
    myMocks.factory('OtherPlayer', function() {
      return {
        selectMove: sinon.stub()
      }
    });
    module("MyAppMocks")
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, OtherPlayer) {
    fakeotherPlayer = OtherPlayer;
    scope = $rootScope.$new();
    $controller('TicTacToeCtrl', {
      $scope: scope
    });
  }));

  it('plays my move', function() {
    fakeotherPlayer.selectMove.returns(5);
    scope.play(4);
    scope.markAt(4).should.eql('X');
    scope.markAt(5).should.eql('O');
  });

});
