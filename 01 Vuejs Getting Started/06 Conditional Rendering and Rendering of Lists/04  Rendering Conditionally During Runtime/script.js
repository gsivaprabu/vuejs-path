var growler = new Vue({
    el: '#growler',
    data: {
        beers: []
    },
    methods: {
        executeSearch: function() {
            var randomCount = Math.floor(Math.random() * 4);
            console.info('randomCount', randomCountVal = randomCount);
            this.beers = [];
            for (var i = 0; i < randomCount; i++) {
                var beer = {
                    id: (i + 1),
                    name: 'Beer #' + (i + 1)
                };
                console.warn('beer', beerVal = beer);
                this.beers.push(beer);
            }
        }
    }
});
