var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        history: ''
    },

    methods: {
        onBlockClick: function(e) {
            this.history += 'Mouse was pressed down!\n';

            var button = 'Unknown';
            if (e.button === 0) {
                button = 'Left';
            } else if (e.button === 1) {
                button = 'Middle';
            } else if (e.button === 2) {
                button = 'Right';
            }
            this.history += button + ' button was pressed down.\n---\n\n';
        },

        clearHistory: function() {
            this.history = '';
        }
    }
});
