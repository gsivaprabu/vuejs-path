var growler = new Vue({
    el: '#growler',
    data: {
        pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
});


var growler1 = new Vue({
    el: '#growler1',
    data: {
        pages: [
            { number: 1, url: '?page=1' },
            { number: 2, url: '?page=2' },
            { number: 3, url: '?page=3' }
        ]
    }
});


var growler2 = new Vue({
    el: '#growler2',
    data: {
        pages: [
            { number: 1, url: '?page=1' },
            { number: 2, url: '?page=2' },
            { number: 3, url: '?page=3' }
        ]
    }
});


var growler3 = new Vue({
    el: '#growler3',
    data: {
        pages: [{
            number: 1,
            url: '?page=1',
            sections: ['A', 'B', 'C']
        }, {
            number: 2,
            url: '?page=2',
            sections: ['Y','Z']
        }]
    }
});
