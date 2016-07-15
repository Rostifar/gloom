gloom.MainMenu = function (game) {
    this.background = null;
};

gloom.MainMenu.prototype = {

    create: function() {
        this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'intro-background');
        gloom.waterDrop = this.game.add.audio('water-drop');
        gloom.waterDrop.loop = true;
        gloom.waterDrop.play();
        this.background.anchor.setTo(0.5, 0.5);
        let gloomText = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 2, "gloom",
            {font: "60px Arial", fill: "#eeeeee", stroke: "#535353", strokeThickness: 15});
        gloomText.anchor.setTo(0.5, 0.5);
        let continueText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + ((Math.abs(this.game.world.centerY - this.game.world.y)) / 2),
            "press any key to continue",
            {font: "30px Arial", fill: "#ff0000", stroke: "#535353", strokeThickness: 15});

        this.game.input.keyboard.onDownCallback = function() {
            game.state.start('Tutorial');
        }

    }
};