# 06 vuejs fundamentals - 03 Creating VueJs Components and Using Template Syntax - 04 Binding Attributes to Data with v-bind


- Creating the dynamicly adding image
- All image configurations in one file
- Here some webpack concepts needed

```javascript
const images = require.context('./images', true, /\.png$/)
```

- Create to relative URL
- import the images

```javascript

import availableParts from '../data/parts';

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
    };
  },
};

```

- Adding the template

```html
<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[0].src" title="head"/>
        <button class="prev-selector">&#9668;</button>
        <button class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[0].src" title="left arm"/>
        <button class="prev-selector">&#9650;</button>
        <button class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[0].src" title="left arm"/>
        <button class="prev-selector">&#9668;</button>
        <button class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[0].src" title="left arm"/>
        <button class="prev-selector">&#9650;</button>
        <button class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="availableParts.bases[0].src" title="left arm"/>
        <button class="prev-selector">&#9668;</button>
        <button class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>
</template>

```