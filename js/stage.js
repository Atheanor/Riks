/* B3 2013 London - Riks - Html5 & JavaScript Experimentation
 * 118243 Léo Benoist
 * 125656 David Calmel
 * 126359 Alexis Vernot
 * 126752 Germain Chapot
 */

function Stage(background, foreground) {
    var _background = new Image(),
            _foreground = new Image(),
            _posCamBacX = 0,
            _posCamBacY = 0,
            _posCamForX = 0,
            _posCamForY = 0;

    Object.defineProperties(this, {
        background: {
            get: function() {
                return _background;
            },
            set: function(background) {
                _background = background;
            }
        },
        foreground: {
            get: function() {
                return _foreground;
            },
            set: function(foreground) {
                _foreground = foreground;
            }
        },
        posCamBacX: {
            get: function() {
                return _posCamBacX;
            },
            set: function(posCamBacX) {
                _posCamBacX = posCamBacX;
            }
        },
        posCamBacY: {
            get: function() {
                return _posCamBacY;
            },
            set: function(posCamBacY) {
                _posCamBacY = posCamBacY;
            }
        },
        posCamForX: {
            get: function() {
                return _posCamForX;
            },
            set: function(posCamForX) {
                _posCamForX = posCamForX;
            }
        },
        posCamForY: {
            get: function() {
                return _posCamForY;
            },
            set: function(posCamForY) {
                _posCamForY = posCamForY;
            }
        }
    });

    this.background.src = "./img/backgrounds/" + background + ".jpg";
    this.foreground.src = "./img/backgrounds/" + foreground + ".jpg";
}

Stage.prototype.update = function() {
};

Stage.prototype.draw = function(context) {

    context.drawImage(this.background, this.background.width / 4 + this.posCamBacX, this.posCamBacY,
            this.background.width / 2, this.background.height, 0, 0, window.innerWidth, window.innerHeight);

    context.drawImage(this.foreground, this.foreground.width / 4 + this.posCamForX, this.posCamForY,
            this.foreground.width / 2, this.foreground.height, 0, window.innerHeight * 4 / 5, window.innerWidth, window.innerHeight / 5);
};