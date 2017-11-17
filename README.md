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

## Object texture

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