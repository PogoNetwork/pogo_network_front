angular.module('profile')
  .directive('aboutMe', (actions, profileModel) => ({
    replace: true,
    templateUrl: 'profile.aboutMe.index.html',
    link(scope) {
      const unsubscribe = actions('profile')
        .subscribeChange(({ type, model }) => {
          if (type === 'about.success') {
            scope
              .$applyAsync(() => {
                scope.model = model;
              });
          }
        });

      profileModel.getUser();

      scope
        .$on('$destroy', () => {
          unsubscribe();
        });
    },
  }));
