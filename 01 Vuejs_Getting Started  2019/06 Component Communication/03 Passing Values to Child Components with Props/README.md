# 03 Passing Values to Child Components with Props

- Using something we called props
- Prop Tips
    - Casing => camelCased prop names use kebab-cased equivalents in templates
    - Types => String, Number, Boolean, Array, Oject, Function,Promise
    - Dynamic Vs Static
        - Dynamic **:title="her0.name"**
        - Static **:"Mrs Awesome"**
    - Validation
        - Message values  any string,undefined or null
        - Default value generated from object
        - Simple default vaue as value
        - Finally required field flag true
    - Custom Validation Functions
        - Define your own validation logic
        - Can also import shared validation functions

```html
<template>
    <div>
        Hello {{hero.firstName}}!
    </div>
</template>

<script>
    export default {
        name:'HeroDetails',
        props: {
            hero: {
                type: Object,
                default: () => {}
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
```
How to integratedthe nested component

```html
<HeroDetail v-if="selectedHero" :hero="selectedHero" />  
```