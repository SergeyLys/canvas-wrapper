import Figure from './Figure';

export default class AppCircle extends Figure {
    constructor(...props) {
        super(...props);

        this.typeStyle = props[1].typeStyle;
        this.radius = props[1].radius;

        this._setPositions();
        this._paint();
    }

    _paint() {
        this.ctx.beginPath();
        this.ctx.arc(this.x+this.radius, this.y+this.radius, this.radius, 0, Math.PI * 2, true);

        switch (this.typeStyle) {
            case 'fill': {
                this.ctx.fillStyle = this.fillColor;
                this.ctx.closePath();
                this.ctx.fill();
            }
                break;
            case 'stroke': {
                this.ctx.strokeStyle = this.strokeColor;
                this.ctx.closePath();
                this.ctx.stroke();
            }
                break;
            default: throw 'Parameter "typeStyle" of Circle element is required';
        }

    }

    move(...props) {
        this.ctx.clearRect(this.x, this.y, this.radius*2, this.radius*2);
        super.move(...props);
        this._paint();
    }

    infiniteYMoving(...props) {
        super.infiniteYMoving(...props);
        this._paint();
    }

    infiniteXMoving(...props) {
        super.infiniteXMoving(...props);
        this._paint();
    }
}