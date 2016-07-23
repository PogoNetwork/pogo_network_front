angular.module('core')
  .directive('mapLocation', (actions) => {
    const API_KEY = '';
    window.initMap = () => actions('map').dispatchInput();

    const script = document.createElement('SCRIPT');
    script.src = `//maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    document.head.appendChild(script);


    return {
      replace: true,
      scope: {},
      template: '<div class="mapLocation-container"></div>',
      link(scope, el) {
        actions('map')
          .subscribe('INPUT', () => {
            // Create a map object and specify the DOM element for display.
            const map = new google.maps.Map(el[0], {
              center: { lat: -34.397, lng: 150.644 },
              scrollwheel: false,
              zoom: 8,
            });
          });
      },
    };
  });
