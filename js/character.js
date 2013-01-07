/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

"use strict";

function Character(ratio, movement) {
    var _name,
        _sprite,
        _masque,
        _spriteX = 0, 
        _spriteY = 0,
        _stage = new Stage(),
        _isMoving = false,
        _life = 100,
        _weight = 60,
        _widthSprite = 485,
        _heightSprite = 670,
        _height = parseFloat((9*window.innerHeight)/10 * ratio),
        _width = _height * (_widthSprite/_heightSprite),
        _positionX = 0, //Initial position
        _positionY = (9*window.innerHeight)/10 - _height, //Initial position
        _movement = movement,
        _movementDone = true,
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
        isMoving:{
            get:function () {
                return _isMoving;
            },
            set:function (isMoving) {
                _isMoving = isMoving;
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

        heightSprite:{
            get:function () {
                return _heightSprite;
            },
            set:function (height) {
                _heightSprite = heightSprite;
            }
        },
        widthSprite:{
            get:function () {
                return _widthSprite;
            },
            set:function (width) {
                _widthSprite = widthSprite;
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
        movement:{
            get:function () {
                return _movement;
            },
            set:function (movement) {
                _movement = movement;
            }
        },
        movementDone:{
            get:function () {
                return _movementDone;
            },
            set:function (movementDone) {
                _movementDone = movementDone;
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
    this.isMoving = true;
    this.positionX -= 5;
};

Character.prototype.moveRight = function() {
    this.isMoving = true;
    this.positionX += 5;
    this.doMovement(this.movement.walkRight);
};

Character.prototype.wait = function()
{
    this.isMoving = false;
    this.doMovement(this.movement.waitRight);
};

Character.prototype.update = function() {
    if(!this.isMoving && this.movementDone)
    {
        this.doMovement(this.movement.waitRight);
    }
};

Character.prototype.draw = function(context, image) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.drawImage(image, this.widthSprite * this.spriteX, this.heightSprite * this.spriteY, this.widthSprite, this.heightSprite, this.positionX, this.positionY, this.width, this.height);
};

Character.prototype.doMovement = function(movement)
{
    var self = this;
    if(this.movementDone)
    {
        this.movementDone = false;
        this.spriteX = movement[0];
        this.spriteY = movement[1]; 
    }
    for(var i = 1 ; i < movement[2] ; i++)
    {

        setTimeout(function(){
            self.refreshMovement(movement);
        },i*200);
    }

};

Character.prototype.refreshMovement = function(movement)
{
    var self = this;
    if(++this.spriteX == movement[0] + movement[2] - 1)
        setTimeout(function(){ self.movementDone = true;},200);
};

