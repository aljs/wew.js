# wew.js

Reveal animations when elements are within the viewport (on load, scroll and resize). WOW.js alternative with MIT license. Based on [Josh Johnson's Animate.js library](https://github.com/jshjohnson/Animate).

## Setup for new projects
```html
<script src="/dist/wew.min.js"></script>
<script>
    var wew = new Wew();
    wew.init();
</script>
```

### Setup as WOW.js replacement
```html
<script src="/dist/wew.min.js"></script>
<script>
    var wew = new Wew({
        target: '.wow',
        keyword: 'wow',
    });
    wew.init();
</script>
```

## Installation
To install via NPM, run `npm install --save-dev wew.js` 

## Animating elements
##### class=`wew`

Default way of targeting an element to animate. This can be overridden to be a custom attribute or class.

### Optional element overrides
##### `data-wew-delay`

Delay before the animation, overide `animation-delay` of the element.

##### `data-wew-duration`

Duration of the animation, overide `animation-duration` of the element.

##### `data-wew-offset`

Override the plugin `offset` option per element.

##### `data-wew-reverse`

Overide the plugin `reverse` option per element.

#### Examples
```html
<div class="wew fadeIn"></div>
<div class="wew tada" data-wew-delay="1s"></div>
<div class="wew bounce" data-wew-offset="0.2" data-wew-reverse="true"></div>
<div class="wew bounce" data-wew-offset="100" data-wew-duration="5s"></div>
```

## Options
#### target
Type: `String` Default: `.wew`

Element/s to target. Once this element is in view, add animations.

#### animatedClass
Type: `String` Default: `js-animated`

Class to be added to element once animation has completed.

#### animateLibClass
Type: `String` Default: `animated`

Class of the animation library to apply, default is for Animate.css.

#### offset
Type: `Number` Default: `0.5` (50%)

If less then 1, percentage of element that needs to be in the viewport before the animation triggers. If more then 1, offset from the top of the element (in pixels).

####  reverse
Type: `Boolean` Default: `false`

Once the element has left the top of the viewport (by the same offset), remove the animations from element. When the element comes back into view, it will animate again.

#### debug
Type: `Boolean` Default: `false`

Debugging information in console.

#### onLoad
Type: `Boolean` Default: `true`

Whether to fire on DOMContentLoaded.

#### onScroll
Type: `Boolean` Default: `true`

Whether to fire on scroll.

#### onResize
Type: `Boolean` Default: `false`

Whether to fire on resize.

#### callbackOnInit
Type: `Function` Default: `function(){}`

Function to run once Animate.js initialises 

#### callbackOnAnimate 
Type: `Function` Default: `function(){}`

Function to run once animation has completed (pass parameter to access the animated element).

## Methods
#### init();
Initialises event listeners.
#### kill();
Kills event listeners and resets options.
#### render();
Adds/removes animations without the need for event listeners.

## Browser compatibility
wew.js is supported in modern browsers from IE9 and above (i.e. browsers that support CSS animations).

## Development
To setup a local environment: clone this repo, navigate into it's directory in a terminal window and run the following command:
* ```npm install```

### Gulp tasks
* ```gulp dev```
* ```gulp build```

## License
MIT License. Feel free to use it anywhere you want.
