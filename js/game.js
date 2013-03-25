(function() {

    "use strict";

    var CANVAS_WIDTH = window.innerWidth;     //px
    var CANVAS_HEIGHT = window.innerHeight;   //px
    var GAME_WIDTH = CANVAS_WIDTH; //px
    var GAME_HEIGHT = 530;         //px

    function Game() {
        var menu = new MainMenu(),
                self = this;

        self.initCanvas();

        menu.getMenuHtmlElement().onclick = function() {
            menu.hide();

            self.initGame();
        };
    }

    Game.prototype.initCanvas = function() {
        var canvas = document.getElementById("riksCanvas");
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        this.ctx = canvas.getContext('2d');
        this.ctx.font = "50pt Times";
        this.ctx.fillStyle = 'black';
    };

    Game.prototype.initGame = function() {
        this.characterOne = new Character('Ryu', 0.7);
        this.characterTwo = new Character('Ryu', 0.7);
        this.characterOne.positionX = 200;
        this.characterTwo.positionX = 800;
        this.stage = new Stage('test');
        new Input(this.characterOne, this.characterTwo);
        this.images =
                [
                    "./img/sprites/" + this.characterOne.name + ".png",
                    "./img/backgrounds/" + this.stage.name + ".jpg",
                    "./img/foregrounds/" + this.stage.name + ".jpg"
                ];
        this.percentageBar = 0;
        /*this.totalImageSize = 0;
         for(var i=0;i<this.images.length;i++) {
         this.totalImageSize += this.size(this.images[i]);
         console.log(this.size(this.images[i]));
         }*/
        this.load(0);
    };

    Game.prototype.update = function() {
        this.characterOne.update();
        this.characterTwo.update();
        this.stage.update(this.characterOne, this.characterTwo);
    };

    Game.prototype.draw = function() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.characterOne.draw(this.ctx);
        this.characterTwo.draw(this.ctx);
    };

    Game.prototype.launch = function() {
        var self = this;
        setInterval(function() {
            self.update();
        }, 150);

        setInterval(function() {
            self.draw();
        }, 30);
        this.stage.display();
        var canvas = document.getElementById("riksCanvas");
        canvas.style.zIndex = "100";
    };

    Game.prototype.load = function(i) {
        var img = new Image(),
                self = this;
        if (i < this.images.length) {
            img.onload = function() {
                self.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                self.ctx.fillText("Loading... " + truncate(self.percentageBar) + " %", CANVAS_WIDTH / 2 - 230, CANVAS_HEIGHT / 2);
                self.percentageBar += 100 / self.images.length;
                //self.percentageBar += self.size(self.images[i]) * 100/self.totalImageSize;
                self.load(i + 1);
            };
            img.src = this.images[i];
        }
        else {
            this.launch();
        }
    };

    /*Game.prototype.size = function(src) {
     var xhr = new XMLHttpRequest();
     xhr.open('HEAD', src, true);
     xhr.onreadystatechange = function() {
     if(xhr.readyState == 4) {
     if(xhr.status == 200) {
     return parseInt(xhr.getResponseHeader('Content-Length'));
     }
     else {
     return 0;
     }
     }
     };
     xhr.send(null);
     };*/

    window.onload = function() {
        new Game();
    };

    function truncate(n) {
        return Math[n > 0 ? "floor" : "ceil"](n);
    }
    ;

})();