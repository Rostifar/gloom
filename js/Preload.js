gloom.Preload = function(game) {};

gloom.Preload.prototype = {

    preload: function () {
        this.load.image('orb', 'res/Water-Planet2.png');
        this.load.image('intro-background', 'res/creepy_forest_wallpaper.jpg');
        this.load.image('creep-woods', 'res/woods-creep.jpg');
        this.load.audio('water-drop', 'res/water-drops.mp3');
        this.load.image('tut-woods', 'res/tut-wall.jpg');
    },
    
    create: function() {
        this.game.state.start('MainMenu');
    }
};