# canvas-wrapper
Custom canvas elements and keyboard events

## Engine

Start

```javascript
import Engine from './canvas/core/Engine';

const engine = new Engine();
```

## Engine loop

```javascript
    engine.render(function () {
        person.paint();
    });
```

`.paint()`
Is required method for rendering objects in engine loop.

## Rectangle

```javascript
  const rectangle = new AppRectangle(engine.ctx, {
      x: 'center',
      y: 'center',
      sideX: 40,
      sideY: 120,
      fillColor: 'rgba(255,0,0,1)'
  });
```

`engine.ctx`
Is the context of canvas.

`engine.ctx.canvas`
Canvas area.

## Circle

```javascript
  const circle = new AppCircle(engine.ctx, {
      x: 70,
      y: 70,
      radius: 10,
      typeStyle: 'fill',
      fillColor: 'rgba(255,0,0,1)',
  });
```

`typeStyle`
The style of circle, available `fill` and `stroke`. In case `stroke` style, should to use `strokeColor` option for stroke the circle.

```javascript
  const strokedCircle = new AppCircle(engine.ctx, {
      x: 70,
      y: 70,
      radius: 10,
      typeStyle: 'stroke',
      strokeColor: 'rgba(255,0,0,1)',
  });
```

## Object sprite texture

```javascript
  const person = new AppRectangle(engine.ctx, {
      x: 50,
      y: 50,
      texture: texture,
      frameWidth: 108,
      frameHeight: 140,
      frameCount: 8,
      frameSpeed: 16
  });
```

`texture`
Path of your sprite-image

`frameWidth`
Width of one frame of the sprite

`frameHeight`
Height of one frame of the sprite

`frameCount`
Count of frames in the sprite

`frameSpeed`
Frequency of refreshing frame in the sprite

## Keyboard events

```javascript
    engine.render(function () {
        rectangle.paint();

        person.listenKey('ArrowLeft a', function () {
            person.move(4,'left');
            person.paint('left');
        });
    });
```

## Methods

`.paint(direction)`
Fill or stroke object, required in engine loop. `direction` is available and needed in textured object.

`.move(speed, direction)`
Makes object to move with speed and direction.