var growler = new Vue({
    el: '#growler',
    data: {
        pageCount: 25
    },
    methods: {
        search: function(pageNumber) {
            alert('Loading page number: ' + pageNumber);
        }
    }
});
