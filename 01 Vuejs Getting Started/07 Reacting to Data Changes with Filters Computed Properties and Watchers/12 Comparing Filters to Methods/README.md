# 12 Reacting to Data Changes with Filters Computed Properties and Watchers - Comparing Filters to Methods

### Filters Should:
 - Only take in a value and return a new value
 - Not change the value of any properties in a view

### Filters Are Easier to Read

#### Using Methods
```html
<div>{{ toUpperCase(removePeriods(result.ibu)) }}</div>
```

#### Using Filters (Left to Right)
```html
<div>{{ result.ibu| removePeriods| toUpperCase}}</div>
```

## In General
- Filters are intended to be used across views
- Methods are specific to an instance

## In Review

 	- Filters are great a way to handle basic text transformations
	- Computed properties are for more complex transformations
	- Watchers are for asynchronous operations

#### Summary
	- Watchers
	- Computed properties
	- Filters
	- Summary


### Follow-up Topics

		 - Axios
		 - Components
		 - Transitions
		 - Routing
		 - State Management
		 - Server-Side Rendering