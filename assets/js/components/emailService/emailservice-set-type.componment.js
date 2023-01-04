
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
      test: '',
      errors: [],
      //…
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
            <input type="radio" id="general overview" value="strong price changes" v-model="type" />
            <label for="strong price changes"> Price changes of token in portfolio (over 5%) </label>
          </div>
          <div class="form-check">
            <input type="radio" id="general overview" value="portfolio price changes" v-model="type" />
            <label for="portfolio price changes"> Portfolio value changes (over 5%)</label>
          </div>
          <div class="form-check">
            <input type="radio" id="portfolio overview" value="portfolio overview" v-model="type" />
            <label for="portfolio overview">Portfolio overview</label>
          </div>
        </div>

        <div v-if="type">
          <router-link to="/set-email-cycle" class="btn btn-secondary">Next</router-link>
        </div>

        <!-- Use this or button
        <input type="submit" value="Submit" >
        <button type="submit" value="Submit" class="btn btn-secondary">Next</button>
        <button v-on:click="childMethod">CLICK - 2</button>

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </p>

        -->
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

    type(value) {
      console.log(value);
      this.$emit('set-type', value);
    },

  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    childMethod: function() {
      this.$emit('method', this.child_msg);
    },

    //dont need this fuction here cecause div to next componment is hidden
    check: function (e){

      console.log(this.type);

      if(this.type) {
        return true;
      }

      this.errors = [];

      if (this.type !== "") {
        this.errors.push('Type required.');
      }
      e.preventDefault();
    }
  }
});
