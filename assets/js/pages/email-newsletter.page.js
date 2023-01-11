parasails.registerPage('indexEMailMessage', {



  // Data object for this page's component
  data: {

    type: null,
    cycle: null,
    tip: { wantsToTip: 0 , tipAmount: 0, paymentType: null }


  },

  template: ``,

  //The Vue Router is a library for building Single Page Applications (SPAs) with Vue.js
  //it is used for client side rendering
  //its not an external package it comes with a standart  sails web app
  // It allows you to define routes for your application, which map to components that will be displayed when the route is accessed.

  // The  mode is history so the URl gets manipulated and changed to be more intuitive for users.
  router: new VueRouter({
    mode: 'history',
    base: '/email-service'
  }),


  // Function that runs before this page's component is mounted
  beforeMount: function () {

    //Define routes for the Vue Router
    const routes= [
      {
        path: '/set-email-type',
        name: 'EmailType',
        component: Vue.options.components.emailType,
        props: { }
      },
      {
        path: '/set-email-cycle',
        name: 'EmailCycle',
        component: Vue.options.components.emailCycle,
        props: { }
      },
      {
        path: '/set-email-tip',
        name: 'EmailTip',
        component: Vue.options.components.emailTip,
        props: { }
      },
      {
        path: '/stripe-payment',
        name: 'StipePayment',
        component: Vue.options.components.stripepayment,
        props: { }
      },
      {
        path: '/crypto-payment',
        name: 'Cryptopayment',
        component: Vue.options.components.cryptopayment,
        props: {},
      },
      {
        path: '/',
        name: 'Home',
        component: Vue.options.components.blub,
        props: {},
      },
    ];
    // Add the routes to the Vue Router
    this.$router.addRoutes(routes);
  },


  methods: {

    createEmailService: async function() {
      // Send a POST request to the '/e-mail-messages/create' endpoint
      await fetch('/e-mail-messages/create', {
        method: 'POST',
        headers: {
          'Content-type': 'application.json',
        },
        body: JSON.stringify({
          type: this.type,
          cycle: this.cycle,
          // Convert the wantsToTip property to a 1 or 0 for the backend
          isTipping: this.tip.wantsToTip === 'yes' ?  1 : 0,
          amount: this.tip.tipAmount,
          paymentType: this.tip.paymentType
        }
        )
      })
        .then( response => {
          if(response.status === 200) {
            alert('Successfully created email service');
            //Redirect to dashboard
            window.location.href = '/';
          }else {
            alert('Error did not create email service try again');
            //redirect to start of transactions
            this.$router.push('set-email-type');

          }
          console.log(response);
        } );
    },

    // setters get called when child component  emits function with the value
    // these functions are mapped in the <router-view> tag @ attributes on the indexEmail.ejs
    setEmailType(type){
      this.type = type;
    },

    setEmailCycle(cycle){
      this.cycle = cycle;
    },

    setTip( tip ){
      this.tip = tip;
    }
  }

});
