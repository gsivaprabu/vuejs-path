var growler = new Vue({
    el: '#growler',
    data: {
        canConnect: false
    },
    computed: {
        isOnline: {
            get: function() {
                console.log('get called')
                return this.canConnect ? 'Live' : 'Alive';
            },
            set: function(newValue) {
                console.log('set called')
                console.log('was: ' + this.canConnect + ' now:' + newValue);
                this.canConnect = newValue;
                console.log("this.canConnect", this.canConnect);
            }
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
