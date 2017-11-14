class Engine {
    constructor(props) {
        this.gravity = props.gravity || null;
        this.speed = props.speed || null;

        this._createCanvas();
    }

    _createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        this.ctx = canvas.getContext('2d');
    }

    render(callback) {
        requestAnimationFrame(() => {
            this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height);
            this.render(callback);

            if (typeof callback === 'function') {
                callback = callback.bind(this);
                callback();
            }

        });
    }
}

export default Engine;