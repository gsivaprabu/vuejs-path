vargrowler = new Vue({
    el: '#growler',
    data: {
        query: ''
    },
    methods: {
        executeSearch: function() {
            alert('Search Clicked');
        },
        parentClick: function() {
            alert('Parent Clicked');
        }
    }
});
