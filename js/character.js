/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

"use strict";

function Character() {
    var _name,
        _sprite,
        _masque,
        _positionX = 0, //Initial position
        _positionY = 0, //Initial position
        _stage = new Stage(),
        _life = 100,
        _weight = 60,
        _combo,
        _handicap;

    Object.defineProperties(this, {
        name:{
            get:function () {
                return _name;
            },
            set:function (name) {
                _name = name;
            }
        },
        sprite:{
            get:function () {
                return _sprite;
            },
            set:function (sprite) {
                _sprite = sprite;
            }
        },
        masque:{
            get:function () {
                return _masque;
            },
            set:function (masque) {
                _masque = masque;
            }
        },
        positionX:{
            get:function () {
                return _positionX;
            },
            set:function (positionX) {
                _positionX = positionX;
            }
        },
        positionY:{
            get:function () {
                return _positionY;
            },
            set:function (positionY) {
                _positionY = positionY;
            }
        },
        stage:{
            get:function () {
                return _stage;
            }
        },
        life:{
            get:function () {
                return _life;
            },
            set:function (life) {
                _life = life;
            }
        },
        weight:{
            get:function () {
                return _weight;
            },
            set:function (weight) {
                _weight = weight;
            }
        },
        combo:{
            get:function () {
                return _combo;
            },
            set:function (combo) {
                _combo = combo;
            }
        },
        handicap:{
            get:function () {
                return _handicap;
            },
            set:function (handicap) {
                _handicap = handicap;
            }
        }
    });
}

Character.prototype.update = function () {

};

Character.prototype.draw = function (context) {

};

