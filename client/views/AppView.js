// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.playlistSelectorView = new PlaylistSelectorView({collection: this.model.get('playlists')});
    this.playlistView = new PlaylistView({model: this.model.get('currentPlaylist')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('change:currentPlaylist', function(model){
      this.playlistView.setPlaylist(model.get('currentPlaylist'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.playlistSelectorView.$el,
      this.playlistView.$el
    ]);
  }

});
