console.log("loaded..");

import Vue from "vue";

const app = new Vue({
  data: {
    hello: "Hi Pranav ?"
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app };
