# 04 Responding to User Events in Vuejs - Examining Events and Passing Parameters

- Evnet triggered you need to put event parameters.
- The last parameter in an event handler is the Event object that triggered the event.
- $event Parameter
	- Reserved variable
	- Access to the HTML DOM Event

### v-on Shorthand Syntax uses the **@**

```html
<button @click="executeSearch">Search</button>
```