# Backpax

![](./screenshot.png)
Simple JavaScript Library to add parallax image to `background-image`

## Install

```
$ npm install backpax --save
```

## Demo

Demo page is [here](https://appleple.github.io/backpax)

## Usage

If you want to add parallax effect to element's background-image

```html
<div class="js-parallax parallax" 
  data-img="./path/to/default-image"
  data-img-768="./path/to/image-which-size-is-smaller-than-768"
  data-img-1024="./path/to/image-which-size-is-smaller-than-1024"
>
  <p>Hello world!</p>
</div>
```

```js
import Backpax from 'backpax';

new Backpax('.js-parallax');
```
