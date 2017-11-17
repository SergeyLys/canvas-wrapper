import AppRectangle from './canvas/core/Rectangle';
import AppCircle from './canvas/core/Circle';
import Engine from './canvas/core/Engine';

import texture from './images/sprite.png';

window.addEventListener('load', function () {
    const engine = new Engine({
        gravity: 0.05,
        speed: 1
    });

    const pers = new AppRectangle(engine.ctx, {
        x: 50,
        y: 'bottom',
        texture: texture,
        frameWidth: 108,
        frameHeight: 140,
        frameCount: 8,
        frameSpeed: 16
    });

    const arc = new AppCircle(engine.ctx, {
        x: 70,
        y: 70,
        radius: 10,
        typeStyle: 'fill',
        fillColor: 'rgba(255,0,0,1)',
    });

    engine.ctx.canvas.addEventListener('click', function (e) {
        // const coordX = parseInt(e.clientX - platform.x);
        // const coordY = parseInt(e.clientY - platform.y);
        // platform.moveTo(coordX, coordY);
    });

    engine.ctx.canvas.addEventListener('mousemove', function (e) {
        // arc1.position(e.clientX - arc1.radius, e.clientY - arc1.radius);
    });



    engine.render(function () {
        pers.paint();

        pers.listenKey('ArrowLeft a', function () {
            this.move(4,'left');
            this.paint('left');
        });
        pers.listenKey('ArrowRight d', function () {
            this.move(4,'right');
            this.paint('right');
        });

        // arc.jump(engine.speed, 290, engine.gravity);

    });

});