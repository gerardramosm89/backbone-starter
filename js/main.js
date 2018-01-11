var Song = Backbone.Model.extend();
var SongView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.model.get('title'))
        return this
    }
});
var song = new Song({ title: 'song 1' });
var songView = new SongView({ el: "#container", model: song });
songView.render()