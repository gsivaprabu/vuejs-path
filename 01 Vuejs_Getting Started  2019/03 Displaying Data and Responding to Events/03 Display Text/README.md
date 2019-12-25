# 03 Display Text

- We can return the data like below

Data Model

```javascript
<script>
export default {
  name: 'Heroes',
  data() {
    return {
      hero: {
        id: 20,
        firstName: 'MadeLyn',
        lastName: 'Papa',
        description: 'the cat whisperer',
        capeColor: '',
        power: '',
        active: true,
      },
      message: 'Test Message',
    };
  },
};
</script>

```
Data interpolation

```html
<p class="card-header-title">{{hero.firstName}}</p>
<label class="input" id="id" readonly>{{hero.id}}</label>
<div class="notification is-info">{{message}}</div>

```