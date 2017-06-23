# 07 Responding to User Events in Vuejs - Event Capturing

### Default is bubble approach bottom to top

- Event handler starts at the window object

- Introduced in the early days of the web
- Supported by the W3C specification
- Applied via capture modifier

- Using the capture Modifier
	- Propagating events from top-to-bottom

```html
<div v-on:click.capture="grandparentClick">
	<div v-on:click.capture="parentClick">
		<button v-on:click.capture="executeSearch" type="button">Search</button>
	</div>
</div>
```

- Mixing Capturing and Bubbling
	- Events propagate in two directions

```html
<form>
    <input type="search" placeholder="search...">
    <div v-on:click.capture="grandparentClick2">
        <div v-on:click="parentClick2">
            <button v-on:click="executeSearch2" type="button">Search</button>
        </div>
    </div>
</form>
```
