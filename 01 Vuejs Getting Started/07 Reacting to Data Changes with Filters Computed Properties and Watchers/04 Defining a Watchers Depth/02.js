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

                    shoppingCart: {
                        items: [],
                        subTotal: 0
                    }
                },
                watch: {
                    shoppingCart: {
                        handler: function(latest, original) {
                            console.log('Call watch => shoppingCart => handler');
                            this.updateSubTotal()
                        },
                        deep: true
                    }
                },
                created: function() {
                    this.updateSubTotal();
                },
                methods: {
                    updateSubTotal: function() {
                        console.log('call updateSubTotal()');
                        var length = this.shoppingCart.items.length;

                        var t = 0;
                        for (var i = 0; i < length; i++) {
                            t += this.shoppingCart.items[i].price;
                        }
                        this.shoppingCart.subTotal = t;
                    },

                    buy: function(beer) {
                        console.log('call buy()');
                        this.shoppingCart.items.push(beer);
                    }
                }
            });