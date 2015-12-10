// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  //model passed in will be the CURRENT SONG for app

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': function(e) {
      this.model.ended();
    }
  },

  initialize: function() {
    //on this.el (which is the current song) ending,
      //call this.model.ended
    //$(appView.playerView.el)
    //this.$el.on('ended', this.model.ended, this);
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
