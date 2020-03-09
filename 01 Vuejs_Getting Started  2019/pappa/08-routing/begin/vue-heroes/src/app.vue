<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <main class="column">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/header-bar';
// import Heroes from '@/components/heroes';

export default {
  name: 'App',
  // components: { HeaderBar, Heroes },
  components: { HeaderBar },
};
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
