/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */


(function() {

    "use strict";

    var CANVAS_WIDTH = 450;        //px
    var CANVAS_HEIGHT = 650;       //px
    var GAME_WIDTH = CANVAS_WIDTH; //px
    var GAME_HEIGHT = 530;         //px

    function Game() {
        var canvas = document.getElementById("riksCanvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.context = canvas.getContext('2d');
        this.characterOne = new Character(); //TODO We initialized here and it will be defined in characterMenu()
        this.characterTwo = new Character();


        this.ressourcesLoader(['imagepng1', 'imagepng2']);
    }

    Game.prototype.ressourcesLoader = function(ressources) {
        this.images = Array();
        var ressourcesLength = ressources.length;
        for (var i = 0; i < ressources.length; i++) {
            this.images[ressources[i]] = new Image();
            var self = this;
            this.images[ressources[i]].onload = function() {
                if (i === ressourcesLength) {
                    return self.launchLoop();
                }
            };
            this.images[ressources[i]].src = "./img/" + ressources[i] + ".png";
        }
    };

    Game.prototype.launchLoop = function() {
        var self = this;
        this.intervalID = setInterval(function() {
                return self.run();
        }, 30);
    };

    Game.prototype.update = function() {
        this.characterOne.update();
        this.characterTwo.update();
        this.characterOne.stage.update();


    };

    Game.prototype.draw = function() {
        this.characterOne.draw(this.ctx, this.images);
        this.characterTwo.draw(this.ctx, this.images);
        this.characterOne.stage.draw(this.ctx, this.images);
    };

    Game.prototype.run = function() {
        this.update();
        this.draw();
    }

    window.onload = function() {
        new Game();
    };
})();