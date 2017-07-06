var growler = new Vue({
    el: '#growler',
    methods: {
        pageClick: function(v) {
            console.log('v', vVal = v);
            alert('Clicked: ' + v);
        }
    }
});
