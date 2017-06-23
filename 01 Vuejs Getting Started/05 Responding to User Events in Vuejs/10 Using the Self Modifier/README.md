# 10 Responding to User Events in Vuejs - Using the Self Modifier

- Triggers event if element is originator
- Only concerned with the target

```html
<div v-on:click="grandparentClick">
	<div v-on:click="parentClick">
		<button v-on:click.self="executeSearch" type="button">Search</button>
	</div>
</div>
```
#### Ignoring event propagation for simplification

```html
<div v-on:click="grandparentClick">
	<div v-on:click.self="parentClick">
		<button v-on:click="executeSearch" type="button">Search</button>
	</div>
</div>
```

