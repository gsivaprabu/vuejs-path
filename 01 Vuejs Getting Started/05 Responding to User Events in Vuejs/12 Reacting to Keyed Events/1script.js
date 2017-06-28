var growler = new Vue({
    el: '#growler',
    data: {
    	query:""
    },
    methods: {}
});

function checkForEnter(e) {
    varc = e.keyCode ? e.keyCode : e.which;
    if (c == 13) {
        growler.executeSearch();
        return false;
    }
    return true;
}
