# Backpax

![](./screenshot.png)
Simple JavaScript Library to add parallax image to `background-image`

## Install

```
$ npm install backpax --save
```

## Demo

demo page is [here](https://appleple.github.io/backpax)

## Usage

If you want to add parallax effect to element's background-image

```html
<div class="js-parallax parallax" 
  data-img="./path/to/default-image"
  data-img-768="./path/to/image-which-size-is-larger-than-768"
  data-img-1024="./path/to/image-which-size-is-larger-than-1024"
>
  <p>テスト</p>
</div>
```

```js
import Backpax from 'backpax';

new Backpax('.js-parallax');
```
