const TodoItemsView = Backbone.View.extend({
  tagName: 'ul',
  id: 'todoItems',
  initialize: function(options) {
    this.model.on('add', this.onAddTodoItem, this);
    this.model.on('remove', this.onRemoveTodoItem, this);
  },
  onRemoveTodoItem: function(todoItem) {
    $(`#${todoItem.id}`).remove()
  },
  onAddTodoItem: function(todoItem) {
    const view = new TodoItemView({ model: todoItem, id: todoItem.id, title: todoItem.toJSON().title });
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
    const $textBox = $('#newTodoItem')
    if ($textBox.val() == '') return;
    const todoItem = new TodoItem({ title: $textBox.val() });
    this.model.create(todoItem);
    // todoItem.save()
    // this.model.add(todoItem);    
    $textBox.val("")
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