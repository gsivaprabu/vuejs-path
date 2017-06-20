# 03 Creating VueJs Templates - Loading Data Properties

- Loading a property
	- Every time data defined vue used Object.defineProperty method
	- To create getters and setters [During creation stage]
	- Change notifications
	- Dependency Tracking
	- Making the property React

- Data property Caveat #1
	- You can only modify properties
	- You can't add properties at runtime
	- You can't remove properties at runtime
	- Because data properties get by Getters and Setters
	- The data object serves as the schema.

- Data property Caveat #1
	- Javascript objects are formatted differently.
	- console.log(this.searchService);
	- Install extension in google chrome vue-devtools