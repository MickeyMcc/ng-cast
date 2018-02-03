angular.module('video-player')

  .component('videoDetails', {
    bindings: {
      video: '<',
      statistics: '<'
    },

    templateUrl: 'src/templates/videoDetails.html',

    controller: function (youTube) {
    }
  });