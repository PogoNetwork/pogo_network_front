angular.module('core')
  .factory('actions', () => {
    const emitter = new EventEmitter2();
    emitter.setMaxListeners(0);

    // Create factory cache
    const map = Object.create(null);

    const factory = (name) => {
      const namespace = name ? name + '.' : '';
      const dispatch = ({ type, state = {} }) => emitter.emit(namespace + type, state || {});
      const subscribe = (action, cb) => {
        emitter.on(namespace + action, cb);
        return () => emitter.off(namespace + action, cb);
      };

      return map[name] = {
        dispatch,
        dispatchChange(state = {}) {
          dispatch({ type: 'CHANGE', state });
        },
        dispatchInput(state = {}) {
          dispatch({ type: 'INPUT', state });
        },

        /**
         * Subscribe to an action and return its own unsubscribe function
         * @param  {String}   action ACTION_NAME
         * @param  {Function} cb
         * @return {Function}          unsubscribe
         */
        subscribe,
        /**
         * Subscribe to an action once, auto destroy after the first call
         * @param  {String}   action ACTION_NAME
         * @param  {Function} cb
         * @return {void}
         */
        subscribeOnce(action, cb) {
          emitter.once(namespace + action, cb);
        },

        subscribeChange(cb) {
          return subscribe('CHANGE', cb);
        },

        subscribeInput(cb) {
          return subscribe('INPUT', cb);
        },
      };
    };

    return name => map[name] || factory((name));
  });
