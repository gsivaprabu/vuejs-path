var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Pope Lick Porter',
            'Hyote Chocolate Stout',
            'Ahool Ale',
            'Tikibalang Barley Wine'
        ],
        newBeerName: ''
    },
    methods: {
        updateClick: function() {
            this.beers.splice(2, 1, 'Ahool Pale Ale');
        }
    }
});
