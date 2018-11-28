class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.clickDisc = false;
    this.setupTowers();
    this.render();

    this.$el.on('click', 'ul', (e) => {
      let $ul = $(e.target);
      this.clickTower($ul);
    });

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

  clickTower(tower) {
    //check if ivar is true
    //if not, take 1st li in tower and store as ivar
    //otherwise, make move on 2nd click

    if (this.clickDisc) {
      let $li = $(`<li class="size-${this.clickDisc}">`);
      tower.prepend($li);


      this.clickDisc = false;
    } else {
      let firstChild = $(`${tower}:first-child`);
      this.clickDisc = firstChild.data("score");
      firstChild.remove();
    }
  }
}


module.exports = HanoiView;
