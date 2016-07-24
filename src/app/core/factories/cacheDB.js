angular.module('core')
  .factory('cacheDB', () => {
    const ID = 'pogonetwork';

    /**
     * Get data from localStorage
     * @param {String} key Key name for the value
     * @return {Array}
     */
    const read = key => JSON.parse(localStorage.getItem(`${ID}.${key}`) || false);

    /**
     * Set data to the cache
     * @param {String} key key to store the value
     * @param {Object} data
     */
    const put = (key, data) => localStorage.setItem(`${ID}.${key}`, JSON.stringify(data));

    /**
     * Remove a key from the localstoage
     * @param  {String} key
     * @return {Void}
     */
    const remove = key => localStorage.removeItem(`${ID}.${key}`);

    return { read, put, remove };
  });
