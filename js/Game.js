gloom.Game = function(game) {
    this.background = null;
    this.orbsRemaining = null;
    this.levelNumber = null;
    this.currentOrb = null;
};

gloom.Game.prototype = {
    initGame: function() {
        this.levelNumber = 1;
        this.orbNumberSelection();
        this.orbFactory();
    },

    orbNumberSelection: function() {
        let max = Math.floor(((this.levelNumber + 2)^2)/2);
        let min = Math.floor(max/3);
        this.orbsRemaining = Math.floor(Math.random() * max) + min;
    },

    orbFactory: function() {
        var that = this;
        
        let maxX = game.world.x;
        let y = 0;
        const MIN_VEL = 100;
        that.currentOrb = that.game.add.sprite(Math.floor(Math.random() * maxX), y, 'orb');
        that.currentOrb.inputEnabled = true;
        that.currentOrb.events.onInputDown.add(function() {
            that.currentOrb.destroy();
            that.currentOrb = null;
        }, this);
        that.game.physics.arcade.enable(that.currentOrb);
        that.currentOrb.body.velocity.y = (MIN_VEL * ((that.levelNumber > 1) ? (1.25 * that.levelNumber) : (that.levelNumber)));
        console.log(that.currentOrb);
    },

    create: function () {
        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'creep-woods');
        this.background.anchor.setTo(0.5, 0.5);
        this.initGame();
    },

    update: function() {
        if (this.orbsRemaining === 0) {
            this.levelNumber = this.levelNumber + 1;
            this.orbNumberSelection();
        }

        if(this.currentOrb !== null && this.currentOrb.y === this.game.world.x) {
            this.currentOrb = null;
        }

        if (this.currentOrb === null) {
            this.orbFactory();
        }
    }
};
