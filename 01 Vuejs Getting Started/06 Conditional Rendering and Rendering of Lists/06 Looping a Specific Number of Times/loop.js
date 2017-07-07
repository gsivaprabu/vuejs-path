var growler = new Vue({
    el: '#growler',
    data: {
        pageCount: 25,
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    },
    methods: {
        search: function(pageNumber) {
            alert('Loading page number: ' + pageNumber);
        }
    }
});
