# 07 Binding with Forms in Vuejs - Using the Number Modifier

- Tries to cast user input to a number
- HTML elements return values as strings
- Tries to get a Number object

```html
<input v-model.number="result" placeholder="2+3=">
```

-  Number if at least the first character is a number

### Custom modifier is not available