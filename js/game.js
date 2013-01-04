/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */


(function() {

    "use strict";

    var CANVAS_WIDTH = window.innerWidth;     //px
    var CANVAS_HEIGHT = window.innerHeight;   //px
    var GAME_WIDTH = CANVAS_WIDTH; //px
    var GAME_HEIGHT = 530;         //px

    function Game() {
        var canvas = document.getElementById("riksCanvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.ctx = canvas.getContext('2d');

        //TODO: Need to moved. 
        this.ctx.font = "50pt Times";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText("Loading...", 10, CANVAS_HEIGHT / 2);

        this.characterOne = new Character(/*ratio*/0.7);
        new Input(this.characterOne);
        //this.characterTwo = new Character(/*ratio*/0.7);

        var ressources = ['Ryu'];
        this.ressourcesLoader(ressources);
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
            this.images[ressources[i]].src = "./img/sprites/" + ressources[i] + ".png";
        }
    };

    Game.prototype.launchLoop = function() {
        var self = this;
        this.intervalID = setInterval(function() {
            return self.run();
        }, 30);
    };

    Game.prototype.run = function() {
        this.update();
        this.draw();
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

    function initCanvas() {
        var canvas = document.getElementById("riksCanvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.ctx = canvas.getContext('2d');
    }

    /*
    **LaunchGame
    */
    document.getElementById('launch-solo-game').onclick = function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('background-menu').style.display = 'none';
        new Game();
    }

    window.onload = function() {
        initCanvas();
    }

})();