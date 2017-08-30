(function() {
    app.factory('hugoUIService', function() {
        var debug = true;
        // highlighted compoent index
        return {
            log: function(message) {
                if (debug) {
                    console.log(message);
                }
            },

        };
    });
})();
