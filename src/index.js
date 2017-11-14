import AppRectangle from './canvas/core/Rectangle';
import AppCircle from './canvas/core/Circle';
import Engine from './canvas/core/Engine';

window.addEventListener('load', function () {
    const engine = new Engine({
        gravity: 0.05,
        speed: 1
    });

    const arc = new AppCircle(engine.ctx, {
        x: 'center',
        y: 'center',
        radius: 10,
        typeStyle: 'fill',
        fillColor: 'rgba(255,0,0,1)'
    });

    const arc1 = new AppCircle(engine.ctx, {
        x: 'center',
        y: 'center',
        radius: 20,
        typeStyle: 'stroke',
        strokeColor: 'rgba(255,0,0,1)'
    });

    const rec1 = new AppRectangle(engine.ctx, {
        x: 'center',
        y: 'center',
        sideX: 40,
        sideY: 120,
        fillColor: 'rgba(255,0,0,1)'
    });

    const rec2 = new AppRectangle(engine.ctx, {
        x: 'center',
        y: 'center',
        sideX: 60,
        sideY: 140,
        fillColor: 'rgba(255,255,0,1)'
    });

    const rec3 = new AppRectangle(engine.ctx, {
        x: 'center',
        y: 'center',
        sideX: 80,
        sideY: 160,
        fillColor: 'rgba(0,255,255,1)'
    });

    const platform = new AppRectangle(engine.ctx, {
        x: 'center',
        y: 'top',
        sideX: 100,
        sideY: 30,
        fillColor: 'rgba(255,0,0,1)'
    });

    engine.ctx.canvas.addEventListener('click', function (e) {
        // const coordX = parseInt(e.clientX - platform.x);
        // const coordY = parseInt(e.clientY - platform.y);
        // platform.moveTo(coordX, coordY);
    });



    engine.render(function () {

        rec1.paint();
        rec2.paint();
        rec3.paint();
        arc.paint();
        arc1.paint();

        rec1.listenKey('ArrowLeft a', function () {
            this.move(1,'left');
            rec2.move(1.5,'left');
            rec3.move(2,'left');
        });
        rec1.listenKey('ArrowRight d', function () {
            this.move(1,'right');
            rec2.move(1.5,'right');
            rec3.move(2,'right');
        });
        rec1.listenKey('ArrowUp w', function () {
            this.move(1,'up');
            rec2.move(1.5, 'up');
            rec3.move(2, 'up');
        });
        rec1.listenKey('ArrowDown s', function () {
            this.move(1,'down');
            rec2.move(1.5, 'down');
            rec3.move(2, 'down');
        });

        arc.listenKey('ArrowDown s', function () {
            this.move(3, 'down');
        });
        arc.listenKey('ArrowLeft s', function () {
            this.move(3, 'left');
        });
        arc.listenKey('ArrowRight s', function () {
            this.move(3, 'right');
        });
        arc.listenKey('ArrowUp s', function () {
            this.move(3, 'up');
        });

        arc.jump(engine.speed, 290, engine.gravity);
    });

    engine.ctx.canvas.addEventListener('mousemove', function (e) {
        arc1.position(e.clientX - arc1.radius, e.clientY - arc1.radius);
    });
});