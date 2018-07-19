# 06 vuejs fundamentals - 02 Getting Started with the Vue.js CLI - 04 Creating a New Project with the Vue CLI

- Vue CLI is good for optimized production BUILD
- Use below cli to install
```shell
npm install -g @vue/cli@3.0.0-rc.3
```
- Create a new VUE Project

```shell
vue create build-a-bot
```

- Use Default / Manual
- We use Manually
- Lot of features
- Zero Config Environment
- Forget install any no worry we can install later
- Any one create a plugin and adding later
- EsLint + Airbnb config
- Next we choose dedicated config files
- Next give NO for(Save this as the preset for  future projects)


- I always suggest Vs Code lot of extensions support Vuejs
- Install Extensions
		- ESLint
		- Vue
		- Vetur

- Changes in **.eslintrc.js**

```javascript
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "linebreak-style":0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
```

Then change in workspace settings also means **BUILT-A-BOT Folder Settings**

```javascript
{
    "eslint.validate" :[
		{
			"language":"html",
			"autoFix" :true
		},
		{
			"language":"html",
			"autoFix" :true
		},
		{
			"language":"html",
			"autoFix" :true
		},
	],
	"eslint.autoFixOnSave":true,
}
```

Remember below part in **packages.json**


```javascript
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
```

For more about vue cli service

[vue-cli-service](https://github.com/vuejs/vue-cli/blob/dev/docs/guide/cli-service.md)

Run using below command

```shell
npm run serve
```

- The heart of Vue JS project is main.js

- Three sections in .vue file
	- Template
	- Script
	- Style

	- app component is the top level component
