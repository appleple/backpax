# pax
Just a simple parallax library

## Install

```
$ npm install @appleple/pax-js
```

## Usage

If you want to add parallax effect to element's background-image

```html
<div class="js-parallax parallax" 
    data-img="https://images.unsplash.com/photo-1557486727-b1a680e36e8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"
    data-img-767="https://images.unsplash.com/flagged/photo-1565241758499-3bf9d63d9094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80"
    data-img-1024="https://images.unsplash.com/flagged/photo-1565241758499-3bf9d63d9094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80"
>
  <p>テスト</p>
</div>
```

```js
import Pax from '@appleple/pax-js';

new Pax('.js-parallax');
```
