var growler = new Vue({
    el: '#growler',
    data: {
        results: [
            { name: 'Ahool Ale', ibu: '33 i.b.u.' },
            { name: 'Agogwe Ale', ibu: null },
            { name: 'Aswang Ale', ibu: '31 i.b.u.' }
        ]
    },

    filters: {
        convertIBU: function(value, empty) {
            if (!value) {
                return empty;
            }

            value = value.toString();
            if (this.growler) {
                value = this.growler.$options.filters.removePeriods(value);
                value = this.growler.$options.filters.toUpperCase(value);
            }
            return value;
        },

        removePeriods: function(value) {
            return value.replace(/\./g, '');
        },

        toUpperCase: function(value) {
            return value.toUpperCase();
        }
    },

    methods: {
        applyFilters: function() {
            var item = this.results[0];
            Vue.set(this.results, 0, item);
        }
    }
});
