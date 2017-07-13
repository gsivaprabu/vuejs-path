var growler = new Vue({
    el: '#growler',
    data: {
        abv: [
            9.7,
            12.2,
            5.7,
            11.1,
            2.9
        ],

        sortedAbv: [],

        numericallySortedAbv: []
    },
    methods: {
        sortClick: function() {
            this.sortedAbv = this.abv.slice();
            this.sortedAbv.sort();
        },

        numericallySortClick: function() {
            this.numericallySortedBeers = this.abv.slice();
            console.log("this.numericallySortedBeers", this.numericallySortedBeers);
            this.numericallySortedAbv.sort(function(v1, v2) {
                return v1 - v2;
            });
        }
    }
});
