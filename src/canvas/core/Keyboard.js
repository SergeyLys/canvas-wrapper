export default class KeyboardEvents {
    constructor() {
        const keys = {
            'a':	        65,
            'b':	        66,
            'c':	        67,
            'd':	        68,
            'e':	        69,
            'f':	        70,
            'g':	        71,
            'h':	        72,
            'i':	        73,
            'j':	        74,
            'k':	        75,
            'l':	        76,
            'm':	        77,
            'n':	        78,
            'o':	        79,
            'p':	        80,
            'q':	        81,
            'r':	        82,
            's':	        83,
            't':	        84,
            'u':	        85,
            'v':	        86,
            'w':	        87,
            'x':	        88,
            'y':	        89,
            'z':	        90,
            'ArrowUp':      38,
            'ArrowRight':   39,
            'ArrowDown':    40,
            'ArrowLeft':    37,
            "'":            222,
            '[':            219,
            ']':            221,
            '/':            191,
            'Shift':        16,
            'Control':      17,
            'Alt':          18,
        };
        this.keyDown = {};

        this._setKey = this._setKey.bind(this);
        this._clearKey = this._clearKey.bind(this);

        this.getKeys = function () {
            return keys;
        };

        this._addEventListeners();
    }

    _addEventListeners() {
        document.addEventListener('keydown', this._setKey);
        document.addEventListener('keyup', this._clearKey);
    }

    isKeyDown(keyName) {
        const keys = this.getKeys();
        return this.keyDown[keys[keyName]] === true;
    }

    _clearKey(event) {
        this.keyDown[event.keyCode] = false;
    }

    _setKey(event) {
        this.keyDown[event.keyCode] = true;
    }
}