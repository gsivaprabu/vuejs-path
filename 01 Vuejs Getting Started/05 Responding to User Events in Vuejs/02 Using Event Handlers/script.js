function checkForEnter(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        growler.executeSearch();
        return false;
    }
    return true;
}

var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        history: ''
    },
    methods: {
        evaluateKey: function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            this.history += 'key clicked: "' + e.key + '" (' + code + ')\n';
        },
        executeSearch: function(e) {
            if (this.query) {
                this.history += 'Search button clicked. Query "' + this.query + '" was entered.\n';
            }
        },
        clearHistory: function() {
            this.history = '';
        }
    }
});
