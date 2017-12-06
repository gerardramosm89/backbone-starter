var Song = Backbone.Model.extend({
    initialize: function() {
        console.log('new song created!');
    }
});

var song = new Song();