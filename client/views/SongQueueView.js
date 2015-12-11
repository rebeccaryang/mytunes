// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    //listen for changes in song queue
    this.collection.on('add', this.render, this);
    this.collection.on('remove',this.render,this);
  },

  render: function() {
    this.$el.html('<th>Queue</th>')
    // var that = this;
    // this.collection.each(function(song){
    //   var songQueueEntryView = new SongQueueEntryView({model:song});
    //   that.$el.append(songQueueEntryView.$el);
    // });

    this.$el.append(this.collection.map(function(song) {
      var songQueueEntryView = new SongQueueEntryView({model:song});
      return songQueueEntryView.render();
    }));

  }

});
