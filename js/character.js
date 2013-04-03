/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

"use strict";

function Character(name, ratio, animation) {
    var _name = name,
		_img = new Image(),
        _spriteX = 0,
        _spriteY = 0,
        _isMoving = false,
		_direction = "right",
		_blockedLeft = false,
		_blockedRight = false,
        _life = 100,
        _weight = 60,
        _widthSprite = 485,
        _heightSprite = 670,
        _height = parseFloat((9*window.innerHeight)/10 * ratio),
        _width = _height * (_widthSprite/_heightSprite),
        _positionX = 0, //Initial position
        _positionY = (9*window.innerHeight)/10 - _height, //Initial position
        _movement = new Movement(),
        _movementDone = true,
        _combo,
        _handicap,
        _animation = animation;

    Object.defineProperties(this, {
        name:{
            get:function () {
                return _name;
            },
            set:function (name) {
                _name = name;
            }
        },
		img:{
            get:function () {
                return _img;
            },
            set:function (img) {
                _img = img;
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
		direction:{
            get:function () {
                return _direction;
            },
            set:function (direction) {
                _direction = direction;
            }
        },
		blockedLeft:{
            get:function () {
                return _blockedLeft;
            },
            set:function (blockedLeft) {
                _blockedLeft = blockedLeft;
            }
        },
		blockedRight:{
            get:function () {
                return _blockedRight;
            },
            set:function (blockedRight) {
                _blockedRight = blockedRight;
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
        },
        animation:{
            get:function () {
                return _animation;
            },
            set:function (animation) {
                _animation = animation;
            }
        }
    });
	this.img.src = "./img/sprites/"+this.name+".png";
    this.initAnimation();
}

Character.prototype.initAnimation = function()
{
    this.animation = new Animation(this);
};

Character.prototype.update = function() {
    if(!this.isMoving) {
		this.animation.wait();
    }
	else {
		/*if(this.direction == "right") {
			this.moveRight();
		}
		else {
			this.moveLeft();
		}
		this.isMoving = false;*/
	}
};

Character.prototype.draw = function(context) {
    context.drawImage(this.img, this.widthSprite * this.spriteX, this.heightSprite * this.spriteY, 
	this.widthSprite, this.heightSprite, this.positionX, this.positionY, this.width, this.height);
	context.strokeStyle = "red";
	context.strokeRect(this.positionX, this.positionY, this.width, this.height);
};


// NOTE : Code to flip image to draw below
// ctx.translate(img.width-1, img.height-1);