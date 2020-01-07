# 02 Nesting Components in Components

- Components may include other components in their templates
- We declare them in the parent component

- Import the component first

```javascript
import HeroDetail from '@/components/hero-detail';
```

```html
<HeroDetail v-if="selectedHero" />  
```

component file

```html
<template>
    <div>
        Hello !
    </div>
</template>

<script>
    export default {
        name:'HeroDetails'
    }
</script>

<style lang="scss" scoped>

</style>
```