function Character(name)
{
	this._name = name;
    this._img = new Image();
	this._img.onerror = function(){console.log("Impossible de charger l'image");};
	this._img.src = "sprites/"+this._name+".png";
	this._bmpAnimation;
};

Character.prototype.get_img = function()
{
	return this._img;
};

Character.prototype.get_bmpAnimation = function()
{
	return this._bmpAnimation;
};

Character.prototype.init_bmpAnimation = function(spriteSheet)
{
	this._bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
	this._bmpAnimation.regX = this._bmpAnimation.spriteSheet.frameWidth/2 | 0;
	this._bmpAnimation.regY = this._bmpAnimation.spriteSheet.frameHeight/2 | 0;
	this._bmpAnimation.name = this._name;
	this._bmpAnimation.direction = 90;
	this._bmpAnimation.vX = 3;
	this._bmpAnimation.vY = 0;
	this._bmpAnimation.x = 32;
	this._bmpAnimation.y = 200;
	this._bmpAnimation.currentFrame = 1;
};