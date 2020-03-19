# Describing Your State

- The data you want in your store
- Always start with an initial state
- You can use differen computed methods

```javascript
  computed: {
    // ...mapState({ heroes: state => state.heroes }),
    // ...mapState({ heroes: 'heroes' }),
    ...mapState(['heroes']),
    /*     heroes() {
      return this.$store.state.heroes;
    }, */
    modalMessage() {
      const name =
        this.heroToDelete && this.heroToDelete.fullName
          ? this.heroToDelete.fullName
          : '';
      return `Would you like to delete ${name} ?`;
    },
  },
  ```