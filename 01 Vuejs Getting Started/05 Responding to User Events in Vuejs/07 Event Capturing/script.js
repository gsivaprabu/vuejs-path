var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        query1: ''
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
        },
        grandparentClick1: function() {
            console.info('grandparentClick => 1');
        },
        parentClick1: function() {
            console.info('parentClick => 2');
        },
        executeSearch1: function() {
            console.info('executeSearch => 3');
        },
        grandparentClick2: function() {
            console.warn('grandparentClick => 1');
        },
        parentClick2: function() {
            console.warn('parentClick => 2');
        },
        executeSearch2: function() {
            console.warn('executeSearch => 3');
        }
    }
});
