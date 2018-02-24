# 02 Environment Setup - Build Process - 11 Webpack Vue

- app.js file located in my source folder
- Import Vue from vue.js module
```javascript
import Vue from "vue";
```
Find the Vue from **node_modules** folder

- Then naming the module as Vue reference

```javascript
const app = new Vue({
  data: {
    hello: "Hi there ?"
  }
})
```
- Then export the app variable in a JSON export

- We can retrieve in client-entry.js file
```javascript
import { app } from './app';
app.$mount("#app");
```
- Mount the Vue instance to an element with the ID of app

- In HTML file add the ID

```html
  <div id="app">{{hello}}</div>
  <script src="/dist/assets/js/app.js"></script>
```
- Need to add compiler
- Add webpack.base.config.js like below

```javascript
const path = require("path");

const config = {
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  resolve: {
    alias: {
      vue: "Vue/dist/vue.js"
    }
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
};

module.exports = config;
```

