# 04 Conditional Rendering and Rendering of Lists - Rendering Conditionally During Runtime

- **v-if**
- **v-else**
- **v-show**

## v-if & v-else
- Let you conditionally render content based on an expression


### Using if…else Directives

```html
<label>Query Results</label>
	<p v-cloak>
		<div v-if="beers.length === 0">No beers were returned</div>
			<div v-else-if="beers.length === 1">
				1 beer was returned
			</div>
		<div v-else>{{ beers.length }} beers were returned</div>
	</p>
```

- Each time the value changes the elements, and all of their children will be destroyed, and are re-constructed.

## v-show
- Use to conditionally show content at runtime
- Sets the CSS display property
- Always renders the element
- Shows or hides an HTML block

```html
<!-- The search results area -->
	<div>
		<div v-show="beers.length === 0">
			No beers were returned
		</div>
		<div v-show="beers.length > 0">
			[Beers will be rendered here]
		</div>
	</div>
```

- If something is unlikely to change after a rendering, its better to use a **v-if**