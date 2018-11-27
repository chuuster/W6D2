const View = require('./ttt-view.js');
const Game = require('../node-solution/game.js');

  $(() => {
    let $el = $('figure');
    let game = new Game();
    let view = new View(game, $el);
    view.bindEvents();
  });
