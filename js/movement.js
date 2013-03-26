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
		_walkLeft = [],
        _jumpRight = [],
        _jumpLeft = [];
		
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
        jumpRight:{
            get:function () {
                return _jumpRight;
            },
            set:function (jumpRight) {
                _jumpRight = jumpRight;
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
        },
        jumpLeft:{
            get:function () {
                return _jumpLeft;
            },
            set:function (jumpLeft) {
                _jumpLeft = jumpLeft;
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
    this.jumpLeft = [24,0,6];
    this.jumpRight = [18,0,6];
};