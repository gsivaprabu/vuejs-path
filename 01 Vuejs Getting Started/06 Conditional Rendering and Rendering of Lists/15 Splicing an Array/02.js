var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'I',
            'J',
            'K'
        ],
        newBeerName: ''
    },
    methods: {
        spliceClick: function() {
            var removed = this.beers.splice(4);
            console.log(removed);
        }
    }
});
