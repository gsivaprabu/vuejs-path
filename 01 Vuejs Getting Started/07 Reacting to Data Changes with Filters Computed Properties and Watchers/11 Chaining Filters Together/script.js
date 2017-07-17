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
            console.log("value", value);
            if (!value) {
                return empty;
            }

            console.log('convertIBU: ' + value);
            return value.toString();
        },

        removePeriods: function(value) {
            console.log('removePeriods: ' + value);
            return value.replace(/\./g, '');
        },

        toUpperCase: function(value) {
            console.log('toUpperCase: ' + value);
            return value.toUpperCase();
        }
    }
});
