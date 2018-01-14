$(document).ready(() => {
  const todoItems = new TodoItems([
    new TodoItem({ description: 'Todo Item 1' }),
    new TodoItem({ description: 'Todo Item 2'}),
  ]);
  const todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
});