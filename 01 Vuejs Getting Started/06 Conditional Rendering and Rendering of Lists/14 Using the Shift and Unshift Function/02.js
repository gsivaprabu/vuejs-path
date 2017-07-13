var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Pope Lick Porter',
            'Hyote Chocolate Stout',
            'Ahool Ale',
            'Tikibalang Barley Wine'
        ],
        newBeerName: '',
        count: 4 // This property exists to test the fact that the push function returns the new length
    },
    methods: {
        unshiftClick: function() {
            this.count = this.beers.unshift(this.newBeerName);
            this.newBeerName = '';
        },
        shiftClick: function() {
            var shifted = this.beers.shift();
            console.log('Shifted:');
            console.log(shifted);
        }
    }
});
