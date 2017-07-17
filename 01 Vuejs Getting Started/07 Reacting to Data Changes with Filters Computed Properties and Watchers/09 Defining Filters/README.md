# 09 Reacting to Data Changes with Filters Computed Properties and Watchers - Defining Filters

- The value is always the first parameter passed to a filter.

```html
<small class="text-muted">{{ result.ibu | convertIBU('--') }}</small>
```


```javascript
    filters: {
        convertIBU: function(value, empty) {
            if (!value) {
                return empty;
            }
            value = value.toString();
            value = value.replace(/\./g, ''); // Remove all periods
            return value.toUpperCase(); // Convert to upper case
        }
    }
```