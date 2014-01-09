JournalApp.Views.PostShow = Backbone.View.extend({
  events: { 'click button.back': "back" },

  // initialize: function (option) {  },

  render: function () {
    this.$el.empty();
    var $ul = $('<ul></ul>');
    var title = ("<li>" + this.model.escape('title') + "</li>");
    var body = ("<li>" + this.model.escape('body') + "</li>");
    var button = '<li><button class=back>Back</button></li>';
    $ul.append(title).append(body).append(button);

    this.$el.html($ul);

    return this;
  },

  back: function (event) {
    Backbone.history.navigate("/", {trigger: true});
  }

});