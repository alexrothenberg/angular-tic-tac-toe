describe('Service: TicTacToeGame', function () {
  beforeEach(module('ticTacToeApp'));

  var ticTacToeGame;

  beforeEach(inject(function(TicTacToeGame) {
    ticTacToeGame = TicTacToeGame;
  }));

  describe('.gameOver', function(){
    it('knows top row is a winner', function() {
      ticTacToeGame.playAt('X', 1);
      ticTacToeGame.playAt('X', 2);
      ticTacToeGame.playAt('X', 3);
      ticTacToeGame.gameOver().should.be.true;
    });
    it('knows middle row is a winner', function() {
      ticTacToeGame.playAt('X', 4);
      ticTacToeGame.playAt('X', 5);
      ticTacToeGame.playAt('X', 6);
      ticTacToeGame.gameOver().should.be.true;
    });
    it('knows diagonal is a winner', function() {
      ticTacToeGame.playAt('X', 1);
      ticTacToeGame.playAt('X', 5);
      ticTacToeGame.playAt('X', 9);
      ticTacToeGame.gameOver().should.be.true;
    });
    it('knows a row with both players is not a winner', function() {
      ticTacToeGame.playAt('X', 1);
      ticTacToeGame.playAt('O', 2);
      ticTacToeGame.playAt('X', 3);
      ticTacToeGame.gameOver().should.be.false;
    });
  })

});