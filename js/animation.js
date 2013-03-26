/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

"use strict";

function Animation(character) {
	var _character = character,
		_movement = new Movement(),
		_direction;

	Object.defineProperties(this, {
        character:{
            get:function () {
                return _character;
            },
            set:function (character) {
                _character = character;
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
        direction:{
            get:function () {
                return _direction;
            },
            set:function (direction) {
                _direction = direction;
            }
        }
    });
}

Animation.prototype.wait = function()
{
	if(this.direction == "right") {
		this.doAnimation(this.movement.waitRight);
	}
	else {
		this.doAnimation(this.movement.waitLeft);
	}
};

Animation.prototype.moveRight = function() {
	if(this.character.positionX+this.character.width<window.innerWidth) {
		this.character.positionX += 30;
	}
    this.doAnimation(this.movement.walkRight);
};

Animation.prototype.moveLeft = function() {
    if(this.character.positionX>0) {
        this.character.positionX -= 30;
    }
    this.doAnimation(this.movement.walkLeft);
};

Animation.prototype.doAnimation = function(movement)
{
	if(this.character.spriteX < movement[0] + movement[2] - 1 && this.character.spriteX >= movement[0]) {
		this.character.spriteX++;
	}
	else {
		this.character.spriteX = movement[0];
        this.character.spriteY = movement[1];
	}
};