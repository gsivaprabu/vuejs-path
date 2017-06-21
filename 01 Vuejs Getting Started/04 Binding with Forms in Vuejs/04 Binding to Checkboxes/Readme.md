# 04 Binding with Forms in Vuejs - Binding to Checkboxes

- Choose a single value
- Create a checkbox list
- Bind a single value use **v-model**

```html
<input type="checkbox" v-model="isPowerSyntaxEnabled">
```
#### Binding to Multiple Values with a Checkbox List

```html
        <label>Multiple check box</label>
        <label>
            <input type="checkbox" value="beers" v-model="searchIndexes"> Beers
        </label>
        <label>
            <input type="checkbox" value="breweries" v-model="searchIndexes"> Breweries
        </label>
        <br/>
        <small>selected: {{ searchIndexes}}</small>
```