var growler = new Vue({
    el: '#growler',
    data: {
        pageCount: 5
    },
    methods: {
        search: function(pageNumber) {
            alert('Loading page number: ' + pageNumber);
        }
    }
});
