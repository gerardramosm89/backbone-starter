const TodoItem = Backbone.Model.extend({
  defaults: {
    completed: false
  },
  urlRoot: 'https://jsonplaceholder.typicode.com/todos',
  toggle: function() {
    this.set('completed', !this.get('completed'));
  }
});
