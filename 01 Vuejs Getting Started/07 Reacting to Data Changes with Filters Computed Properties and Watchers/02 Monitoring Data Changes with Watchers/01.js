var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            { name: 'Ahool Ale', price: 2.80 },
            { name: 'Agogwe Ale', price: 2.38 },
            { name: 'Aswang Ale', price: 3.05 },
            { name: "Buru's Barley Wine", price: 2.95 },
            { name: 'Hyote Chocolate Stout', price: 4.68 },
            { name: 'North Adjule Lager', price: 3.84 }
        ],

        shoppingCart: [],
        subTotal: 0.00
    },
    watch: {
        shoppingCart: function() {
            console.log("shoppingCart");
            this.updateSubTotal();
        }
    },
    created: function() {
        console.log("created");
        this.updateSubTotal();
    },
    methods: {
        updateSubTotal: function() {
            console.log("updateSubTotal");
            var length = this.shoppingCart.length;

            var t = 0;
            for (var i = 0; i < length; i++) {
                t += this.shoppingCart[i].price;
            }
            this.subTotal = t;
        },

        buy: function(beer) {
            console.log("buy"	);
            this.shoppingCart.push(beer);
        }
    }
});
