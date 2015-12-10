// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      //play the song if it's the only one in the queue
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(song) {
      //remove the first song
      this.remove(song);
      //it there is another song play it
      if(this.length > 0){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },
  playFirst: function(){
    this.at(0).play();
  }

});