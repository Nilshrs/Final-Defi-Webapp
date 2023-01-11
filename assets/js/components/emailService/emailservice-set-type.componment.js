
parasails.registerComponent('emailType', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function (){
    return {
      type: null,
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `

    <div class="emailType">
      <h2>Choose email type:</h2>

      <form>
        <div class="form-group">
          <div class="form-check">
            <input type="radio" id="general overview" value="general overview" v-model.lazy="type" />
            <label for="general overview"> General overview </label>
          </div>
          <div class="form-check">
            <input type="radio" id="strong price changes" value="strong price changes" v-model="type" />
            <label for="strong price changes"> Price changes of token in portfolio (over 5%) </label>
          </div>
          <div class="form-check">
            <input type="radio" id="portfolio price changes" value="portfolio price changes" v-model="type" />
            <label for="portfolio price changes"> Portfolio value changes (over 5%)</label>
          </div>
          <div class="form-check">
            <input type="radio" id="portfolio overview" value="portfolio overview" v-model="type" />
            <label for="portfolio overview">Portfolio overview</label>
          </div>
        </div>

        <div v-if="!type" class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"   aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div v-if="type" class="mt-4">
          <router-link to="/set-email-cycle" id="defi-button-mobile">Next</router-link>

          <div class="progress" >
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </form>

    </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  mounted: async function(){
    //…
  },
  beforeDestroy: function() {
    //…
  },


  watch: {

    // In a Vue.js application, the $emit method is used to trigger an event on the current component instance.
    // This is useful for communicating between components in a Vue.js application.
    type(value) {
      this.$emit('set-type', value);
    },

  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
  }
});
