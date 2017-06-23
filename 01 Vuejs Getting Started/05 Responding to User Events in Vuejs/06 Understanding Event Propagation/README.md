# 06 Responding to User Events in Vuejs - Understanding Event Propagation

- Chain reaction
- Events are in HTML DOM propagated through the visual tree

### Sample snippet for event propagation

```html
<div v-on:click="buttonGrandparentClick">
	<div v-on:click="buttonParentClick">
		<button v-on:click="executeSearch" type="button">Search</button>
	</div>
</div>
```

#### Event Propagation

	- Event Bubbling
		-	Towards parent element (child to parent)
	- Event Capturing
		-  Towards child element  (parent to child)