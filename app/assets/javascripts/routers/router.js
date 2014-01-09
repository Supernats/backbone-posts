JournalApp.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "postIndex",
    "posts/:id" : "postShow"
  },

  postIndex: function () {
    var posts = new JournalApp.Collections.Posts();
    posts.fetch({
      success: function() {
        var view = new JournalApp.Views.PostsIndex(posts)
        $('.content').html(view.render().$el)
      }
    });
  },

  postShow: function (postId) {
    var post = new JournalApp.Models.Post({id: postId});
    post.fetch({
      success: function() {
        var view = new JournalApp.Views.PostShow({model: post})
        $('.content').html(view.render().$el)
      }
    });
  }



});