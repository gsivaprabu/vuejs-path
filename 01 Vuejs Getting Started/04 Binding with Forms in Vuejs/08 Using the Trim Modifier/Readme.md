# 08 Binding with Forms in Vuejs - Using the Trim Modifier

### Trim Modifier

- Includes spaces, tabs, and line breaks
- Removes leading and trailing whitespace
- Removes whitespace

- Remove white space entered by the user

```html
<input v-model.trim="query" placeholder="Search...">
```