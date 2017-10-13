# 02 Environment Setup - Build Process - 08 web-server - index.html

- Require the file system and add the index.html as default loading

```js
const fs = require("fs");
const path = require("path");

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();


app.get("*", (req, res) => {
  res.write(indexHTML);
  res.end();
});
```
- Then add the **PATH**
- using **dirname** taken as the root directory