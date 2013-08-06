describe('Service: OtherPlayer', function () {

  // load the controller's module
  beforeEach(module('ticTacToeApp'));

  var otherPlayer;
  var ticTacToeGame;

  beforeEach(inject(function(OtherPlayer, TicTacToeGame) {
    otherPlayer = OtherPlayer;
    ticTacToeGame = TicTacToeGame;
  }));

  it('select the first space since it is empty', function() {
    ticTacToeGame.markAt(1).should.eql('');
    otherPlayer.selectMove().should.eql(1);
  });

  it('select the third space when first two are not empty', function() {
    ticTacToeGame.playAt('X', 1)
    ticTacToeGame.playAt('0', 2)
    ticTacToeGame.playAt('X', 4)
    otherPlayer.selectMove().should.eql(3);
  });
});