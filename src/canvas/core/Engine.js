class Engine {
    constructor(props) {
        this.gravity = props.gravity || null;
        this.speed = props.speed || null;

        this._createCanvas();
    }

    _createCanvas() {
        const canvas = document.createElement('canvas');

        document.body.appendChild(canvas);

        this._setSize(canvas);

        window.addEventListener('resize', ()=> {
            this._setSize(canvas);
        });

        this.ctx = canvas.getContext('2d');
    }

    _setSize(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
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

    jump(obj) {
        // console.log(obj);
    }
}

export default Engine;