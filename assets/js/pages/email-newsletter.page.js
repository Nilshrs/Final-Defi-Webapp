parasails.registerPage('indexEMailMessage', {

  data: {

    type: null,
    cycle: null,
    tip: { wantsToTip: null, tipAmount: null }

  },

  template: ``,


  beforeMount: function () {

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
        path: '/',
        name: 'Home',
        component: Vue.options.components.blub,
        props: {},
      },

    ];
    this.$router.addRoutes(routes);
  },

  router: new VueRouter({
    mode: 'history',
    base: '/email-service'
  }),

  methods: {

    handleData: function (e) {
      [this.user.name, this.user.number] = e;
    },
    updateParent(value_from_child){
      this.msg = value_from_child;
      alert("Hello child" + value_from_child);
    },

    update2(value_from_child){
      this.msg = value_from_child;
      alert(value_from_child);
    },


    // get called when child componment emits function SetType
    setEmailType(type){

      this.type = type;
    },

    setEmailCycle(cycle){
      this.cycle = cycle;
    },

    setTip( tip ){
      this.tip = tip;
      console.log({tip});

    }

  }

});
