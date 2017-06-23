var growler = new Vue({
    el: '#growler',
    data: {
        query: ''
    },
    methods: {
        grandparentClick: function() {
            console.log('grandparentClick => 1');
        },
        parentClick: function() {
            console.log('parentClick => 2');
        },
        executeSearch: function() {
            console.log('executeSearch => 3');
        }
    }
});
