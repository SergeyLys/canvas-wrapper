class Engine {
    constructor(ctx, props) {
        // this.gravity = props.gravity || null;

    }

    render(callback) {
        requestAnimationFrame(() => {
            this.render(callback);

            if (typeof callback === 'function') {
                callback();
            }
        });

        //    LOOP
    }
}

export default Engine;