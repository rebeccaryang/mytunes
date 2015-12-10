// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    //if a click happens, dequeue
    'click': function() {
      this.model.dequeue();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template(this.model.attributes);
    return this.$el.html(html);
  }
});
