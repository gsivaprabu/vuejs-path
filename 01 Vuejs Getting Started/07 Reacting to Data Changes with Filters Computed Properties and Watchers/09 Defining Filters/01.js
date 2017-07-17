var growler = new Vue({
    el: '#growler',
    data: {
        results: [
            { name: 'Ahool Ale', ibu: '33 i.b.u.' },
            { name: 'Agogwe Ale', ibu: null },
            { name: 'Agogwe Ale' },
            { name: 'Aswang Ale', ibu: '31 i.b.u.' }
        ]
    },
    filters: {
        convertIBU: function(value, empty) {
            if (!value) {
                return empty;
            }

            value = value.toString();
            value = value.replace(/\./g, ''); // Remove all periods
            return value.toUpperCase(); // Convert to upper case
        }
    }
});
