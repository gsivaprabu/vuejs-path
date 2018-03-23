# Single Page Applications with VueJs - 03 Single File Components - 03 .Vue Files
- Create new folder called theme
- Create a file Layout.vue

- If .Vue file means three sections

 - template
 	- HTML of our component
 - script
 	- JavaScript conditions
 - style
 	- Style sheets

 	- In app.js include the template file

 	```javascript
	import AppLayout from './theme/Layout.vue'
 	```

- Adding vue-spa\Build\webpack.base.config.js

```javascript

{
          test:/\.vue$/,
          loader:'vue-loader'
}
```

- Install Packages
```shell
vue-loader@13.0.2 vue-template-compiler@2.4.2 --save-dev
```