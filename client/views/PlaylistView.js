var PlaylistView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.addSongQueueListeners();
  },

  render: function() {
    this.$el.html('<th>'+this.model.get('name')+'</th>');

    this.$el.append(this.model.get('songQueue').map(function(song) {
      var songQueueEntryView = new SongQueueEntryView({model:song});
      return songQueueEntryView.render();
    }));

  },

  setPlaylist: function(playlist) {
    this.model = playlist;
    this.render();
    this.addSongQueueListeners();
  },

  addSongQueueListeners: function() {
    //listen for changes in song queue
    this.model.get('songQueue').on('add', this.render, this);
    this.model.get('songQueue').on('remove',this.render, this);
  }

});
