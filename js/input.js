/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

"use strict";

function Input(character) {
    this.character = character;
    this.eval();
}

Input.prototype.eval = function() {
    // TODO: Do something better because it's block firefox with gamepad, 
    // you need to verify if gamepas api is supported and if a gamepad is connected
    // 
    if (Gamepad.supported) {
        this.gamepadListener();
    }
    else {
        this.keyListener();
    }
};

Input.prototype.keyListener = function() {
    var self = this;
    document.onkeydown = function(event) {
        switch (event.keyCode) {
            /* left */
            case 37 :
                self.character.direction = "left";
                self.character.isMoving = true;
                break;

                /* right */
            case 39 :
                self.character.direction = "right";
                self.character.isMoving = true;
                break;

            default:
                break;
        }
    };
};

Input.prototype.gamepadListener = function() {
    var self = this;

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function() {
            return window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(/* function FrameRequestCallback */callback, /* DOMElement Element */element) {
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