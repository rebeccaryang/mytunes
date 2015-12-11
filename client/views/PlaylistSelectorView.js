//collection: playlists
var PlaylistSelectorView = Backbone.View.extend({
  tagName: 'div',

  events: {
    //'click button' --> model function
    'click button': function(e) {
      //find our textBox and get the text inside it
      var playlistName = $('input[type="text"]').val();
      //call a collection function to add a new playlist with that input as its name
      this.collection.add({name: playlistName});
      //(and then set it to currentPlaylist)
    },

    'change select': function(e) {
      var selectedIndex = e.target.selectedIndex;
      this.collection.at(selectedIndex).selected();
    }
  },

  initialize: function() {
    this.render();

    this.collection.on('add', function(playlist) {
      //call this.render so that the new playlist appears as an option
      this.render(playlist);
      //set the current selected option to that new playlist name

    }, this);
  },

  render: function(selectedPlaylist) { //optional param - only supplied in the above event listener for 'add'
    //create dropdown menu of playlist names
    var $dropdown = $('<select></select>');
    //append a map over collection: playlist --> '<option>playlistName</option>'
    $dropdown.append(this.collection.map(function(playlist) {
      var $newView = new PlaylistSelectorEntryView({model: playlist}).render();
      if (playlist === selectedPlaylist) {
        //update newView.$el to have the selected attribute
        $newView.prop('selected',true);
      }
      return $newView;
    }));

    //create text field to put a new playlist name
    var $textBox = $('<input type="text"></input>');

    //create button to add playlist
    var $button = $('<button>Add Playlist</button>');

    //adjust this.$el.html with the above html and/or by appending nodes to it
    //return this.$el at the end, for any functions that need that value
    this.$el.html([$dropdown,$textBox,$button]);

    return this.$el;
  }
});