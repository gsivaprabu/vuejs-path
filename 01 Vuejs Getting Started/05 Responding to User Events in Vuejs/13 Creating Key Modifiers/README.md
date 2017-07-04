# 13 Responding to User Events in Vuejs - Creating Key Modifiers

- Used for key codes used less often
- Useful for shortcut keys

### Defining Custom Key Modifiers
	- Defining keyCodes in the Vue config


```javascript
Vue.config.keyCodes= {
f1: 112
};
```

### Using Custom Key Modifiers
Using the f1 modifier

```html
<div id="growler" v-on:keydown.f1="openInfo">
</div>
```