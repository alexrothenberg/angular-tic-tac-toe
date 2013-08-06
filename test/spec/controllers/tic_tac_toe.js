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
    fakeOtherPlayer = OtherPlayer;
    scope = $rootScope.$new();
    $controller('TicTacToeCtrl', {
      $scope: scope
    });
  }));

  it('plays my move', function() {
    fakeOtherPlayer.selectMove.returns(5);
    scope.play(4);
    scope.markAt(4).should.eql('X');
    scope.markAt(5).should.eql('O');
    scope.newGame();
    scope.markAt(4).should.eql('');
    scope.markAt(5).should.eql('');
  });

  it('cannot play over other player', function() {
    fakeOtherPlayer.selectMove.returns(3);
    scope.play(4);
    scope.play(3);
    scope.markAt(4).should.eql('X')
    scope.markAt(3).should.eql('O')
  });

  it('knows when I have won', function() {
    fakeOtherPlayer.selectMove.returns(4);
    scope.play(1);
    scope.play(2);
    scope.play(3);
    scope.winner.should.eql('X')
  });

  it('stops making moves when the game is over', function() {
    scope.winner = 'X'
    scope.play(5);
    scope.markAt(5).should.eql('')
  });


});
