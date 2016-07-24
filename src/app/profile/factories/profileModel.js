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
    return { qrcode };
  });
