# 04 Reacting to Data Changes with Filters Computed Properties and Watchers - Defining a Watchers Depth


### Defining a Watcher’s Depth

#### Watchers: By Default

	- Use a shallow monitoring approach
	- Compares values by reference

```javascript
//Expanding the Shopping Cart
//Adding multiple properties
data: {
	shoppingCart: {
		items: [],
		subTotal: 0.00
	}
}
```

#### Updating the Watcher

```javascript
watch: {
	shoppingCart: {
		handler: function(latest, original) {
			this.updateSubTotal()
		},
		deep: true
	}
}
```
###Turn deep monitoring on only when it makes sense
### deep checked for the nested property changes also