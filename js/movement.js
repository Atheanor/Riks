/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

/* This class is used to define all movements that a character can do */

"use strict";

function Movement() {
	 
	var	_waitRight = [],
		_walkRight = [],
		_waitLeft = [],
		_walkLeft = [];
		
	Object.defineProperties(this, {
		waitRight:{
            get:function () {
                return _waitRight;
            },
            set:function (waitRight) {
                _waitRight = waitRight;
            }
        },
        walkRight:{
            get:function () {
                return _walkRight;
            },
            set:function (walkRight) {
                _walkRight = walkRight;
            }
        },
		waitLeft:{
            get:function () {
                return _waitLeft;
            },
            set:function (waitLeft) {
                _waitLeft = waitLeft;
            }
        },
        walkLeft:{
            get:function () {
                return _walkLeft;
            },
            set:function (walkLeft) {
                _walkLeft = walkLeft;
            }
        }
	});
	var _init = this.initMovement();
};

Movement.prototype.initMovement = function () {
	/* An array has to look like this : [Line,Raw,Number of Sprite(s)] */
	this.waitRight = [0,0,4];
	this.waitLeft = [5,0,4];
	this.walkRight = [0,1,4];
	this.walkLeft = [5,1,4];
};