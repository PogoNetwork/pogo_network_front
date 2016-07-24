angular.module('profile')
  .factory('profileModel', (actions, profileApi) => {
    const qrcode = () => {
      profileApi
        .getQrCode()
        .then((url) => actions('profile').dispatchChange({
          type: 'qrcode.success',
          model: url,
        }))
        .catch((error) => actions('profile').dispatchChange({ type: 'qrcode.error', error }));
    };

    const getUser = () => {
      actions('profile').dispatchChange({
        type: 'about.success',
        model: {
          pseudo: 'Monique',
          avatar: {
            url: '//unsplash.it/300/300',
          },
        },
      });
    };

    return { qrcode, getUser };
  });
