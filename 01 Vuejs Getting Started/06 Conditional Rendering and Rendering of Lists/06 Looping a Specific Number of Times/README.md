# 06 Conditional Rendering and Rendering of Lists - Looping a Specific Number of Times

- You know some times only exact loop
- Looping a Specific Number of Times
- Using v-for to create a pager

```html
<ul>
	<li v-for="page in pageCount">
		<a href="#" v-on:click="search(page);">{{ page }}</a>
	</li>
</ul>
```
Alias
- Represents the current item that’s being iterated on
- Value starts at 1, not 0

## The “in” Delimiter
- Helps with readability

### The “of” Delimiter

```html
<ul>
	<li v-for="page of pageCount">
		<a href="#" v-on:click="search(page);">{{ page }}</a>
	</li>
</ul>
```
- A personal preference
- More consistent with JavaScript’s iterator syntax

### Source Data

<ul>
	<li v-for="page in pageCount">
		<a href="#" v-on:click="search(page);">{{ page }}</a>
	</li>
</ul>

- What’s being iterated over
- You cannot iterate over a range of floating-point numbers