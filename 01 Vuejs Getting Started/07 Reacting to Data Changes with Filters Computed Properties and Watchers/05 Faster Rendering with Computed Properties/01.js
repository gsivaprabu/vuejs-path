            var growler = new Vue({
                el: '#growler',
                data: {
                    items: [
                        { name: 'Milk', price: 3.52 },
                        { name: 'Eggs', price: 1.86 }
                    ],
                    subTotal: 0.00,
                    salesTax: 0.07
                },
                watch: {
                    items: function() {
                        console.log('responding to item change.');
                        var t = 0;
                        for (var i = 0; i < this.items.length; i++) {
                            t = t + this.items[i].price;
                        }
                        this.subTotal = t;
                    }
                },
                computed: {
                    grandTotal: function() {
                        return this.subTotal * this.salesTax;
                    }
                },
                methods: {
                    generatePrices: function() {
                        for (var i = 0; i < this.items.length; i++) {
                            var dollars = Math.floor((Math.random() * 3) + 1); // Get a random value between 1 and 3
                            var cents = Math.floor((Math.random() * 99)) / 100; // Get a random value between 0 and 99

                            var item = this.items[i];
                            item.price = (dollars + cents).toFixed(2);
                            Vue.set(this.items, i, item); // Overcome limitations of JavaScript. Ensure Vue is aware of the change in data
                        }
                    },

                    generateNewTaxRate: function() {
                        var newTaxRate = Math.floor((Math.random() * 10)) / 100; // Get a random value between 0 and 10
                        this.salesTax = newTaxRate;
                    }
                }
            });