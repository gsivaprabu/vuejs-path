setTimeout(initializeGrowler, 3000);
function initializeGrowler() {
    var growler = new Vue({
        el: '#growler',
        data: {
            history: ''
        },

        created: function() {
            this.history = 'Growler created!';
        }
    });
}