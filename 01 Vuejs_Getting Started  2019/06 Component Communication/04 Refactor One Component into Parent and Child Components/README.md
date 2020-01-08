# 04 Refactor One Component into Parent and Child Components

- Creating parent and child component
- Another  file for component and add all stuffs




import HeroDetail from '@/components/hero-detail';


and add 

components: { HeroDetail },

<HeroDetail v-if="selectedHero" :hero="selectedHero" />
  