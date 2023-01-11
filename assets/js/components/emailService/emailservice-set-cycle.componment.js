
parasails.registerComponent('emailCycle', {
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
      cycle: null,
      error: null
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="emailCycle">
      <h2>Choose the email cycle</h2>


    <form>
      <div class="form-group">
        <div class="form-check">
          <input type="radio" id="hourly" value="hourly" v-model.lazy="cycle" />
          <label for="hourly">hourly </label>
        </div>
        <div class="form-check">
          <input type="radio" id="daily" value="daily" v-model.lazy="cycle" />
          <label for="daily"> daily </label>
        </div>
        <div class="form-check">
          <input type="radio" id="weekly" value="weekly" v-model.lazy="cycle" />
          <label for="weekly"> weekly </label>
        </div>
        <div class="form-check">
          <input type="radio" id="monthly" value="monthly" v-model.lazy="cycle" />
          <label for="monthly"> monthly </label>
        </div>
      </div>

      <div v-if="cycle" class="mt-4">
        <router-link to="/set-email-tip" id="defi-button-mobile">Next</router-link>

        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div v-else class="progress" >
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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

  // will be called when the value of cycle change
  watch: {
    cycle(newValue){
      this.$emit( 'set-cycle', newValue );
    }
  },


  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {



  }
});
