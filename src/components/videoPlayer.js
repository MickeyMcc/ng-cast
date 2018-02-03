angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      url: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function () {
      this.autoplay = true;
      
      this.toggleAutoplay = function() {
        this.autoplay = !this.autoplay;
      };

      this.buildUrl = function() {
        if (!this.video) {
          return;
        }
        const base = 'https://www.youtube.com/embed/';
        if (!this.autoplay) {//some kind of button condition here
          return base + this.video.id.videoId;
        } else {
          return base + this.video.id.videoId + '?autoplay=1';
        }
      };

      this.autoplayMessage = function () {
        if (this.autoplay) {
          return 'Autoplay On';
        } else {
          return 'Autoplay Off';
        }
      };
    }
  });
