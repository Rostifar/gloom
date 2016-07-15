var gloom = {};

gloom.Boot = function(game) {

};

gloom.Boot.prototype = {

    scaleStage: function() {
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
    },

    init: function () {
        this.scale.pageAlignVertically = true;
        this.scale.pageAlignHorizontally = true;
        this.scale.refresh();
    },

    create: function() {
        this.state.start('Preload');
    }
}