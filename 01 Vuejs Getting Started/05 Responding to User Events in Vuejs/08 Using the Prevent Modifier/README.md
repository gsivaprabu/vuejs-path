# 08 Responding to User Events in Vuejs - Using the Prevent Modifier

- Bypasses default event behavior
- Representation of JavaScript’s preventDefault method

```html
<form action="#" method="GET">
    <input v-model="query" id="query" name="query" />
    <button type="submit" v-on:click="executeSearch">
        Search
    </button>
</form>
```
- using **prevent** key in button submit

```html
<form action="#" method="GET">
    <input v-model="query" id="query" name="query" />
    <button type="submit" v-on:click.prevent="executeSearch">
        Search
    </button>
</form>
```