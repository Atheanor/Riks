var canvas;
var stage;
var screen_width;
var screen_height;
var ryu;
var pressKey = false;
var firstPressKey = false;
var compteur = 0;

window.onload = function()
{
	init();
	if(canvas.getContext)
	{
		document.body.onkeydown = function(event)
		{
			if(event.keyCode == 37 && !pressKey)
			{
				pressKey = true;
				ryu.get_bmpAnimation().direction = -90;
			}
			else if(event.keyCode == 39 && !pressKey)
			{
				pressKey = true;
				ryu.get_bmpAnimation().direction = 90;
			}
		}
		
		document.body.onkeyup = function(event)
		{
			if(event.keyCode == 37)
			{
				ryu.get_bmpAnimation().gotoAndStop("walk_h");
				pressKey = false;
				firstPressKey = false;
			}
			else if(event.keyCode == 39)
			{
				ryu.get_bmpAnimation().gotoAndStop("walk");
				pressKey = false;
				firstPressKey = false;
			}
		}	
	}
	else
	{
		alert('Canvas marche paaaaaaaaas...');
	}
};

function init() 
{
	ryu = new Character("ryu");
	canvas = document.getElementById("game");
	ryu.get_img().onload = startGame();
}

function reset()
{
	stage.removeAllChildren();
	createjs.Ticker.removeAllListeners();
	stage.update();
}

function startGame()
{
	var img = ryu.get_img();
	stage = new createjs.Stage(canvas);
	screen_width = canvas.width;
	screen_height = canvas.height;
	var spriteSheet = new createjs.SpriteSheet(
	{
		images: [img],
		frames: { width: 50, height: 110, regX: 32, regY: 32 },
		animations: 
		{
			walk: [0, 4, "walk", 4]
		}
	});
	//Bon maintenant ce machin plante, je sais pas pourquoi...(du coup, pas de frames inversées)
	//createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, false, false);
	ryu.init_bmpAnimation(spriteSheet);
	stage.addChild(ryu.get_bmpAnimation());
	createjs.Ticker.addListener(window);
	createjs.Ticker.useRAF = true;
	createjs.Ticker.setFPS(25);
}

function tick()
{
	if(pressKey)
	{
		if(ryu.get_bmpAnimation().x >= screen_width - 16)
		{
			ryu.get_bmpAnimation().direction = -90;
		}
		if(ryu.get_bmpAnimation().x < 16) 
		{
			ryu.get_bmpAnimation().direction = 90;
		}
		if (ryu.get_bmpAnimation().direction == 90)
		{
			if(firstPressKey)
			{
				ryu.get_bmpAnimation().gotoAndPlay("walk");
			}
			else
			{
				ryu.get_bmpAnimation().x += ryu.get_bmpAnimation().vX;
				ryu.get_bmpAnimation().y += ryu.get_bmpAnimation().vY;
			}
		}
		else
		{
			if(firstPressKey)
			{
				ryu.get_bmpAnimation().gotoAndPlay("walk_h");
			}
			else
			{
				ryu.get_bmpAnimation().x -= ryu.get_bmpAnimation().vX;
				ryu.get_bmpAnimation().y -= ryu.get_bmpAnimation().vY;
			}
		}
		if(!firstPressKey)
		{
			compteur++;
			compteur%=10;
			if(compteur==0)
			{
				firstPressKey = true;
			}
		}
		else
		{
			firstPressKey = false;
		}
		pressKey = false;
	}
	stage.update();
}