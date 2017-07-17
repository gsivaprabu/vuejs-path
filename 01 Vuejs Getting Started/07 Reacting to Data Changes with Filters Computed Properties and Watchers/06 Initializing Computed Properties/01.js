var growler = new Vue({
    el: '#growler',
    data: {
        canConnect: false
    },
    computed: {
        isOnline: function() {
            return this.canConnect ? 'Yes' : 'No';
        }
    },
    created: function() {
        axios.get('https://www.ecofic.com')
            .then(function(res) {
                console.log("res", res);
                growler.canConnect = true;
            })
            .catch(function(err) {
                console.log("err", err);
                growler.canConnect = false;
            });
    }
});
