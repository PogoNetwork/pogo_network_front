angular.module('core')
  .factory('geoLocation', (actions, $q) => {
    let userPosition = {};
    const RADIO = actions('location.user');

    /**
     * Detect the current position for an user
     * @return {$q.Promise}
     */
    function locate() {
      const promise = $q.defer();
      const opt = {
        enableHighAccuracy: true,
        timeout: 2000, // Default is Infinity aka trolling W3C
        maximumAge: 3600000,
      };

      if (!navigator.geolocation) {
        promise.reject(new Error('API geolocation is not available'));
      } else {
        navigator
          .geolocation
          .getCurrentPosition(
            ({ coords = {} } = {}) => {
              const { longitude, latitude } = coords;
              const model = angular.extend({}, userPosition = { latitude, longitude });
              RADIO.dispatchInput({ type: 'success', model });
            },
            (error) => RADIO.dispatchInput({ type: 'error', error }),
            opt
          );
      }
    }

    const current = () => userPosition;

    return { locate, current };
  });
