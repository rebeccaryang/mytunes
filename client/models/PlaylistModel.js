var PlaylistModel = Backbone.Model.extend({
  defaults: {
    name: "Default"
  },

  initialize:function(){
    this.set('songQueue', new SongQueue());
  },

  selected: function() {
    this.trigger('selected');
  }
});