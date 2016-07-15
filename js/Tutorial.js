gloom.Tutorial = function(game) {
    this.background = null;
};


gloom.Tutorial.prototype = {
    create: function() {
        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'tut-woods');
        this.background.anchor.setTo(0.5, 0.5);
        let tutText = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 4, "tutorial",
            {font: "60px Arial", fill: "#eeeeee", stroke: "#535353", strokeThickness: 15});
        tutText.anchor.setTo(0.5, 0.5);

        let tutInstructions = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "click the orbs before they disappear.",
            {font: "30px Arial", fill: "#eeeeee", stroke: "#535353", strokeThickness: 15});
        tutInstructions.anchor.setTo(0.5, 0.5);

        let continueText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + ((Math.abs(this.game.world.centerY - this.game.world.y)) / 2),
            "press any key to continue",
            {font: "30px Arial", fill: "#ff0000", stroke: "#535353", strokeThickness: 15});

        this.game.input.keyboard.onDownCallback = function() {
            game.state.start('Game');
        }
    }
};