class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.game.run();
  }

  bindEvents() {}

  makeMove($square) {}

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
