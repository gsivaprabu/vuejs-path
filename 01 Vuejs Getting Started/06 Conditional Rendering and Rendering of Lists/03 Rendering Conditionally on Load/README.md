# 03 Conditional Rendering and Rendering of Lists  -  Rendering Conditionally on Load

- rendering elements after <div> loaded
- For slower network connections
- For additional JavaScript Object initialization


### v-cloak Directive
- Hides elements until a view is compiled
	- <h2 v-cloak>{{ appName }}</h2>
	- v-cloak in Action (Hide an element until a view is compiled)

###v-cloak Required CSS

```css
[v-cloak] {
display: none;
}
```
	-	Hides DOM elements until a view is compiled
