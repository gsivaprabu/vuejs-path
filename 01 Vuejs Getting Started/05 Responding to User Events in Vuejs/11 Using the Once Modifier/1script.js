vargrowler = new Vue({
    el: '#growler',
    data: {
        query: '',
        isRunning: false
    },
    methods: {
        executeSearch: function() {
            this.isRunning = true;
            document.forms[0].submit();
        }
    }
});
