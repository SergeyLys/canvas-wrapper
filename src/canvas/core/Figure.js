import KeyboardEvents from './Keyboard';

export default class Figure {
    constructor(ctx, props) {
        this.ctx = ctx;

        if (typeof this.ctx === 'undefined') {
            throw 'First argument of figure class should be canvas context';
        }

        this.x = props.x                        || null;
        this.y = props.y                        || null;
        this.fillColor = props.fillColor        || null;
        this.strokeColor = props.strokeColor    || null;
        this.strokeWidth = props.strokeWidth    || null;
        this.texture = props.texture            || null;

        this.reverseY = false;
        this.reverseX = false;

        if (this.texture) {
            this.frameWidth = props.frameWidth;
            this.frameHeight = props.frameHeight;
            this.frameCount = props.frameCount;
            this.frameSpeed = props.frameSpeed;

            this.result = this._loadImage(this.texture, this.frameWidth, this.frameHeight, this.frameCount);

            this.tickCount = 0;
        }

    }

    _drawImage(image, x, y, direction) {
        this.tickCount++;

        if (this.tickCount > this.frameSpeed) {
            this.tickCount = 0;

            if (image.currentFrame >= image.frameCount) {
                image.currentFrame = 1;
            } else {
                image.currentFrame += 1;
            }
        }

        if (image.loaded) {

            switch (direction) {
                case 'right': {
                    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    this.ctx.drawImage(image.image, image.frameWidth*(image.currentFrame-1), 0, image.frameWidth, image.frameHeight, x, y, image.frameWidth, image.frameHeight);
                } break;

                case 'left': {
                    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    this.ctx.drawImage(image.image, image.imageW - (image.frameWidth*(image.currentFrame)), image.frameHeight, image.frameWidth, image.frameHeight, x, y, image.frameWidth, image.frameHeight);
                } break;

                default: {
                    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    this.ctx.drawImage(image.image, image.frameWidth, 0, image.frameWidth, image.frameHeight, x, y, image.frameWidth, image.frameHeight);
                }
            }
        }
    }

    _loadImage(p, w, h, c) {
        let image = new Image();
        let result = {
            image: image,
            frameWidth: w,
            frameHeight: h,
            frameCount: c,
            currentFrame: 1,
            loaded: false
        };

        image.addEventListener('load', () => {
            result.loaded = true;
        });
        image.src = p;
        result.imageW = image.width;
        result.imageH = image.height;

        return result;
    }

    position(x, y) {
        this.x = x;
        this.y = y;
        this._paint();

    }

    _setPositions() {
        const centerX = this.ctx.canvas.width / 2 - ( (this.sideX || this.radius*2) / 2);
        const centerY = this.ctx.canvas.height / 2 - ( (this.sideY || this.radius*2) / 2);

        if (this.x === 'center') {
            this.x = centerX;
        }

        if (this.x === 'left') {
            this.x = 0;
        }

        if (this.x === 'right') {
            this.x = this.ctx.canvas.width - (this.sideY || this.radius*2);
        }

        if (this.y === 'center') {
            this.y = centerY;
        }

        if (this.y === 'bottom') {
            this.y = this.ctx.canvas.height - (this.sideY || this.radius*2);
        }

        if (this.y === 'top') {
            this.y = 0;
        }
    }

    listenKey(key, callback) {
        const keys = key.split(' ');

        if (typeof callback === 'function') {

            callback = callback.bind(this);

            for (let i = 0; i < keys.length; i++) {
                if (KeyboardEvents.isKeyDown(keys[i])) {
                    callback();
                }
            }

        } else {
            throw 'Callback of listenKey method must be a function';
        }
    }

    _paint(direction) {

        if (this.texture) {
            this._drawImage(this.result, this.x, this.y, direction);
        } else {
            if (this.strokeColor) {
                this.ctx.strokeStyle = this.strokeColor;
            }

            if (this.fillColor) {
                this.ctx.fillStyle = this.fillColor;
            }
        }

    }

    move(speed, direction) {

        if (direction === 'right') {
            if (this.x < this.ctx.canvas.width - (this.sideX || this.radius*2 || this.frameWidth)) {

                speed ? this.x += speed : this.x++;
            } else {
                this.x = this.ctx.canvas.width - (this.sideX || this.radius*2 || this.frameWidth);
            }
        }

        if (direction === 'left') {
            if (this.x > 0) {
                speed ? this.x -= speed : this.x--;
            } else {
                this.x = 0;
            }
        }

        if (direction === 'down') {
            if (this.y < this.ctx.canvas.height - (this.sideY || this.radius*2 || this.frameWidth)) {
                speed ? this.y += speed : this.y++;
            } else {
                this.y = this.ctx.canvas.height - (this.sideY || this.radius*2 || this.frameWidth);
            }
        }

        if (direction === 'up') {
            if (this.y > 0) {
                speed ? this.y -= speed : this.y--;
            } else {
                this.y = 0;
            }
        }

        this._paint();
    }

    infiniteXMoving(speed) {

        if (this.x < this.ctx.canvas.width - (this.sideX || this.radius*2) && this.reverseX === false) {

            speed ? this.x += speed : this.x++;

            if (this.x >= this.ctx.canvas.width - (this.sideX || this.radius*2)) {
                this.reverseX = true;
            }
        }

        if (this.reverseX === true) {
            speed ? this.x -= speed : this.x--;

            if (this.x <= 0) {
                this.reverseX = false;
            }
        }

        this._paint();
    }

    infiniteYMoving(speed) {

        if (this.y < this.ctx.canvas.height - (this.sideY || this.radius*2) && this.reverseY === false) {
            speed ? this.y += speed : this.y++;

            if (this.y >= this.ctx.canvas.height - (this.sideY || this.radius*2)) {
                this.reverseY = true;
            }
        }

        if (this.reverseY === true) {
            speed ? this.y -= speed : this.y--;

            if (this.y <= 0) {
                this.reverseY = false;
            }
        }

        this._paint();
    }
}