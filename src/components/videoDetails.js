angular.module('video-player')

  .component('videoDetails', {
    bindings: {
      video: '<'
    },

    templateUrl: 'src/templates/videoDetails.html',

    controller: function (youTube) {

      this.statistics = {};

      this.getDetails = () => {
        console.log('getDetails called');
        console.log('details cont', this);
        const params = {
          id: this.video.id.videoId,
          part: 'statistics',
          key: window.YOUTUBE_API_KEY
        };
        youTube.details(params, this.setStatistics);
      };
      
      this.setStatistics = (data) => {
        console.log(data);
        this.statistics = data[0].statistics;
        console.log(this.statistics);
      };

      this.getViews = function() {
        //this.getDetails();
        return this.statistics.viewCount;
      };

      // this.$onInit = () => {
      //   setTimeout(() => {
          
      //   }, 1000);
      //};
    }
  });