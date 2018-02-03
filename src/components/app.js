var app = angular.module('video-player');

app.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});

app.controller('AppCtrl', function(youTube) {
  this.newSearch = (query) => {
    const params = {
      query: query,
      max: 8,
      key: window.YOUTUBE_API_KEY
    };
    youTube.search(params, this.handleSearch);
  };

  this.currentVideo = null;
  this.url = '';

  this.titleClick = (video) => {
    this.currentVideo = this.getDetails(video);
  };

  this.getDetails = (video) => {
    const params = {
      id: video.id.videoId,
      part: 'statistics',
      key: window.YOUTUBE_API_KEY
    };
    youTube.details(params, this.setStatistics);
  };

  this.setStatistics = (data) => {
    this.statistics = data[0].statistics;
  };

  this.handleSearch = (newVideos) => {
    this.videos = newVideos;
    this.currentVideo = newVideos[0];
    this.url = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
    this.statistics = this.getDetails(this.currentVideo);
  };

  this.videos = this.newSearch('corgis');
});