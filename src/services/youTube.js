angular.module('video-player')
  .service('youTube', function($http) {
    this.getRepo = function(options, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search/',
        params: {
          part: 'snippet',
          key: options.key,
          q: options.query,
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

    this.details = function(options, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          part: 'snippet,statistics',
          id: options.id,
          key: options.key,
        }
      })
        .then(function(data) {
          callback(data.data.items);
        });
    };
  });
