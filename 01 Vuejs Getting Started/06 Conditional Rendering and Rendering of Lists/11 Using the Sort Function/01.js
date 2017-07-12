var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Tikibalang Barley Wine',
            'Hyote Chocolate Stout',
            'Pope Lick Porter',
            'Ahool Ale',
            'North Adjule Lager'
        ]
    },
    methods: {
        sortClick: function() {
            this.beers.sort();
        }
    }
});
