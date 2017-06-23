var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        query1: ''
    },
    methods: {
        executeSearch: function() {
            if (this.query) {
                document.forms[0].submit();
            } else {
                alert('Please enter a query');
            }
        }
    }
});
