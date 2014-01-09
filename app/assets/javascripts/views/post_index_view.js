JournalApp.Views.PostsIndex = Backbone.View.extend({
  events: { 'click button.index_delete': "delete" },

  initialize: function (collection) {
    this.collection = collection;
    this.listenTo(this.collection, 'add change:title remove reset', this.render.bind(this));
  },

  render: function () {
    var $ul = $('<ul></ul>')

    this.collection.each(function(post) {
      var li = ("<li>" + post.escape('title'));
      var button = '<button class="index_delete" data-id=' + post.id + '>Delete Post</button>';
      var $li = $(li + button + '</li>');
      $ul.append($li);
    });

    this.$el.empty();
    this.$el.html($ul);
    return this;
  },

  delete: function (event) {
    var id = event.currentTarget.getAttribute("data-id");
    var post = this.collection.get(id);
    post.destroy();
  }


});