/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */
 
"use strict";

function Stage(name) 
{
	var _name = name,
		_foreground = new Image(),
		_background = new Image;
		
	Object.defineProperties(this, {
        name:{
            get:function () {
                return _name;
            },
            set:function (name) {
                _name = name;
            }
        },
		foreground:{
            get:function () {
                return _foreground;
            },
            set:function (foreground) {
                _foreground = foreground;
            }
		},
		background:{
            get:function () {
                return _background;
            },
            set:function (background) {
                _background = background;
            }
		}
    });
	this.foreground.src = "./img/foregrounds/"+this.name+".jpg";
	this.background.src = "./img/backgrounds/"+this.name+".jpg";
}

Stage.prototype.display = function() {

	this.background.width = window.innerWidth*2;
	this.background.height = window.innerHeight;
	this.background.style.position = "absolute";
	this.background.style.top = "0px";
	this.background.style.left = (-(window.innerWidth/2)).toString() + "px";
	this.background.style.zIndex = "-2";

	this.foreground.width = window.innerWidth*2;
	this.foreground.height = window.innerHeight/6;
	this.foreground.style.position = "absolute";
	this.foreground.style.top = (window.innerHeight*5/6).toString() + "px";
	this.foreground.style.left = (-(window.innerWidth/2)).toString() + "px";
	this.foreground.style.zIndex = "-1";

	document.body.appendChild(this.background);
	document.body.appendChild(this.foreground);
};

Stage.prototype.update = function(charaLeft, charaRight) {
	// We assure that the first character is the left one
	if(charaLeft.positionX > charaRight.positionX) {
		// If not
		this.update(charaRight,charaLeft);
	} else {

		var margin = 60, // Margin needed between a character and the screen
			screenWidth = window.innerWidth, // Width of the canvas displayed
			foregroundPosX = this.foreground.offsetLeft, 
			backgroundPosX = this.background.offsetLeft;
			
		if(charaLeft.positionX <= margin && // The left character is moving close to the left border of the screen
		charaRight.positionX + charaRight.width + margin + 10 < screenWidth && // Checking if the right one isn't blocking the other side
		foregroundPosX < -(margin)) { // The left border of the foreground has to be at a little distance from the left border of the canvas
			//Scroll Left
			foregroundPosX += 30;
			backgroundPosX += 6;
			charaRight.positionX += 30;
			charaLeft.positionX += 30;
	
		}
		else if(charaRight.positionX + charaRight.width + margin >= screenWidth && // The right character is moving close to the right border
		charaLeft.positionX > margin + 10 && // While the left character is not blocking the other border
		foregroundPosX - margin > -(screenWidth)) { // The right of the foreground has to be a margin away from the right of the canvas
			//Scroll Right
			foregroundPosX -= 30;
			backgroundPosX -= 6;
			charaLeft.positionX -= 30;
			charaRight.positionX -= 30;
			
		}
		this.foreground.style.left = (foregroundPosX).toString() + "px";
		this.background.style.left = (backgroundPosX).toString() + "px";
	}
};