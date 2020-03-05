# Navigating Vue Apps with Routing

```shell
 npm run dev
```

## package.json configuration

- Based on below logic we can run the script as **dev**

```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "backend": "json-server --watch db.json --routes routes.json --port 8888 --middlewares ./node_modules/json-server-reset",
    "dev": "concurrently \"npm run backend\" \"npm run serve\""
  }
```
