# 06 vuejs fundamentals - 03 Creating VueJs Components and Using Template Syntax - 02 Global Components vs. Single-file Components

- Difference between global component and single file component
- This session we used single file component only
- Components are VUE instances

```javascript
new Vue({
	template:'<div>Hello World</div>'
				el: '#app',
	})




const World = Vue.components(
	'World',
	{ template:'<span>World</span>' },
	);


	 //Now you pass like below

	new Vue({
	template:'<div>Hello <World/></div>'
				el: '#app',
	})



```

### Global Components limitation

- Naming Conflicts
- String Templates
- CSS is not encapsulated
- No build-time compilation support


# Single File Components

### HelloWorld.vue

```html
<template>
	<span class="hello"> Hello World! </span>
</template>

<script>
export default {name:'HelloWorld'}
</script>

<style>
.hello{
	color:red;
}
</style>

```
- Run time compiled by webpack