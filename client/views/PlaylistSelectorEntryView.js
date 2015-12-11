//model: playlist
var PlaylistSelectorEntryView = Backbone.View.extend({
  tagName: 'option',
  
  events: {
    'select': function() {
      this.model.selected();
    }
  },
  
  initialize: function() {
    this.render();
  },

  render: function() {
    return this.$el.html(this.model.get('name'));
  }
});