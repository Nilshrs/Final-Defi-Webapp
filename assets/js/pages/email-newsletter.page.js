parasails.registerPage('indexEMailMessage', {

  data: {

  },

  template: ``,

  beforeMount: function () {

    const routes= [
      {
        path: '/',
        name: 'Home',
        component: Vue.options.components.test,
        props: {  },
      },
      {
        path: '/test',
        name: 'Test2',
        component: Vue.options.components.test2,
      }
    ];
    this.$router.addRoutes(routes);
  },

  router: new VueRouter({
    mode: 'history',
    base: '/tab-page/'
  }),

  methods: {


  }

});
