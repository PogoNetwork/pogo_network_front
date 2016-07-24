angular.module('profile')
  .factory('profileApi', ($q, cacheDB) => {
    const API = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&choe=UTF-8';

    /**
     * Code based on {@link http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript}
     * Fetch a qrCode for an URL
     * @param  {String} url url to convert
     * @param  {String} url Type of data to save
     * @return {$q.Promise}     Promise containing the qrcode as a dataURL  string
     */
    const getQrCode = (url, type = 'qrcode.user') => {
      const promise = $q.defer();
      const cache = cacheDB.read(type);

      if (cache) {
        promise.resolve(cache);
      } else {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = `${API}&chl=${encodeURIComponent(url)}`;

        img.onload = function () {
          const canvas = document.createElement('CANVAS');
          const ctx = canvas.getContext('2d');
          canvas.height = this.height;
          canvas.width = this.width;
          ctx.drawImage(this, 0, 0);

          const dataURL = canvas.toDataURL('image/jpeg');
          cacheDB.put(type, dataURL);
          promise.resolve(dataURL);
        };
        img.onerror = promise.reject;
      }

      return promise.promise;
    };

    return { getQrCode };
  });
