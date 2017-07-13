var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Ahool Ale',
            'Hyote Chocolate Stout',
            'North Adjule Lager',
            'Pope Lick Porter',
            'Tikibalang Barley Wine'
        ]
    },
    methods: {
        reverseClick: function() {
            this.beers.reverse();
        }
    }
});
