angular.module('video-player')

  .component('search', {
    bindings: {
      newSearch: '<'
    },
    templateUrl: 'src/templates/search.html',
    controller: function(youTube) {
      this.query = '';
    }
  });
