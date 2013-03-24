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

Stage.prototype.update = function(charaOne, charaTwo) {
	if(charaOne.positionX > charaTwo.positionX) {
		this.update(charaTwo,charaOne);
	}
	else {
		var margin = 10,
			screenWidth = window.innerWidth,
			foregroundPosX = this.foreground.offsetLeft,
			backgroundPosX = this.background.offsetLeft;
			
		if(charaOne.positionX <= margin && 
		charaTwo.positionX + charaTwo.width + margin < screenWidth &&
		foregroundPosX < 0) {
			//Scroll Left
			foregroundPosX += 30;
			backgroundPosX += 5;
			charaTwo.positionX += 30;
		} 
		else if(charaTwo.positionX + charaTwo.width + margin >= screenWidth && 
		charaOne.positionX > margin &&
		foregroundPosX > -(2*window.innerWidth)) {	
			//Scroll Right
			foregroundPosX -= 30;
			backgroundPosX -= 5;
			charaOne.positionX -= 30;
		}
		this.foreground.style.left = (foregroundPosX).toString() + "px";
		this.background.style.left = (backgroundPosX).toString() + "px";
	}
};

/*Stage.prototype.draw = function (context) {

	//BACKGROUND
    context.drawImage(this.background, //Image read
	
	//Position where we start readind the image
	0, //X
	0, //Y
					  
	//Width and height of what's read in the image
	this.background.width,
	this.background.height, 
					  
	//Where we display the image on the canvas
	0, //X
	0, //Y
					  
	//Dimensions of the image displayed
	window.innerWidth*2, 
	window.innerHeight);
	
	//FOREGROUND
	context.drawImage(this.foreground, //Image read
	
	//Position where we start readind the image
	0, //X
	0, //Y
					  
	//Width and height of what's read in the image
	this.foreground.width, 
	this.foreground.height, 
					  
	//Where we display the image on the canvas
	0, //X
	window.innerHeight*5/6, //Y
					  
	//Dimensions of the image displayed
	window.innerWidth*2, 
	window.innerHeight/6);
};*/