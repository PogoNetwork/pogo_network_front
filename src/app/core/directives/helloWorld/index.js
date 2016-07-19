angular.module('core')
  .directive('helloWorld', () => ({
    template: `
      <section class="helloWorld-container">
        <h2 class="helloWorld-title">PogoNetwork <time class="helloWorld-timer">{{date}}</time></h2>
        <p class="helloWorld-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, laboriosam. Totam porro, quod nihil perspiciatis. Esse molestias impedit autem, recusandae sint perferendis harum dolores veniam, quo optio totam qui adipisci.</p>
      </section>
    `,
    link(scope) {
      const id = setTimeout(() => {
        scope
          .$applyAsync(() => {
            scope.date = new Date().toDateString();
          });
        clearTimeout(id);
      }, 2400);
    }
  }))
