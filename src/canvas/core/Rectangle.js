import Figure from './Figure';

export default class AppRectangle extends Figure {
    constructor(...props) {
        super(...props);
        this.sideX = props[1].sideX || null;
        this.sideY = props[1].sideY || null;

        this._setPositions();
        this._errorHandler();
        this._paint();
    }

    _errorHandler() {
        if (this.x === null) {
            throw 'Parameter "x" of rectangle is required'
        }

        if (this.y === null) {
            throw 'Parameter "y" of rectangle is required'
        }

        if (this.sideX === null || this.sideY === null) {
            throw `Parameter ${this.sideX ? "sideY" : "sideX"} of rectangle is required`;
        }

        if (this.sideX < 1 || this.sideY < 1) {
            throw `Parameter ${this.sideX < 1 ? "sideX" : "sideY"} of rectangle is invalid`;
        }
    }

    move(...props) {
        this.ctx.clearRect(this.x, this.y, this.sideX, this.sideY);
        super.move(...props);
    }

    moveTo(coordX, coordY) {

        this.ctx.clearRect(this.x, this.y, this.sideX, this.sideY);

        this.x = (this.x - this.sideX/2) + coordX;
        this.y = (this.y - this.sideY/2) + coordY;

        this._paint();
    }

    _paint() {
        super._paint();
        this.ctx.fillRect(this.x, this.y, this.sideX, this.sideY);
    }
}