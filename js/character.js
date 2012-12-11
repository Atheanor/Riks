/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

"use strict";

function Character(ratio) {
    var _name,
        _sprite,
        _masque,
        _spriteX = 0, 
        _spriteY = 0,
        _stage = new Stage(),
        _life = 100,
        _weight = 60,
        _height = parseFloat((9*window.innerHeight)/10 * ratio),
        _width = _height * (403/622),
        _positionX = 0, //Initial position
        _positionY = (9*window.innerHeight)/10 - _height, //Initial position
        _combo,
        _handicap;

    Object.defineProperties(this, {
        name:{
            get:function () {
                return _name;
            },
            set:function (name) {
                _name = name;
            }
        },
        sprite:{
            get:function () {
                return _sprite;
            },
            set:function (sprite) {
                _sprite = sprite;
            }
        },
        masque:{
            get:function () {
                return _masque;
            },
            set:function (masque) {
                _masque = masque;
            }
        },
        positionX:{
            get:function () {
                return _positionX;
            },
            set:function (positionX) {
                _positionX = positionX;
            }
        },
        positionY:{
            get:function () {
                return _positionY;
            },
            set:function (positionY) {
                _positionY = positionY;
            }
        },
        spriteX:{
            get:function () {
                return _spriteX;
            },
            set:function (spriteX) {
                _spriteX = spriteX;
            }
        },
        spriteY:{
            get:function () {
                return _spriteY;
            },
            set:function (spriteY) {
                _spriteY = spriteY;
            }
        },
        stage:{
            get:function () {
                return _stage;
            }
        },
        life:{
            get:function () {
                return _life;
            },
            set:function (life) {
                _life = life;
            }
        },
        weight:{
            get:function () {
                return _weight;
            },
            set:function (weight) {
                _weight = weight;
            }
        },
        height:{
            get:function () {
                return _height;
            },
            set:function (height) {
                _height = height;
            }
        },
        width:{
            get:function () {
                return _width;
            },
            set:function (width) {
                _width = width;
            }
        },
        combo:{
            get:function () {
                return _combo;
            },
            set:function (combo) {
                _combo = combo;
            }
        },
        handicap:{
            get:function () {
                return _handicap;
            },
            set:function (handicap) {
                _handicap = handicap;
            }
        }
    });
}



Character.prototype.moveLeft = function() {
    this.positionX -= 5;
};

Character.prototype.moveRight = function() {
    this.positionX += 5;
};

Character.prototype.update = function () {

};

Character.prototype.draw = function (context, image) {
    context.clearRect(0,0,window.innerWidth, window.innerHeight);
    context.drawImage(image,403*this.spriteX, 622*this.spriteY, 403, 622, this.positionX, this.positionY, this.width, this.height);
};

