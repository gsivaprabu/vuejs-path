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
        removed: []
    },
    methods: {
        removeClick: function() {
            this.removed = this.beers.splice(0,1 );
        },

        replaceClick: function() {
        		console.log('replaceClick Called');
            try {
                for (var i = 0; i < this.removed.length; i++) {
                    this.beers.splice(1, 0, this.removed[i]);
                }
            } catch (ex) {
                console.log(ex);
            }
        }
    }
});
