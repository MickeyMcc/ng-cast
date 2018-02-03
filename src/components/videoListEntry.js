angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      titleClick: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controller: function () {
    }
  });


