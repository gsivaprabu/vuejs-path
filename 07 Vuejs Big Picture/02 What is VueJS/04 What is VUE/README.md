# 07 Vuejs Big Picture - 02 What is VueJS? - 04 What is VUE ?

- What is VUE ?

A JavaScript library (A large block of JavaScript code that is executed before your own code is executed and which gives context to code you write)

- A render engine, taking a data model and components as inputs and outputting HTML
- A Collaboration tool, allowing for the segment of applications into smaller parcels of work (using components)

## VUES CORE FEATURES

- Versatile Components
- Built-in reactivity (Update automatically when data changed)
- Fast initial load, fast Render
- v-for, v-if,v-bind (Familiar Directives)
- Vue's Proprietary file Type - ".vue"
- .vue files can contain HTMl,CSS and JS Code
- .vue files can't be read by web browsers (Build step is required)
- Allows all the code for a single component to be in one file
## Sample .VUE File

```HTML

<template>
	<p>
		Meaning of Life: {{message}}
	</p>
</template>

<script>
	module.exports={
		data(){
			return{
				message : 42
			}
		}
	}
</script>

<style scoped>
p { color:blue }
</style>

```

- . vue file have 3 sections
	- Template
		- Template contains HTML
		- Interpolation can occur within Template
	- Script
		- Script contains application code
		- Exported value is automatically turned into Vue component
		- The Number 42 will appear as message in the template above
	- CSS
		- Styles will be applied to this component only (scope)
- Finding VUE on the net
- Contribution, issue and source code on Github
- Issue lock in github
- Library downloaded from CDN or NPM
- Documentation on (vuejs.org)[vuejs.org]
- Read vue documentation