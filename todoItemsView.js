const TodoItemsView = Backbone.View.extend({
  tagName: 'ul',
  id: 'todoItems',
  initialize: function(options) {
    this.model.on('add', this.onAddTodoItem, this);
  },
  onAddTodoItem: function(todoItem) {
    const view = new TodoItemView({ model: todoItem });
    this.$el.append(view.render().$el);
  },
  events: {
    'click #add': 'onClickAdd',
    'keypress #newTodoItem': 'onKeyPress'
  },
  onKeyPress: function(e) {
    if (e.keyCode == 13) {
      this.onClickAdd();
    }
  },
  onClickAdd: function() {
    console.log('attempting to add a todo');
    const $textBox = $('#newTodoItem')
    if ($textBox.val() == '') return;
    const todoItem = new TodoItem({ description: $textBox.val() });
    $textBox.val("")
    this.model.add(todoItem);
  },
  render: function() {
    const self = this;
    this.$el.append('<input type="text" id="newTodoItem" autofocus></input>')    
    this.$el.append('<button id="add">Add</button>')
    this.model.each(function(todoItem) {
      const view = new TodoItemView({ model: todoItem });
      self.$el.append(view.render().$el);
    });
    return this;
  }
});