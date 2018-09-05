# 07 Vuejs Big Picture - 03 Why use VueJS? - 02 Reactivity and Vue

- Main topic
- Reactivity
	- The way an application changes what you see in response to activity like the user hitting a button, or an incoming message from the server.
	- Simple array

	['apples','pears'] => Your shopping List

	* Apples
	* Pears


		['apples','pears','Grapes'] => Your shopping List

	* Apples
	* Pears
	* Grapes

- Why is Reactivity Important?

-Js
 - JavaScript does not have built-in reactivity
 - Thats why react vue angular fill this
- Reactivity that is not implemented correctly can be extremely slow
- vue and similar libraries solve this problem differently

### How vue handles Reactivity
- Changes to data model are automatically detected
- What the user sees is updated automatically and instantly
- Elements are reused and changes are batched to improve performance


#Developer Vs User

## Developer
- Code is easier to maintain.
- Vue uses virtual DOM to make large updates fast and declarative
- Less code, fixing bugs is easier

## User

- The application is fast and enjoyable
- Application doesn't seem to get slower despite more activity
- User experience few bugs


## Reactivity and VUE - Challenges

- vue components update automatically when model changes
- Reactivity is simple for numbers and strings(immutable)
- Reactivity is not so simple for arrays or objects (mutable)
- vue can't always tell when an array has been updated
- With mutable data, view may not update as expected