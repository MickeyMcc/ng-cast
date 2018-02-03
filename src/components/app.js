var app = angular.module('video-player');

app.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});

app.controller('AppCtrl', function(youTube) {
  this.newSearch = (query) => {
    const params = {
      query: query,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    youTube.search(params, this.handleSearch);
  };

  this.titleClick = (video) => {
    this.currentVideo = video;
    this.url = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
  };

  this.handleSearch = (newVideos) => {
    this.videos = newVideos;
    this.currentVideo = newVideos[0];
    this.url = 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
  };

  this.videos = this.newSearch('corgis');
});