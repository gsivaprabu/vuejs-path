var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            { name: 'Snallygaster Pale Ale', price: 10 },
            { name: 'Tikibalang Barley Wine', price: 20 },
            { name: 'Pale Popobawa Ale', price: 30 },
            { name: 'Ahool Ale', price: 40 },
            { name: 'North Adjule Lager', price: 50 }
        ],
        shoppingCart: [],
        subTotal: 0
    },
    watch: {
        subTotal: function(latest, original) {
            this.calculateSalesTax();
        }
    },
    created: function() {
        this.updateSubTotal();
        this.$watch('shoppingCart.length', function(latest, original) {
            console.log('Was:');
            console.log(original);
            console.log('---');

            console.log('Now:');
            console.log(latest);

            growler.updateSubTotal();
        });
    },
    methods: {
        updateSubTotal: function() {
            var length = this.shoppingCart.length;

            var t = 0;
            for (var i = 0; i < length; i++) {
                t += this.shoppingCart[i].price;
            }
            this.subTotal = t;
        },

        calculateSalesTax: function() {
            var taxRate = 0.07; // Apply 7% sales tax.
            var grandTotal = (this.subTotal * taxRate) + this.subTotal;
            console.log(grandTotal);
        },

        buy: function(beer) {
            this.shoppingCart.push(beer);
        }
    }
});
