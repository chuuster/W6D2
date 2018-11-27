class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    this.$el.on('click', 'li', (e) => {
      let $square = $(e.target);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    let pos = $square.data("pos");
    let mark = this.game.currentPlayer;

    if ($square.attr('class') === "marked") {
      alert("Invalid move.");
    } else {
      this.game.playMove(pos);
      $square.removeClass();
      $square.addClass("marked");
      $square.data("mark", `${mark}`);
      $square.html(`${mark}`);
    }

    this.gameOver();
  }

  gameOver() {
    if (this.game.isOver()) {
      let result = this.game.winner();
      if (result === null) {
        $('body').append("<div>This game was a draw!</div>");
      } else {
        $('body').append(`<div>${result} has won!</div>`);
      }
      this.gameOverStyling();
    }
  }

  gameOverStyling() {
    let $squares = $('li');
    for (let i = 0; i < $squares.length; i++) {
      // debugger;
      if ($squares.eq(i).data('mark') === this.game.winner()) {
        $squares.eq(i).removeClass();
        $squares.eq(i).addClass("winner");
      } else {
        $squares.eq(i).removeClass();
        $squares.eq(i).addClass("loser");
      }
    }
  }

  setupBoard() {
    let $board = $('<ul>');
    $board.addClass("black");
    for(let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $square = $('<li>');
        $square.addClass("square");
        $square.data("pos", [i, j]);
        $board.append($square);
      }
    }
    this.$el.append($board);
  }

}

module.exports = View;
