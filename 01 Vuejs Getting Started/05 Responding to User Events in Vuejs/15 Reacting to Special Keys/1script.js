var growler = new Vue({
    el: '#growler',
    data: {
        query: '',
        history: ''
    },

    methods: {
        onAnyClick: function(e) {
            this.logEvent(e);
        },

        onAltClick: function(e) {
            this.logEvent(e);
        },

        onCtrlClick: function(e) {
            this.logEvent(e);
        },

        onMetaClick: function(e) {
            this.logEvent(e);
        },

        onShiftClick: function(e) {
            this.logEvent(e);
        },

        logEvent: function(e) {
            console.log(e);
            if (e instanceof KeyboardEvent) {
                this.history += 'Key click happened. ';
            } else if (e instanceof MouseEvent) {
                this.history += 'Mouse click happened. ';
                if (e.button === 0) {
                    this.history += 'Left mouse button was clicked ';
                } else if (e.button === 1) {
                    this.history += 'Middle mouse button was clicked ';
                } else if (e.button === 2) {
                    this.history += 'Right mouse button was clicked ';
                }

                if (e.ctrlKey === true) {
                    this.history += 'with the Ctrl key';
                }
                if (e.altKey === true) {
                    this.history += 'with the Alt key';
                }
                if (e.metaKey === true) {
                    this.history += 'with the Meta key';
                }
                if (e.shiftKey === true) {
                    this.hsitory += 'with the Shift key';
                }

                this.history += '\n';
            }
        },

        clearHistory: function() {
            this.history = '';
        }
    }
});
