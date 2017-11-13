import AppRectangle from './core/Rectangle';
import AppCircle from './core/Circle';
import Engine from './core/Engine';

export default class App {
    constructor() {
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        const eng = new Engine();

        const arc = new AppCircle(ctx, {
            x: 'center',
            y: 'bottom',
            radius: 10,
            typeStyle: 'fill',
            fillColor: 'rgba(255,0,0,1)'
        });

        const rec1 = new AppRectangle(ctx, {
            x: 'center',
            y: 'center',
            sideX: 40,
            sideY: 120,
            fillColor: 'rgba(255,0,0,1)'
        });

        const rec2 = new AppRectangle(ctx, {
            x: 'center',
            y: 'center',
            sideX: 60,
            sideY: 140,
            fillColor: 'rgba(255,255,0,1)'
        });

        const rec3 = new AppRectangle(ctx, {
            x: 'center',
            y: 'center',
            sideX: 80,
            sideY: 160,
            fillColor: 'rgba(0,255,255,1)'
        });

        const platform = new AppRectangle(ctx, {
            x: 'center',
            y: 'top',
            sideX: 100,
            sideY: 30,
            fillColor: 'rgba(255,0,0,1)'
        });

        canvas.addEventListener('click', function (e) {
            const coordX = parseInt(e.clientX - platform.x);
            const coordY = parseInt(e.clientY - platform.y);
            platform.moveTo(coordX, coordY);
        });

        eng.render(function () {
            
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
        });

        function loop() {
            requestAnimationFrame(() => {

                loop();

                       // arc.infiniteYMoving(5);
                       // arc.infiniteXMoving(5);

            });
        }

        loop();
    }
}