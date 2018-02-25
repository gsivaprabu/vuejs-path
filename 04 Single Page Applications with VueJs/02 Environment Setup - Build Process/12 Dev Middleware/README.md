# 02 Environment Setup - Build Process - 12 Dev Middleware

- **npm install webpack-dev-middleware@1.12.0 webpack-hot-middleware@2.18.2 --save-dev**
- After installing both modules
- Current build system tedious one
	- Stop Server
	- Run web-pack
	- Then start Server
- Create a filed dev-server.js
```javascript
const webpack = require("webpack");
const clientConfig = require("./webpack.base.config");

module.exports = function setupDevServer(app) {
  const clientCompiler = webpack(clientConfig);
  app.use(
    require("webpack-dev-middleware")(clientCompiler, {
      stats: {
        colors: true
      }
    })
  );
  app.use(require("webpack-hot-middleware")(clientCompiler));
};
```
- Create export function for dev server

- Then add the module in server.js file
```javascript
require("./build/dev-server")(app);
```

- And change the path in index.html

```html
<script src="/assets/js/app.js"></script>
```
