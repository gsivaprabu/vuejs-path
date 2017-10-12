# 02 Environment Setup - Build Process - 07 Web-Server

- Lot webservers
	- http-server
	- live-server
	- express.js

- **npm install express@4.15.4 --save**	
- Create server.js

```js
const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.write("Hey there !!");
  res.end();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

```

- Any page request throws **hey there only**
	- http://localhost:3000/user
	- http://localhost:3000/page