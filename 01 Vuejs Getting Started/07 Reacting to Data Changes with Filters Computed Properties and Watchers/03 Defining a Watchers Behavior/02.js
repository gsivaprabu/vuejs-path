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
        subTotal: 0.00
    },
    watch: {
        shoppingCart: function(latest, original) {
            console.log("latest", latest);
            console.log("original", original);
            this.updateSubTotal();
        },
        subTotal: function(latest, original) {
            console.log('Was:');
            console.log(original);
            console.log('---');

            console.log('Now:');
            console.log(latest);
            this.calculateSalesTax();
        }
    },
    created: function() {
        this.updateSubTotal();
    },
    methods: {
        updateSubTotal: function() {
            var length = this.shoppingCart.length;

            var t = 0;
            for (var i = 0; i < length; i++) {
                t += this.shoppingCart[i].price;
            }
            this.subTotal = t;
            console.log("this.subTotal", this.subTotal);
        },

        calculateSalesTax: function() {
            var taxRate = 0.10; // Apply 10% sales tax.
            var grandTotal = (this.subTotal * taxRate) + this.subTotal;
            console.log(grandTotal);
        },

        buy: function(beer) {
            this.shoppingCart.push(beer);
        }
    }
});
