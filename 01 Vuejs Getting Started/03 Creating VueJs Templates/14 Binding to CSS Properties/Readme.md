# 14 Creating VueJs Templates - Binding to CSS Properties

- Keep designs seperate from the logic.
- From a JavaScript Object.
- From a JavaScript Array.
- Getting CSS properties from an Array.
	- Each property name must be the name of a CSS property.
	- The value can be a property name or a static value.
	- Styles are often shared across multiple elements.
	- For multiple style definitions.

- Mixing dynamic and static property values
	- Here margin always fixed to 0

```html
<h2 v-text="appName" v-bind:style="{color:appNameColor,fontFamily:appNameFontFamily,margin:0}"> </h2>
```

- Styles are often shared across multiple elements
- For multiple style definitions

```javascript
data: {
    appName: 'Growler',
    accentColor: {
        color: '#FF6A00',
    },
    headers: {
        fontFamily: 'Verdana',
        margin: 0
    }
}
```
```html
<div id="growler">
	<h2 v-text="appName" v-bind:style="[accentColor, headers]"></h2>
</div>

```

## Strive to keep CSS seperate from data