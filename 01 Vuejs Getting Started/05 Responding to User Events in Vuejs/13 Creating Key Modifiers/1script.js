    Vue.config.keyCodes = {
        f1: 112
    };

    var growler = new Vue({
        el: '#growler',
        data: {
            query: '',
            history: ''
        },

        methods: {
            openInfo: function(e) {
                e.preventDefault();
                this.history += 'Show app information.\n';
            },

            clearHistory: function() {
                this.history = '';
            }
        }
    });
