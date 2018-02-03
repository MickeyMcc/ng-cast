angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      url: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function () {
    }
  });
