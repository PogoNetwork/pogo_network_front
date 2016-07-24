angular.module('core')
  .factory('mapModel', (actions) => {
    const API_KEY = '{{API_KEY}}';
    let $map;

    const load = () => {
      const script = document.createElement('SCRIPT');
      window.initMap = () => actions('map').dispatchInput();
      script.src = `//maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
      document.head.appendChild(script);
    };

    const render = (node, lat, lng) => {
      // Create a map object and specify the DOM element for display.
      $map = new window.google.maps.Map(node, {
        center: { lat, lng },
        scrollwheel: true,
        zoom: 16,
      });
    };

    const addMarker = (lat, lng, label = 'Myself') => {
      const marker = new window.google.maps.Marker({
        map: $map,
        animation: google.maps.Animation.DROP,
        // Define the place with a location, and a query string.
        place: {
          location: { lat, lng },
          query: label,
        },
      });
    };

    return { load, render, addMarker };
  });
