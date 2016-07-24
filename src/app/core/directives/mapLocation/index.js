angular.module('core')
  .directive('mapLocation', (actions, geoLocation, mapModel) => ({
    replace: true,
    scope: {},
    template: '<div class="mapLocation-container"></div>',
    link(scope, el) {
      actions('map')
        .subscribe('INPUT', () => {
          const { longitude = -34.397, latitude = 150.644 } = geoLocation.current();
          mapModel.render(el[0], latitude, longitude);
          mapModel.addMarker(latitude, longitude);
        });

      mapModel.load();
    },
  }));
