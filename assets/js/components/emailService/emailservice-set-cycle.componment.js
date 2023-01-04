
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
      <h2>Coose the email cycle</h2>


    <form>
      <div class="form-group">
        <div class="form-check">
          <input type="radio" id="hourly" value="hourly" v-model.lazy="cycle" />
          <label for="hourly"> Hourly </label>
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

      <div v-if="cycle">
        <router-link to="/set-email-tip" class="btn btn-secondary">Next</router-link>
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
    cycle(newValue){
      console.log(newValue);
      this.$emit( 'set-cycle', newValue );
    }
  },


  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

  }
});
