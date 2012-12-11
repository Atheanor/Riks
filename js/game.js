/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */


(function() {

    "use strict";

    var CANVAS_WIDTH = window.innerWidth;        //px
    var CANVAS_HEIGHT = window.innerHeight;       //px
    var GAME_WIDTH = CANVAS_WIDTH; //px
    var GAME_HEIGHT = 530;         //px

    function Game() {
        var canvas = document.getElementById("riksCanvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.ctx = canvas.getContext('2d');
        this.characterOne = new Character(0.9); //TODO We initialized here and it will be defined in characterMenu()
        //this.characterTwo = new Character();


        this.ressourcesLoader(['Ryu']);
    }

    Game.prototype.ressourcesLoader = function(ressources) {
        this.images = [];
        var ressourcesLength = ressources.length;
        for (var i = 0; i < ressources.length; i++) {
            this.images[ressources[i]] = new Image();
            var self = this;
            this.images[ressources[i]].onload = function() {
                if (i === ressourcesLength) {
                    return self.launchLoop();
                }
            };
            this.images[ressources[i]].src = "./sprites/" + ressources[i] + ".png";
        }
    };

    Game.prototype.launchLoop = function() {
        var self = this;
        this.intervalID = setInterval(function() {
                return self.run();
        }, 2000);
    };

    Game.prototype.update = function() {
        this.characterOne.update();
        //this.characterTwo.update();
        //this.characterOne.stage.update();


    };

    Game.prototype.draw = function() {
        this.characterOne.draw(this.ctx, this.images['Ryu']);
        //this.characterTwo.draw(this.ctx, this.images);
        //this.characterOne.stage.draw(this.ctx, this.images);
    };

    Game.prototype.run = function() {
        this.update();
        this.draw();
    }

    window.onload = function() {
        new Game();
        document.body.width = window.innerWidth;

        document.onkeydown = function(event)
        {

            switch(event.keyCode)
            {
                /* left */
                case 37 :
                    this.characterOne.moveLeft();
                break;

                /* right */
                case 39 :
                    this.characterOne.moveRight();
                break;
            }

        
    }

    };
})();