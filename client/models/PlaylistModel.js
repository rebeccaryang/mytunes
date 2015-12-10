var PlaylistModel = Backbone.Model.extend({
  defaults: {
    'name': "Playlist"
  },

  initialize:function(){
    this.set('songQueue', new SongQueue());
  }
});