var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            'Hyote Chocolate Stout',
            'Ahool Ale',
            'Tikibalang Barley Wine'
        ]
    },
    methods: {
        reverseClick: function() {
            this.beers.reverse();
        }
    }
});
