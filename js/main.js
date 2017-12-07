// Creating Models
var Album = Backbone.Model.extend();
var album = new Album();
album.set('title', 'This is the title');

// Validating
var Song = Backbone.Model.extend({
    validate: function(attrs) {
        if(!attrs.title) return 'title is required';
    }
})
var song = new Song();