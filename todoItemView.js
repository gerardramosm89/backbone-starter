const TodoItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function (options) {
    if (!(options && options.model)) {
      throw new Error("Model was not specified");
    }
    this.model.on('change', this.render, this);
  },
  events: {
    'click #toggle': 'onClickToggle',
    'click #delete': 'onClickDelete'
  },
  onClickToggle: function(e) {
    this.model.toggle();
    this.model.save();
    console.log(this.model.toJSON())
  },
  onClickDelete: function(e) {
    this.model.destroy()
    console.log(`currently trying to delete ${this.model.get('title')}`)
  },
  render: function () {
    this.$el.attr('id', this.model.id);
    this.$el.toggleClass('completed', this.model.get('completed'));
    const checked = this.model.get('completed') ? 'checked' : '';
    this.$el.html("<input id='toggle' type='checkbox'" +
    checked + "></input>" + `
    <span id="todoItemDescriptionText">
    ${this.model.escape('title')}
    </span>
    <button id='delete'>Delete this item</button>
    `);
    return this;
  }
});