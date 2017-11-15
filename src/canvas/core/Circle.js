import Figure from './Figure';

export default class AppCircle extends Figure {
    constructor(...props) {
        super(...props);

        this.typeStyle = props[1].typeStyle;
        this.radius = props[1].radius;

        this._setPositions();

        this.angle = 90;
        this.speed = 1;

        this.radian = this.angle * Math.PI/180;
        this.vx = Math.cos(this.radian)*this.speed;
        this.vy = Math.sin(this.radian)*this.speed;
    }

    paint() {
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

    jump(speed, angle, gravity) {

        this.x += this.vx;
        this.y += this.vy;

        if ((this.y + this.radius*2) <= this.ctx.canvas.height) {
            this.vy += gravity;
        } else {
            this.vy = 0;
            this.vx = 0;
            this.y = this.ctx.canvas.height - this.radius*2;
        }
        
        this._paint();
    }

    move(...props) {
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