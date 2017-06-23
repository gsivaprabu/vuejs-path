var growler = new Vue({
    el: '#growler',
    data: {
        query: ''
    },
    methods: {
        executeSearch: function(t,event) {
            console.log("event", ee=event);
            alert('Query: "' + this.query + '" Button:"' + event.target.innerText + '"');
        }
    }
});