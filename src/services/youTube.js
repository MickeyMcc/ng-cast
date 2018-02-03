angular.module('video-player')
  .service('youTube', function($http) {
    this.getRepo = function(options, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search/',
        params: {
          part: 'snippet',
          key: options.key || window.YOUTUBE_API_KEY,
          q: options.query || 'corgi puppies',
          maxResults: options.max || 5,
          type: 'video',
          videoEmbeddable: true
        }
      })
        .then(function(data) {
          callback(data.data.items);
        });
    };

    this.search = _.debounce(this.getRepo.bind(this), 500);
  });
