class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for(let i = 0; i < 3; i++) {
      let $ul = $(`<ul class="tower-${i}">`);
      this.$el.append($ul);
    }

    for(let i = 0; i < 3; i++) {
      let $li = $(`<li class="size-${i}">`);
      $li.data("score", i);
      $('.tower-0').append($li);
    }
  }

  render() {
    
  }

  clickTower() {

  }
}


module.exports = HanoiView;
