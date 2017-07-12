var growler = new Vue({
    el: '#growler',
    data: {
        beers: [
            { name: 'TikibalangBarley Wine', abv: 9.6 },
            { name: 'HyoteChocolate Stout', abv: 7.4 },
            { name: 'PopeLick Porter', abv: 6.5 },
            { name: 'AhoolAle', abv: 5.4 },
            { name: 'NorthAdjuleLager', abv: 3.7 }
        ],
        maxAbv: 7.0
    }
});
