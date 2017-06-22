# 10 Binding with Forms in Vuejs - Lazily Binding Values (Lazy Binding)

- HTML onchange event
	- Fires when an inputelement’s value is modified.
	- Fires after an input element has lost the focus

- Comparing Binding Behaviors
- oninput(video appears here)
- onchange (video appears here)

```html
<input v-model.lazy="query" placeholder="Search...">
```

### Modifiers describe the behavior of a binding


### Using lazy and trim Modifier
- Chaining modifiers together
- Order modifiers assuming they get applied from left-to-right

```html
<input v-model.lazy.trim="query" placeholder="Search...">
```

### Summary

- Lazily bind to form values
- Modify bound values
- Using input bindings