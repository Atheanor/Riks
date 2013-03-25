/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

"use strict";

function Input(characterOne, characterTwo) {
    this.characterOne = characterOne;
    this.characterTwo = characterTwo;
    this.profiles = {
        profileOne: {
            character: this.characterOne,
            keyCodes: {
                up: [87, 90], //W Z
                down: [83], //S
                left: [65, 81], //Q A
                right: [68], //D
                actionOne: [69],
                actionTwo: [82]
            }
        },
        profileTwo: {
            character: this.characterTwo,
            keyCodes: {
                up: [38],
                down: [40],
                left: [37],
                right: [39],
                actionOne: [1], //todo
                actionTwo: [2]//todo
            }
        }
    };
    this.eval();
}

Input.prototype.doAction = function(event, type, character) {
    switch (event.type) {
        case 'keydown' :
            switch (type) {
                case 'up' :
                    character.direction = type;
                    character.isMoving = true;
                    break;
                case 'down' :
                    character.direction = type;
                    character.isMoving = true;
                    break;
                case 'left' :
                    character.direction = type;
                    character.isMoving = true;
                    break;
                case 'right' :
                    character.direction = type;
                    character.isMoving = true;
                    break;
                case 'actionOne' :
                    character.direction = type;
                    character.isMoving = true;
                    break;
                case 'actionTwo' :
                    character.direction = type;
                    character.isMoving = true;
                    break;
            }
            break;
            
        case 'keyup' :
            switch (type) {
                case 'up' :

                    break;
                case 'down' :

                    break;
                case 'left' :

                    break;
                case 'right' :

                    break;
                case 'actionOne' :

                    break;
                case 'actionTwo' :

                    break;
            }
            break;
    }
};

Input.prototype.eval = function() {
    if (Gamepad.supported) {
        this.gamepadListener();
    }
    this.keyListener();
};

Input.prototype.keyListener = function() {
    var self = this;
    document.onkeydown = function(event){keyEvent(self, event);};
    document.onkeyup = function(event){keyEvent(self, event);};
};

function keyEvent(self, event) {
    var keyCode = event.keyCode;
    for (var i in self.profiles) {
        var profile = self.profiles[i];
        var keys = self.profiles[i].keyCodes;
        for (var j in keys) {
            var keysLength = keys[j].length;
            for (var k = 0; k < keysLength; k++) {
                if (keys[j][k] === keyCode) {
                    if (profile.character) {
                        self.doAction(event, j, profile.character);
                    }
                    break;
                }
            }

        }
    }
}



Input.prototype.gamepadListener = function() {
    var self = this;

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function() {
            return window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback, element) {
                        window.setTimeout(callback, 1000 / 60);
                    };
        })();
    }

    var names = [
        'leftStick',
        'rightStick',
        'faceButton0',
        'faceButton1',
        'faceButton2',
        'faceButton3',
        'leftShoulder0',
        'rightShoulder0',
        'leftShoulder1',
        'rightShoulder1',
        'select',
        'start',
        'leftStickButton',
        'rightStickButton',
        'dpadUp',
        'dpadDown',
        'dpadLeft',
        'dpadRight'
    ];

    function update() {
        window.requestAnimationFrame(update);

        var pads = Gamepad.getStates();
        for (var i = 0; i < pads.length; ++i) {
            var pad = pads[i];
            if (pad) {
                if (pad.leftStickX < -0.5) {
                    self.character.direction = "left";
                    self.character.isMoving = true;
                }
                if (pad.leftStickX > 0.5) {
                    self.character.direction = "right";
                    self.character.isMoving = true;
                }
            }
        }
    }

    update();
};