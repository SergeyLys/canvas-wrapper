class Engine {
    constructor(props) {
        this.gravity = props.gravity || null;

    }

    render(callback) {
        requestAnimationFrame(() => {
            this.render(callback);

            if (typeof callback === 'function') {
                callback = callback.bind(this);
                callback();
            }
        });

        //    LOOP
    }
}

export default Engine;