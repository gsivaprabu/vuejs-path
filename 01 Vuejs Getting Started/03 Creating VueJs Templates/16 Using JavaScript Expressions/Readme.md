# 16 Creating VueJs Templates - Using JavaScript Expressions

- JavaScript Expression A line of code that produces a value

```html
<span v-text="profileDesignation" v-bind:style="{color:color?'yellow':'maroon'}"></span>
```
- Using JavaScript Expressions in a Template {{}}
- Evaluated within the context of a view



# The Vue Sandbox

- An isolated environment

#### Whitelisted Globals

##### Properties

	- Infinity
	- undefined
	- NaN

##### Functions

	- parseFloat
	- parseInt
	- isNaN
	- isFinite
	- decodeURI
	- decodeURIComponent
	- encodeURI
	- encodeURIComponent

##### Objects

 - Math
 - Number
 - Date
 - Array
 - Object
 - Boolean
 - String
 - RegExp
 - Map
 - Set
 - JSON
 - Intl

##### Webpack/ Browerify
 - require

# Global Variables

- That are not whitelisted can't be used in expressions.
- The popular $ used in jQuery can't be used in Vue expressions.

# Summary

- Use JavaScript Expressions
- Bind to HTML Attributes
- Bind Content to a Template
- Setup the data