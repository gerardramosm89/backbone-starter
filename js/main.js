$(document).ready(() => {
  const todoItems = new TodoItems();
  todoItems.fetch({
    success: function(e) {
      console.log('we fetched successfully!', e.toJSON());
    }
  });

  const todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
});