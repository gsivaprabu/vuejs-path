var growler = new Vue({
    el: '#growler',
    data: {
        results: [
            { name: 'Ahool Ale', ibu: '33 i.b.u.' },
            { name: 'Agogwe Ale', ibu: '28 i.b.u.' },
            { name: 'Agogwe Ale' },
            { name: 'Aswang Ale', ibu: '31 i.b.u.' }
        ]
    },
    filters: {
        convertIBU: function(value) {
            if (!value) {
                return '';
            }

            value = value.toString();
            console.log("value", value);
            value = value.replace(/\./g, ''); // Remove all periods
            console.log("value", value);
            return value.toUpperCase(); // Convert to upper case
        }
    }
});
