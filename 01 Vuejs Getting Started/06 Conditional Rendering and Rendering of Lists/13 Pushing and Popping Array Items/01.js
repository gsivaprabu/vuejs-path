var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Ahool Ale',
            'Hyote Chocolate Stout',
            'Tikibalang Barley Wine'
        ],
        newBeerName: '',
        count: 3 // This property exists to test the fact that the push function returns the new length
    },
    methods: {
        pushClick: function() {
            this.count = this.beers.push(this.newBeerName);
            this.newBeerName = '';
        }
    }
});
