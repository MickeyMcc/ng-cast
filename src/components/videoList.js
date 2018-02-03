angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      titleClick: '<'
    },
    templateUrl: 'src/templates/videoList.html',
    controller: function() {
    }
  });
