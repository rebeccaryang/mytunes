var PlaylistSelectorView = Backbone.View.extend({
  tagName: 'div',

  events: {
    //'click button' --> model function
    //'click button':
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    //create dropdown menu of playlist names
    var $dropdown = $('<select></select>');
    //append a map over collection: playlist --> '<option>playlistName</option>'
    $dropdown.append(this.collection.map(function(playlist) {
      return new PlaylistSelectorEntryView({model: playlist}).render();
    }));

    //create text field to put a new playlist name
    var $textBox = $('<input type="text"></input>');

    //create button to add playlist
    var $button = $('<button>Add Playlist</button>');

    //adjust this.$el.html with the above html and/or by appending nodes to it
    //return this.$el at the end, for any functions that need that value
    this.$el.append($dropdown);
    this.$el.append($textBox);
    this.$el.append($button);

    return this.$el;
  }
});