# 02 Environment Setup - Build Process - 13 Hot Reloading
-  Create a file for **webpack.client.config.js**
- Include the configuration of base config
- Extend the base config object.
- Assign method and include the property named plugins.

- Add the hot module in client-entry.js
```javascript
import { app } from './app';
app.$mount("#app");

if (module.hot) {
  module.hot.accept();
}
```

- Add the template in app.js
```javascript
console.log("loaded..");

import Vue from "vue";

const app = new Vue({
  data: {
    hello: "Hi Pranav ?"
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app };
```