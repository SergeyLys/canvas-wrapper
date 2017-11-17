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
        y: 50,
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

    // const arc1 = new AppCircle(engine.ctx, {
    //     x: 'center',
    //     y: 'center',
    //     radius: 20,
    //     typeStyle: 'stroke',
    //     strokeColor: 'rgba(255,0,0,1)'
    // });

    // const rec1 = new AppRectangle(engine.ctx, {
    //     x: 'center',
    //     y: 'center',
    //     sideX: 40,
    //     sideY: 120,
    //     fillColor: 'rgba(255,0,0,1)'
    // });
    //
    // const rec2 = new AppRectangle(engine.ctx, {
    //     x: 'center',
    //     y: 'center',
    //     sideX: 60,
    //     sideY: 140,
    //     fillColor: 'rgba(255,255,0,1)'
    // });
    //
    // const rec3 = new AppRectangle(engine.ctx, {
    //     x: 'center',
    //     y: 'center',
    //     sideX: 80,
    //     sideY: 160,
    //     fillColor: 'rgba(0,255,255,1)'
    // });
    //
    // const platform = new AppRectangle(engine.ctx, {
    //     x: 'center',
    //     y: 'bottom',
    //     sideX: 100,
    //     sideY: 30,
    //     fillColor: 'rgba(255,0,0,1)',
    //     texture: texture
    // });

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
            pers.move(4,'left');
            pers.paint('left');
        });
        pers.listenKey('ArrowRight d', function () {
            pers.move(4,'right');
            pers.paint('right');
        });

        // arc.jump(engine.speed, 290, engine.gravity);

    });

});