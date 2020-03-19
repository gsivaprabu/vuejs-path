# Getting Specific State

- Make it easier to access parts of state
- Can summarize or get specific state

```javascript
getters: {
damageTotal: ({ bill }) => {
let total = 0;
for (let item of bill) {
total += item.cost * item.qty;
}
return total;
},
},
```
