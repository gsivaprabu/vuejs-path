var growler = new Vue({
    el: '#growler',
    data: {
        beers: []
    },
    methods: {
        executeSearch: function() {
            var randomCount = Math.floor(Math.random() * 4);

            this.beers = [];
            for (var i = 0; i < randomCount; i++) {
                var beer = {
                    id: (i + 1),
                    name: 'Beer #' + (i + 1)
                };
                this.beers.push(beer);
            }
        }
    }
});
