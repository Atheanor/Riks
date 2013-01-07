/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

/* This class is used to define all movements that a character can do */

"use strict";

function Movement() {
	 
	var	_waitRightRight = [],
		_walkRight = [],
		_init = this.initMovement();

	Object.defineProperties(this, {
		waiRight:{
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
        }
	});
};

Movement.prototype.initMovement = function()
{
	/* An array has to look like this : [Line,Raw,Number of Sprite] */
	this.waitRight = [0,0,4];
	this.walkRight = [1,0,5];
};