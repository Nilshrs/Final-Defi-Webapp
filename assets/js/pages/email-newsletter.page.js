parasails.registerPage('email-newsletter', {


  router: new VueRouter({}),

  beforeMount: function () {

    _.extend(this, SAILS_LOCALS)

  },
});


