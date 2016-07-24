angular.module('profile')
  .directive('qrcode', (actions, profileModel) => ({
    replace: true,
    templateUrl: 'profile.qrcode.index.html',
    link(scope, el) {
      const $img = el[0].querySelector('.qrcode-picture');
      const $legend = el[0].querySelector('.qrcode-legend');
      const unsubscribe = actions('profile')
        .subscribeChange(({ type, model }) => {
          if (type === 'qrcode.success') {
            $img.src = model;
            $legend.textContent = 'PUT URL HERE';
          }
        });

      profileModel.qrcode();

      scope
        .$on('$destroy', () => {
          unsubscribe();
        });
    },
  }));
